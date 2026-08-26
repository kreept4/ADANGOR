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
 * one: it needs no API key or account, so nothing here can expire or start
 * billing, and it is dark to begin with, which is what lets the map sit against
 * the enquiry panel as one surface instead of a white rectangle beside a black
 * one. Attribution for both is required and is rendered bottom-right.
 *
 * Leaflet is loaded inside the effect because it touches `window` at import
 * time, which would break the server render.
 */
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
        // Off the map face: the credit is rendered as a quiet line under the
        // map instead. It is still shown, because OSM (ODbL) and CARTO both
        // require it, just not stamped across the corner of the tiles.
        attributionControl: false,
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 20,
          subdomains: "abcd",
        }
      ).addTo(map);

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

      {/* Required by the ODbL and by CARTO's terms. Kept off the tiles and set
          as small as it can be and still be read. */}
      <p className="om-credit">
        Map data{" "}
        <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer noopener">
          &copy; OpenStreetMap
        </a>{" "}
        contributors,{" "}
        <a href="https://carto.com/attributions" target="_blank" rel="noreferrer noopener">
          &copy; CARTO
        </a>
      </p>

      <style jsx global>{`
        .om-wrap {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          min-height: 320px;
          background: #0d211c;
          overflow: hidden;
        }
        .om-map {
          width: 100%;
          flex: 1 1 auto;
          min-height: 320px;
          background: #0d211c;
        }
        /* The tiles are a neutral near-black; the section is green. This wash
           sits over the tile pane and under the markers, so the basemap takes
           the section colour while the grey pins stay grey. */
        .om-map .leaflet-tile-pane {
          position: relative;
        }
        .om-map .leaflet-tile-pane::after {
          content: "";
          position: absolute;
          inset: 0;
          background: #0d211c;
          mix-blend-mode: color;
          opacity: 0.9;
          pointer-events: none;
          z-index: 450;
        }

        /* The pin: a grey dot with a soft grey ring, no drop shadow and no
           teardrop. The offices are two points on a quiet map, not two alerts. */
        .om-credit {
          margin: 8px 2px 0;
          font-size: 10px;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.34);
        }
        .om-credit a {
          color: rgba(255, 255, 255, 0.46);
          text-decoration: none;
        }
        .om-credit a:hover {
          color: rgba(255, 255, 255, 0.72);
          text-decoration: underline;
        }

        .om-pin-dot {
          display: block;
          width: 12px;
          height: 12px;
          margin: 3px;
          border-radius: 50%;
          background: #b9bdba;
          border: 1px solid rgba(255, 255, 255, 0.55);
          position: relative;
        }
        .om-pin-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1px solid rgba(185, 189, 186, 0.45);
        }

        /* Leaflet's own chrome, brought onto the dark ground. */
        .leaflet-container {
          background: #0d211c;
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
          background: #16302a;
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
