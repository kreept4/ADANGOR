"use client";

import { useState } from "react";
import { contactEmail } from "../data/offices";
import "./LandingEditorialSections.css";

const formFields = [
  { id: "name", label: "Your first name", placeholder: "Type your first name", type: "text" },
  { id: "surname", label: "Your last name", placeholder: "Type your last name", type: "text" },
  { id: "phone", label: "Phone Number", placeholder: "Type your phone number", type: "tel" },
  { id: "matter", label: "Nature of matter", placeholder: "Tell us briefly what you need", type: "text" },
] as const;

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";
const isEndpointConfigured =
  FORMSPREE_ENDPOINT.startsWith("https://formspree.io/f/") &&
  !FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID");

export default function StrategySection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "unconfigured" | "error">("idle");
  const [form, setForm] = useState<Record<string, string>>({});

  return (
    <section className="strategy-section" aria-labelledby="strategy-title">
      <div className="strategy-rule" />
      <div className="strategy-layout">
        <p className="strategy-kicker">Our strategy</p>
        <div className="strategy-copy">
          <h2 id="strategy-title">
            Have legal questions or need representation? Contact us today to
            schedule a consultation with one of our experienced lawyers.
          </h2>
          <form
            className="strategy-form"
            onSubmit={async (event) => {
              event.preventDefault();
              if (!isEndpointConfigured) {
                setStatus("unconfigured");
                return;
              }
              setStatus("sending");
              try {
                const response = await fetch(FORMSPREE_ENDPOINT, {
                  method: "POST",
                  headers: { "Content-Type": "application/json", Accept: "application/json" },
                  body: JSON.stringify(form),
                });
                setStatus(response.ok ? "success" : "error");
              } catch {
                setStatus("error");
              }
            }}
          >
            <div className="strategy-fields">
              {formFields.map((field, index) => (
                <label className="strategy-field" htmlFor={`strategy-${field.id}`} key={field.id}>
                  <span className="strategy-field-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="strategy-field-copy">
                    <span className="strategy-field-label">{field.label}</span>
                    <input
                      id={`strategy-${field.id}`}
                      name={field.id}
                      required
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id] ?? ""}
                      onChange={(event) =>
                        setForm({ ...form, [field.id]: event.target.value })
                      }
                    />
                  </span>
                </label>
              ))}
            </div>
            <label className="strategy-field strategy-field-message" htmlFor="strategy-message">
              <span className="strategy-field-number">05</span>
              <span className="strategy-field-copy">
                <span className="strategy-field-label">How can we help?</span>
                <textarea
                  id="strategy-message"
                  name="message"
                  required
                  placeholder="Describe the matter in confidence"
                  value={form.message ?? ""}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                />
              </span>
            </label>
            <div className="strategy-submit-row">
              <p>
                {status === "success"
                  ? "Thank you. We will be in touch."
                  : status === "unconfigured"
                    ? <>Please email <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</>
                    : status === "error"
                      ? "Something went wrong. Please try again."
                      : "All enquiries are treated with discretion."}
              </p>
              <button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Request a consultation"} <span aria-hidden="true">↗</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
