"use client";

import { useEffect, useRef } from "react";
import { officePins } from "../data/offices";
import "leaflet/dist/leaflet.css";

/**
 * The Find Us map.
 *
 * A real slippy map rather than the flat PNG this replaced: it pans, it zooms,
 * and the tiles carry the actual road network, water and place names of Nigeria
 * at whatever scale the reader takes it to.
 *
 * Tiles are CARTO's dark basemap over OpenStreetMap data. Two reasons for that
 * one: it is dark to begin with, which is what lets the map sit against the
 * enquiry panel as one surface instead of a white rectangle beside a black one.
 * The basemap key comes from NEXT_PUBLIC_CARTO_KEY; without it CARTO stamps an
 * "API key required" watermark across every tile.
 *
 * Leaflet is loaded inside the effect because it touches `window` at import
 * time, which would break the server render.
 */
/**
 * CARTO serves these tiles unkeyed, but stamps an "API key required" watermark
 * across them when no key is present. The key is public by necessity — the
 * browser fetches the tiles — so it lives in a NEXT_PUBLIC_ variable rather
 * than in this file, which keeps it rotatable without a code change.
 *
 * `dark_all` rather than the `voyager` style: voyager is CARTO's light basemap,
 * and this map sits on the section's dark ground.
 */
const CARTO_KEY = process.env.NEXT_PUBLIC_CARTO_KEY ?? "";
const tiles = (style: string) =>
  `https://basemaps.cartocdn.com/rastertiles/${style}/{z}/{x}/{y}{r}.png` +
  (CARTO_KEY ? `?key=${CARTO_KEY}` : "");

/**
 * The basemap is taken in two layers rather than one.
 *
 * `dark_all` bakes its place names into the same raster as the roads, so the
 * grey they are drawn in cannot be touched without dragging the whole map with
 * it. Split into `dark_nolabels` and `dark_only_labels`, the lettering is its
 * own transparent layer, and a filter on that layer alone lifts the type to
 * white while the roads underneath keep their tone.
 */
const BASE_TILES = tiles("dark_nolabels");
const LABEL_TILES = tiles("dark_only_labels");

export default function OfficeMap() {
  const holder = useRef<HTMLDivElement>(null);
  // Leaflet mutates the container; this guards the double-invoke that Strict
  // Mode does in development, which would otherwise initialise two maps into
  // the same div and throw.
  const built = useRef(false);

  useEffect(() => {
    if (built.current || !holder.current) return;
    built.current = true;
    let map: import("leaflet").Map | undefined;

    (async () => {
      const L = (await import("leaflet")).default;
      if (!holder.current) return;

      map = L.map(holder.current, {
        // The wheel is the page's scroll on a long page, so taking it here
        // would trap the reader. Ctrl/Cmd + wheel zooms, the buttons zoom, and
        // on touch a two-finger pinch zooms.
        scrollWheelZoom: false,
        zoomControl: true,
        // Removed at the client's direction. Note that OSM's ODbL and CARTO's
        // terms both ask for a credit somewhere the reader can find it; if one
        // is ever wanted back, the site footer is the place for it.
        attributionControl: false,
      });

      L.tileLayer(BASE_TILES, { maxZoom: 20 }).addTo(map);
      L.tileLayer(LABEL_TILES, { maxZoom: 20, className: "om-labels" }).addTo(map);

      // Grey pins, as asked. Built as a divIcon so the colour is ours rather
      // than Leaflet's default blue sprite, and so the pulse can be pure CSS.
      const icon = L.divIcon({
        className: "om-pin",
        html: '<span class="om-pin-dot"><span class="om-pin-ring"></span></span>',
        iconSize: [18, 18],
        iconAnchor: [9, 9],
        popupAnchor: [0, -10],
      });

      const markers = officePins.map((o) =>
        L.marker([o.lat, o.lng], { icon, title: o.name })
          .addTo(map!)
          .bindPopup(
            `<strong>${o.name}</strong><br/><span class="om-pop-addr">${o.address}</span>`
          )
      );

      // Frame both chambers rather than hard-coding a centre, so adding a third
      // office later needs no change here.
      const bounds = L.latLngBounds(officePins.map((o) => [o.lat, o.lng]));
      map.fitBounds(bounds, { padding: [64, 64], maxZoom: 7 });

      // Leaflet measures the container on init; inside a grid column that can
      // still be settling, so re-measure once it has.
      const ro = new ResizeObserver(() => map?.invalidateSize());
      ro.observe(holder.current);

      markers.forEach((m) => m);
      return () => ro.disconnect();
    })();

    return () => {
      map?.remove();
      built.current = false;
    };
  }, []);

  return (
    <div className="om-wrap">
      <div ref={holder} className="om-map" role="application" aria-label="Map of our Abuja and Port Harcourt offices" />


      <style jsx global>{`
        .om-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 320px;
          background: #101a17;
          overflow: hidden;
        }
        .om-map {
          width: 100%;
          height: 100%;
          min-height: 320px;
          background: #101a17;
        }

        /* The pin: a mild gold dot inside a soft ring of the same, no drop
           shadow and no teardrop. Gold is the site's one accent, and against a
           map with no other colour on it two small points of it are enough. */

        /* Only the lettering. Enough to take CARTO's grey type to something
           that reads as white at 11px without blooming the halos behind it. */
        .om-labels {
          filter: brightness(1.85) contrast(1.06);
        }

        .om-pin-dot {
          display: block;
          width: 12px;
          height: 12px;
          margin: 3px;
          border-radius: 50%;
          background: #c9ab6a;
          border: 1px solid rgba(255, 245, 220, 0.6);
          position: relative;
        }
        .om-pin-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1px solid rgba(201, 171, 106, 0.5);
        }

        /* Leaflet's own chrome, brought onto the dark ground. */
        .leaflet-container {
          background: #101a17;
          font-family: var(--font-instrument-sans), sans-serif;
        }
        .leaflet-control-zoom a {
          background: rgba(20, 26, 22, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #e8ebe9;
        }
        .leaflet-control-zoom a:hover {
          background: rgba(38, 46, 41, 0.96);
          color: #ffffff;
        }
        .leaflet-bar {
          border: none;
          box-shadow: none;
        }
        .leaflet-popup-content-wrapper,
        .leaflet-popup-tip {
          background: #1b2723;
          color: #ffffff;
          border-radius: 4px;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.45);
        }
        .leaflet-popup-content {
          margin: 12px 14px;
          font-size: 12.5px;
          line-height: 1.5;
        }
        .om-pop-addr {
          color: rgba(255, 255, 255, 0.66);
        }
      `}</style>
    </div>
  );
}
