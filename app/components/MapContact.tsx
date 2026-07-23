"use client";

import { useState } from "react";

const fieldLabelStyle = {
  alignSelf: "stretch" as const,
  color: "var(--Labels-Primary, #000)",
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  textTransform: "uppercase" as const,
};

const infoLabelStyle = {
  alignSelf: "stretch" as const,
  color: "#000",
  fontFamily: 'var(--font-roboto-slab), serif',
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 600,
  margin: 0,
};

const infoValueStyle = {
  color: "#1E1E1F",
  fontFamily: 'var(--font-roboto-slab), serif',
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "150%",
  margin: "8px 0 0 0",
};

export default function MapContact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  return (
    <section style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {/* Map + Contact Us row */}
      <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
        {/* Map */}
        <div
          style={{
            position: "relative",
            height: "759px",
            flex: "1 1 480px",
            overflow: "hidden",
            backgroundColor: "#d9d9d9",
          }}
        >
          <img
            src="/images/map2.png"
            alt="Map showing our Abuja and Port-Harcourt office locations"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>

        {/* Contact Us */}
        <div style={{ flex: "1 1 480px", padding: "80px 114px", display: "flex", flexDirection: "column", gap: "32px" }}>
          <h2
            style={{
              alignSelf: "stretch",
              color: "rgba(224, 175, 0, 0.60)",
              fontFamily: 'var(--font-roboto-slab), serif',
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "138%",
              letterSpacing: "-0.32px",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Contact Us
          </h2>

          <p
            style={{
              alignSelf: "stretch",
              color: "#161616",
              fontFamily: 'var(--font-roboto-slab), serif',
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "141%",
              letterSpacing: "-0.2px",
              margin: 0,
            }}
          >
            From consultation to representation, we provide clear legal guidance and steadfast advocacy at every stage of your matter.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label style={fieldLabelStyle}>Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{ border: "none", outline: "none", width: "312px" }}
                />
                <div style={{ width: "312px", height: 0, borderTop: "1px solid #C6C6C8" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label style={fieldLabelStyle}>Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={{ border: "none", outline: "none", width: "312px" }}
                />
                <div style={{ width: "312px", height: 0, borderTop: "1px solid #C6C6C8" }} />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <label style={fieldLabelStyle}>Message</label>
              <input
                type="text"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ border: "none", outline: "none", width: "100%", maxWidth: "625px" }}
              />
              <div style={{ width: "100%", maxWidth: "625px", height: 0, borderTop: "1px solid #C6C6C8" }} />
            </div>

            <button
              type="submit"
              style={{
                display: "flex",
                width: "100%",
                maxWidth: "639px",
                height: "64px",
                padding: "16px 24px",
                justifyContent: "center",
                alignItems: "center",
                gap: "32px",
                borderRadius: "4px",
                border: "1px solid #9F9F9F",
                background: "#FFF",
                cursor: "pointer",
                fontFamily: 'var(--font-roboto-slab), serif',
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              Send <span aria-hidden="true">&rarr;</span>
            </button>
          </form>
        </div>
      </div>

      {/* Contact info strip - full width, directly under the map/contact row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
          width: "100%",
          padding: "40px 114px 80px 114px",
        }}
      >
        <div>
          <p style={infoLabelStyle}>Phone</p>
          <p style={infoValueStyle}>+234-012-345-6789</p>
        </div>
        <div>
          <p style={infoLabelStyle}>Abuja Address</p>
          {/* NOTE: placeholder address text below - replace with the real Abuja office address */}
          <p style={infoValueStyle}>
            04053, Kyiv, Gogolivska str., 3904053, Kyiv, Gogolivska str., 3904053, Kyiv, Gogolivska str., 3904053,
          </p>
        </div>
        <div>
          <p style={infoLabelStyle}>Port-Harcourt Address</p>
          {/* NOTE: placeholder address text below - replace with the real Port-Harcourt office address */}
          <p style={infoValueStyle}>
            04053, Kyiv, Gogolivska str., 3904053, Kyiv, Gogolivska str., 3904053, Kyiv, Gogolivska str., 3904053,
          </p>
        </div>
      </div>
    </section>
  );
}
