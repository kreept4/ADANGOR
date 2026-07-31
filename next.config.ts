import path from "path";
import type { NextConfig } from "next";

// Everything the site loads is served from its own origin: next/font downloads
// the faces at build time rather than calling Google at runtime, and the images
// are local files. The one outbound call is the contact form, so formspree.io is
// named explicitly and nothing else is allowed to be contacted.
//
// 'unsafe-inline' is unavoidable on both scripts and styles here. styled-jsx,
// which every section of this site uses, injects its rules as inline <style>
// tags, and Next's own bootstrap is an inline <script>. The alternative is a
// per-request nonce, which needs a dynamic render — every route on this site is
// static, so that would trade a real improvement in delivery for a partial one
// in policy. The directive still confines both to this origin.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self' https://formspree.io",
  "form-action 'self' https://formspree.io",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
];

const nextConfig: NextConfig = {
  // Pin Turbopack to this project directory so a stray ~/package-lock.json
  // cannot become the inferred workspace root (that caused wrong resolution
  // and painful first compiles).
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    if (process.env.NODE_ENV !== "production") return [];
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
