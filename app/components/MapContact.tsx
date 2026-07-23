"use client";

import { useState } from "react";

// Replace this with your actual Formspree endpoint after creating a form at formspree.io
// (looks like "https://formspree.io/f/xxxxabcd")
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const fieldLabelStyle = {
  color: "var(--Labels-Primary, #000)",
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  textTransform: "uppercase" as const,
};

const infoLabelStyle = {
  color: "#000",
  fontFamily: "var(--font-roboto-slab), serif",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 600,
  margin: 0,
};

const infoValueStyle = {
  color: "#1E1E1F",
  fontFamily: "var(--font-roboto-slab), serif",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "150%",
  margin: "8px 0 0 0",
};

export default function MapContact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "", email: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      <div className="mc-row">
        <div className="mc-map-col">
          <h2 className="mc-heading">Visit Us</h2>
          <p className="mc-intro">
            From consultation to representation.
          </p>
          <div className="mc-map">
            <img
              src="/images/map2.png"
              alt="Map showing our Abuja and Port-Harcourt office locations, marked with red pins"
              className="mc-map-img"
            />
          </div>
        </div>

        <div className="mc-contact">
          <h2 className="mc-heading">Contact Us</h2>
          <p className="mc-intro">
            From consultation to representation.
          </p>

          <form onSubmit={handleSubmit} className="mc-form">
            <div className="mc-form-row">
              <div className="mc-field">
                <label style={fieldLabelStyle}>Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mc-input"
                />
                <div className="mc-underline" />
              </div>
              <div className="mc-field">
                <label style={fieldLabelStyle}>Phone</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mc-input"
                />
                <div className="mc-underline" />
              </div>
            </div>

            <div className="mc-field mc-field-full">
              <label style={fieldLabelStyle}>Message</label>
              <input
                type="text"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mc-input"
              />
              <div className="mc-underline" />
            </div>

            <div className="mc-field mc-field-full">
              <label style={fieldLabelStyle}>Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mc-input"
              />
              <div className="mc-underline" />
            </div>

            <button type="submit" className="mc-send" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send"} <span aria-hidden="true">&rarr;</span>
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
          </form>
        </div>
      </div>

      </div>
      <div className="mc-info-strip">
        <div>
          <p style={infoLabelStyle}>Abuja Address</p>
          {/* NOTE: placeholder address - replace with the real Abuja office address */}
          <p style={infoValueStyle}>
            04053, Kyiv, Gogolivska str., 3904053, Kyiv, Gogolivska str., 3904053, Kyiv, Gogolivska str., 3904053,
          </p>
        </div>
        <div>
          <p style={infoLabelStyle}>Port-Harcourt Address</p>
          {/* NOTE: placeholder address - replace with the real Port-Harcourt office address */}
          <p style={infoValueStyle}>
            04053, Kyiv, Gogolivska str., 3904053, Kyiv, Gogolivska str., 3904053, Kyiv, Gogolivska str., 3904053,
          </p>
        </div>
      </div>

      <style jsx>{`
        .mc-section {
          display: flex;
          flex-direction: column;
          width: 100%;
          background: #F1EFD9;
        }
        .mc-inner {
          max-width: 1440px;
          margin: 0 auto;
          width: 100%;
        }
        .mc-row {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
        }
        .mc-map {
          position: relative;
          flex: 1 1 480px;
          align-self: flex-start;
          overflow: hidden;
          background-color: #d9d9d9;
        }
        .mc-map-img {
          display: block;
          width: 100%;
          height: auto;
        }
        .mc-contact {
          flex: 1 1 480px;
          padding: 80px 114px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          box-sizing: border-box;
        }
        .mc-heading {
          color: rgba(224, 175, 0, 0.6);
          font-family: var(--font-roboto-slab), serif;
          font-size: 32px;
          font-weight: 400;
          line-height: 138%;
          letter-spacing: -0.32px;
          text-transform: uppercase;
          margin: 0;
        }
        .mc-intro {
          color: #161616;
          font-family: var(--font-roboto-slab), serif;
          font-size: 20px;
          font-weight: 300;
          line-height: 141%;
          letter-spacing: -0.2px;
          margin: 0;
        }
        .mc-form {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .mc-form-row {
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
        }
        .mc-field {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 312px;
          max-width: 100%;
        }
        .mc-field-full {
          width: 100%;
          max-width: 625px;
        }
        .mc-input {
          border: none;
          outline: none;
          width: 100%;
          font-family: var(--font-roboto-slab), serif;
          font-size: 16px;
        }
        .mc-underline {
          width: 100%;
          height: 0;
          border-top: 1px solid #c6c6c8;
        }
        .mc-send {
          display: flex;
          align-self: stretch;
          height: 64px;
          padding: 16px 24px;
          justify-content: center;
          align-items: center;
          gap: 32px;
          border-radius: 4px;
          border: 1px solid #9f9f9f;
          background: #fff;
          color: #000;
          cursor: pointer;
          font-family: var(--font-roboto-slab), serif;
          font-size: 14px;
          text-transform: uppercase;
        }
        .mc-map-col {
          flex: 1 1 480px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding: 80px 114px;
          box-sizing: border-box;
        }
        .mc-send:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .mc-status {
          font-family: var(--font-roboto-slab), serif;
          font-size: 14px;
          margin: 0;
        }
        .mc-status-success {
          color: #1a7a1a;
        }
        .mc-status-error {
          color: #b3261e;
        }
        .mc-info-strip {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          width: 100%;
          padding: 40px 114px 80px 114px;
          box-sizing: border-box;
        }

        @media (max-width: 1024px) {
          .mc-contact {
            padding: 56px 48px;
          }
          .mc-info-strip {
            padding: 32px 48px 56px 48px;
            gap: 24px;
          }
        }

        @media (max-width: 640px) {
          .mc-contact {
            padding: 40px 24px;
          }
          .mc-heading {
            font-size: 26px;
          }
          .mc-intro {
            font-size: 16px;
          }
          .mc-form-row {
            gap: 24px;
          }
          .mc-info-strip {
            grid-template-columns: 1fr;
            padding: 32px 24px 56px 24px;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
