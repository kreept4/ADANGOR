"use client";

import { useState } from "react";
import { contactEmail } from "../data/offices";

// Same guard the enquiry form has always used: with no endpoint configured the
// form transmits nothing at all rather than posting a prospective client's
// matter to a placeholder address. See the note in MapContact for why.
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";
const isEndpointConfigured =
  FORMSPREE_ENDPOINT.startsWith("https://formspree.io/f/") &&
  !FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID");

type FieldName = "firstName" | "lastName" | "phone" | "nature" | "message";

/**
 * The fields, in the order they are read. The template numbered them 01 to 05;
 * the numbers are dropped here because five fields in two columns do not need
 * to be counted, and a number beside a label reads as a step in a process the
 * form does not have.
 */
const FIELDS: {
  name: FieldName;
  label: string;
  placeholder: string;
  type: string;
  long?: boolean;
}[] = [
  { name: "firstName", label: "Your first name", placeholder: "Type your first name", type: "text" },
  { name: "lastName", label: "Your last name", placeholder: "Type your last name", type: "text" },
  { name: "phone", label: "Phone Number", placeholder: "Type your phone number", type: "tel" },
  { name: "nature", label: "Nature of matter", placeholder: "Tell us briefly what you need", type: "text" },
  { name: "message", label: "How can we help?", placeholder: "Describe the matter in confidence", type: "text", long: true },
];

const EMPTY: Record<FieldName, string> = {
  firstName: "",
  lastName: "",
  phone: "",
  nature: "",
  message: "",
};

export default function ConsultationForm() {
  const [form, setForm] = useState(EMPTY);
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
        setForm(EMPTY);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="cf-section">
      <div className="cf-inner">
        <h2 className="cf-heading">
          Have legal questions or need representation? Contact us today to
          schedule a consultation with one of our experienced lawyers.
        </h2>

        <form className="cf-form" onSubmit={handleSubmit}>
          <div className="cf-grid">
            {FIELDS.map((f) => (
              <div
                key={f.name}
                className={`cf-field${f.long ? " cf-field--long" : ""}`}
              >
                <label className="cf-label" htmlFor={`cf-${f.name}`}>
                  {f.label}
                </label>
                <input
                  id={`cf-${f.name}`}
                  name={f.name}
                  type={f.type}
                  required
                  placeholder={f.placeholder}
                  value={form[f.name]}
                  onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                  className="cf-input"
                />
              </div>
            ))}
          </div>

          <div className="cf-foot">
            <p className="cf-note">All enquiries are treated with discretion.</p>

            <button type="submit" className="cf-submit" disabled={status === "sending"}>
              <span>{status === "sending" ? "Sending" : "Request a consultation"}</span>
              <span className="cf-submit-arrow" aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 10L10 3M10 3H4M10 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>

          <p className="cf-status" role="status" aria-live="polite">
            {status === "success" && "Message sent. We will be in touch shortly."}
            {status === "error" && "Something went wrong. Please try again, or call the number above."}
            {status === "unconfigured" && (
              <>
                This form is not accepting messages yet, so nothing was sent.
                Please email{" "}
                <a className="cf-status-link" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>{" "}
                or call the number above.
              </>
            )}
          </p>
        </form>
      </div>

      <style jsx>{`
        .cf-section {
          container: cf-panel / inline-size;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 4px 32px 4px 32px;
          background: #101a17;
          color: #ffffff;
          font-family: var(--font-instrument-sans), sans-serif;
          box-sizing: border-box;
        }
        .cf-inner {
          width: 100%;
          padding: clamp(24px, 2.8vw, 40px);
          box-sizing: border-box;
        }

        /* The one loud thing in the section. It is a question put to the
           reader, so it is set at display size and allowed to run to two or
           three lines rather than being trimmed to fit one. */
        .cf-heading {
          margin: 0 0 clamp(22px, 2.2vw, 32px);
          max-width: 26ch;
          font-size: clamp(20px, 1.9vw, 30px);
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: -0.022em;
          color: #ffffff;
        }

        .cf-form {
          display: flex;
          flex-direction: column;
        }

        /* Two columns on anything with the width for them, one below. The
           fifth field falls naturally into the left column of the third row,
           which is where the template leaves it. */
        .cf-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(20px, 2.2vw, 30px) clamp(24px, 3.4vw, 52px);
        }
        /* Keyed to the panel, not the viewport: this sits in a column roughly
           half the page wide, so a viewport media query would put two fields
           side by side in half the room they need. */
        @container cf-panel (min-width: 420px) {
          .cf-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .cf-field {
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-width: 0;
        }

        .cf-label {
          font-size: clamp(14px, 1.1vw, 16px);
          font-weight: 500;
          line-height: 1.3;
          color: #ffffff;
        }

        /* Underline fields, not boxes: the rule is the only chrome, so the
           section stays as quiet as the rest of the page. */
        .cf-input {
          width: 100%;
          box-sizing: border-box;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.28);
          background: transparent;
          outline: none;
          padding: 4px 0 10px;
          color: #ffffff;
          font-family: inherit;
          font-size: clamp(14px, 1.05vw, 15px);
          transition: border-color 0.2s ease;
        }
        .cf-input::placeholder {
          color: rgba(255, 255, 255, 0.42);
        }
        .cf-input:hover {
          border-bottom-color: rgba(255, 255, 255, 0.48);
        }
        .cf-input:focus {
          border-bottom-color: #ffffff;
        }

        .cf-foot {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          margin-top: clamp(24px, 2.4vw, 32px);
        }
        @container cf-panel (min-width: 420px) {
          .cf-foot {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 32px;
          }
        }

        .cf-note {
          margin: 0;
          font-size: clamp(12.5px, 1vw, 14px);
          color: rgba(255, 255, 255, 0.55);
        }

        .cf-submit {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: clamp(13px, 1.3vw, 17px) clamp(20px, 2vw, 28px);
          border: 1px solid rgba(255, 255, 255, 0.55);
          background: transparent;
          color: #ffffff;
          font-family: inherit;
          font-size: clamp(13px, 1vw, 15px);
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease, color 0.2s ease,
            border-color 0.2s ease;
        }
        .cf-submit:hover:not(:disabled),
        .cf-submit:focus-visible:not(:disabled) {
          background: #ffffff;
          border-color: #ffffff;
          color: #101a17;
        }
        .cf-submit:disabled {
          opacity: 0.55;
          cursor: default;
        }
        .cf-submit-arrow {
          display: inline-flex;
        }

        .cf-status:empty {
          display: none;
        }
        .cf-status {
          margin: 24px 0 0;
          font-size: clamp(13px, 1vw, 14px);
          color: rgba(255, 255, 255, 0.78);
        }
        .cf-status-link {
          color: #ffffff;
        }

        @media (prefers-reduced-motion: reduce) {
          .cf-input,
          .cf-submit {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
