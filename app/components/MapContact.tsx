"use client";

import { useState } from "react";
import { contactEmail, mapAlt, mapImage, offices } from "../data/offices";

// Set NEXT_PUBLIC_FORMSPREE_ENDPOINT to the form's own address once one has
// been created at formspree.io (it looks like https://formspree.io/f/xxxxabcd).
//
// Until that is set the form does not transmit. It previously posted to a
// literal "YOUR_FORM_ID" placeholder, which meant a prospective client's name,
// phone, email and description of their matter left their browser for a third
// party the firm does not control, to reach a form that does not exist. For
// enquiries that may carry confidences that is the wrong way to fail, so with
// no endpoint configured the form now sends nothing at all and points the
// visitor at the chambers' own address instead.
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";
const isEndpointConfigured =
  FORMSPREE_ENDPOINT.startsWith("https://formspree.io/f/") &&
  !FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID");

export default function MapContact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "", email: "" });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error" | "unconfigured"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isEndpointConfigured) {
      setStatus("unconfigured");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", message: "", email: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="mc-section">
      <div className="mc-inner">
        <h2 className="mc-heading">Find Us</h2>
        <div className="mc-rule" />

        <div className="mc-row">
          <div className="mc-map-col">
            <div className="mc-col-head">
              <h3 className="mc-subheading">Visit Us</h3>
              <p className="mc-intro">Two offices, one standard of care.</p>
            </div>
            <div className="mc-map">
              <img src={mapImage} alt={mapAlt} className="mc-map-img" />
            </div>
          </div>

          <div className="mc-contact">
            <div className="mc-col-head">
              <h3 className="mc-subheading">Contact Us</h3>
              <p className="mc-intro">From consultation to representation.</p>
            </div>

            <form onSubmit={handleSubmit} className="mc-form">
              <div className="mc-form-row">
                <div className="mc-field">
                  <label className="mc-label" htmlFor="mc-name">Name</label>
                  <input
                    id="mc-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mc-input"
                  />
                </div>
                <div className="mc-field">
                  <label className="mc-label" htmlFor="mc-phone">Phone</label>
                  <input
                    id="mc-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mc-input"
                  />
                </div>
              </div>

              <div className="mc-field mc-field-full">
                <label className="mc-label" htmlFor="mc-email">Email Address</label>
                <input
                  id="mc-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mc-input"
                />
              </div>

              <div className="mc-field mc-field-full">
                <label className="mc-label" htmlFor="mc-message">Message</label>
                <textarea
                  id="mc-message"
                  required
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mc-input mc-textarea"
                />
              </div>

              <button type="submit" className="mc-send" disabled={status === "sending"}>
                <span className="mc-send-label">
                  {status === "sending" ? "Sending" : "Send"}
                </span>
                <span className="mc-send-arrow" aria-hidden="true">
                  <svg width="17" height="17" viewBox="0 0 17.2416 16.7702" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.0776 8.38509H16.164" stroke="currentColor" strokeWidth="2.1552" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.62082 1.0776L16.164 8.38509L8.62082 15.6926" stroke="currentColor" strokeWidth="2.1552" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              {status === "success" && (
                <p className="mc-status mc-status-success">
                  Message sent successfully. We&apos;ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="mc-status mc-status-error">
                  Something went wrong. Please try again, or call the number below.
                </p>
              )}
              {status === "unconfigured" && (
                <p className="mc-status mc-status-error">
                  This form is not accepting messages yet, so nothing was sent.
                  Please email{" "}
                  <a className="mc-status-link" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>{" "}
                  or call the number below.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mc-info-strip">
          {offices.map((office) => (
            <div key={office.label} className="mc-info">
              <span className="mc-info-mark" />
              <p className="mc-info-label">{office.label}</p>
              <p className="mc-info-value">{office.value}</p>
            </div>
          ))}
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
          background: #f1efd9;
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
          background: #cd9610;
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
          color: #cd9610;
          font-size: var(--fs-h3);
          font-weight: 500;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }
        .mc-intro {
          margin: 0;
          color: #383131;
          font-size: var(--fs-body);
          font-weight: 400;
          line-height: 1.6;
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
          background: #faf9ec;
        }
        .mc-map-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
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

        /* Same cream label / white arrow split as the hero call to action. */
        .mc-send {
          display: inline-flex;
          align-self: flex-start;
          align-items: stretch;
          height: clamp(52px, 4.6vw, 64px);
          margin-top: 4px;
          padding: 0;
          background: #fff8e5;
          border: 1px solid #000;
          border-radius: 2px;
          color: #000;
          cursor: pointer;
          font-family: inherit;
          transition: box-shadow 0.25s ease, opacity 0.2s ease;
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
          border-left: 1px solid #000;
          transition: background-color 0.25s ease, color 0.25s ease;
        }
        .mc-send:hover:not(:disabled) {
          box-shadow: 0 4px 16px rgba(41, 29, 0, 0.18);
        }
        .mc-send:hover:not(:disabled) .mc-send-arrow {
          background: #cd9610;
          color: #fff8e5;
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
          grid-template-columns: repeat(3, minmax(0, 1fr));
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
          background: #cd9610;
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
            aspect-ratio: 3 / 2;
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
