"use client";

import ConsultationForm from "./ConsultationForm";
import { contactEmail, mapAlt, mapImage, offices } from "../data/offices";

export default function MapContact() {

  return (
    <section className="mc-section">
      <div className="mc-inner">
        <h2 className="mc-heading">Find Us</h2>
        <div className="mc-rule" />

        <div className="mc-row">
          <div className="mc-map-col">
            <div className="mc-col-head">
              <h3 className="mc-subheading">Visit Us</h3>
            </div>
            <div className="mc-map">
              <img src={mapImage} alt={mapAlt} className="mc-map-img" />
            </div>
          </div>

          {/* The enquiry form, beside the map as it has always been. */}
          <ConsultationForm />

        </div>

        {/* The address the mailto links already point at, given its own heading
            in the strip so a visitor can find it without opening a mail client
            to see what it is. Same mark, label and value treatment as the
            offices and the phone line — only the value is also a link. */}
        <div className="mc-info-strip">
          {offices.map((office) => (
            <div key={office.label} className="mc-info">
              <span className="mc-info-mark" />
              <p className="mc-info-label">{office.label}</p>
              <p className="mc-info-value">{office.value}</p>
            </div>
          ))}
          <div className="mc-info">
            <span className="mc-info-mark" />
            <p className="mc-info-label">Email</p>
            <p className="mc-info-value">
              <a className="mc-info-mail" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mc-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          /* Fills the viewport the way the other sections do, but still grows
             if the form and the info strip need more room. */
          min-height: 100svh;
          background: #ffffff;
          font-family: var(--font-instrument-sans), sans-serif;
          box-sizing: border-box;
        }
        .mc-inner {
          width: 100%;
          padding: clamp(48px, 5vw, 72px) var(--page-gutter)
            clamp(48px, 5.1vw, 74px);
          box-sizing: border-box;
        }
        .mc-heading {
          margin: 0;
          color: #000;
          font-size: var(--fs-h2);
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: -0.03em;
          text-align: right;
        }
        .mc-rule {
          width: 100%;
          height: 1px;
          background: #1d1e24;
          margin-top: clamp(16px, 2.2vw, 32px);
        }

        .mc-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: clamp(32px, 5vw, 72px);
          padding-top: clamp(36px, 4.4vw, 64px);
        }
        .mc-col-head {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: clamp(20px, 2.2vw, 32px);
        }
        .mc-subheading {
          margin: 0;
          color: #1d1e24;
          font-size: var(--fs-h3);
          font-weight: 500;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }

        .mc-map-col {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .mc-map {
          position: relative;
          flex: 1 1 auto;
          overflow: hidden;
          border: 1px solid rgba(205, 150, 16, 0.4);
          border-radius: 4px 32px 4px 32px;
          background: #ffffff;
        }
        .mc-map-img {
          display: block;
          width: 100%;
          height: 100%;
          /* contain, not cover. The two pins sit about 2% and 90% down the
             source image, so they are the first things a cover crop throws
             away — the Abuja pin is close enough to the top edge that any
             vertical crop at all removes it. Letterboxing against the panel's
             own background is the lesser cost: a map that is missing both of
             the offices it exists to show is not a map. */
          object-fit: contain;
        }

        .mc-contact {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .mc-form {
          display: flex;
          flex-direction: column;
          gap: clamp(20px, 2.2vw, 30px);
        }
        .mc-form-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: clamp(20px, 2.6vw, 36px);
        }
        .mc-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 0;
        }
        .mc-field-full {
          width: 100%;
        }
        .mc-label {
          color: #383131;
          font-size: var(--fs-micro);
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .mc-input {
          width: 100%;
          box-sizing: border-box;
          border: none;
          border-bottom: 1px solid rgba(56, 49, 49, 0.35);
          background: transparent;
          outline: none;
          padding: 6px 0;
          color: #000;
          font-family: inherit;
          font-size: var(--fs-body);
          transition: border-color 0.2s ease;
        }
        .mc-input:focus {
          border-bottom-color: #cd9610;
        }
        .mc-textarea {
          resize: vertical;
          line-height: 1.6;
        }

        /* The hero's call to action, exactly: a white slab with a gold hairline
           and a 2px corner, the arrow cell divided off by a rule rather than
           sitting in a capsule. The two are the only buttons on the page and
           they now behave identically — see .v2h-abtn in sandbox-hero.css. */
        .mc-send {
          display: inline-flex;
          align-self: flex-start;
          align-items: stretch;
          height: clamp(52px, 4.6vw, 64px);
          margin-top: 4px;
          padding: 0;
          background: #ffffff;
          border: 1px solid #563c02;
          border-radius: 2px;
          color: #1d1e24;
          cursor: pointer;
          font-family: inherit;
          transition: opacity 0.2s ease;
        }
        .mc-send-label {
          display: flex;
          align-items: center;
          padding: 0 clamp(14px, 1.2vw, 16px) 0 clamp(18px, 1.7vw, 24px);
          font-size: var(--fs-small);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .mc-send-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: clamp(46px, 4.3vw, 61px);
          background: #fff;
          border-left: 1px solid #563c02;
          color: #1d1e24;
          transition: background-color 0.28s ease, color 0.28s ease;
        }
        .mc-send-arrow svg {
          transition: transform 0.32s cubic-bezier(0.65, 0, 0.35, 1);
        }
        /* Pointer-only, as in the hero. On a touch screen the hover state
           sticks after a tap and the cell would stay inverted until something
           else was touched — on a submit button that reads as the form still
           working. */
        @media (hover: hover) and (pointer: fine) {
          .mc-send:hover:not(:disabled) .mc-send-arrow,
          .mc-send:focus-visible:not(:disabled) .mc-send-arrow {
            background: #6b6c73;
            color: #ffffff;
          }
          .mc-send:hover:not(:disabled) .mc-send-arrow svg,
          .mc-send:focus-visible:not(:disabled) .mc-send-arrow svg {
            transform: translateX(3px);
          }
        }
        .mc-send:focus-visible {
          outline: 2px solid #563c02;
          outline-offset: 3px;
        }
        .mc-send:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .mc-status {
          margin: 0;
          font-size: var(--fs-small);
        }
        .mc-status-success {
          color: #1a7a1a;
        }
        .mc-status-error {
          color: #b3261e;
        }
        .mc-status-link {
          color: inherit;
          font-weight: 600;
          overflow-wrap: anywhere;
        }

        .mc-info-strip {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(24px, 3vw, 48px);
          width: 100%;
          margin-top: clamp(40px, 4.8vw, 68px);
        }
        .mc-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mc-info-mark {
          width: 46px;
          height: 1px;
          background: #1d1e24;
          margin-bottom: 6px;
        }
        .mc-info-label {
          margin: 0;
          color: #000;
          font-size: var(--fs-body);
          font-weight: 600;
        }
        .mc-info-value {
          margin: 0;
          color: #383131;
          font-size: var(--fs-body);
          font-weight: 400;
          line-height: 1.6;
          /* The address is one long unbreakable token; without this it forces
             its column wider than the three beside it. */
          overflow-wrap: anywhere;
        }
        /* Reads as the value it is — the underline only appears on interaction. */
        .mc-info-mail {
          color: inherit;
          font: inherit;
          text-decoration: none;
        }
        .mc-info-mail:hover,
        .mc-info-mail:focus-visible {
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        /* Four columns need more room than three did, so the strip drops to two
           before it drops to one. */
        @media (max-width: 1200px) {
          .mc-info-strip {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .mc-section {
            min-height: 0;
          }
          .mc-heading {
            text-align: left;
          }
          .mc-row {
            grid-template-columns: 1fr;
          }
          .mc-map {
            /* The source is 712 x 759, so a 3/2 box left the image no room:
               contain would letterbox it heavily, cover would crop a third of
               its height. Matching the natural ratio means neither happens. */
            aspect-ratio: 712 / 759;
            flex: none;
          }
          .mc-info-strip {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }

        @media (max-width: 560px) {
          .mc-form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
