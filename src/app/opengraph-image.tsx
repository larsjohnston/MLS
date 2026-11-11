import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt =
  "Manitoba Lock & Safe — locksmith serving Winnipeg and surrounding communities";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social share image (Open Graph + Twitter). Generated at build time, so it
 * always matches the current phone number and tagline in src/data/site.ts.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #041E42 0%, #02132A 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <svg width="86" height="99" viewBox="0 0 64 74">
            <path
              d="M32 1 L62 12 V35 C62 52 48 63 32 72 C16 63 2 52 2 35 V12 Z"
              fill="#ffffff"
            />
            <path
              d="M32 4 L59 14 V35 C59 50 46 60 32 68.5 C18 60 5 50 5 35 V14 Z"
              fill="#041E42"
            />
            <path
              d="M32 9 L54.5 17.4 V35 C54.5 47.5 43.5 56.6 32 64 Z"
              fill="#AC162C"
            />
            <path
              d="M32 9 L9.5 17.4 V35 C9.5 47.5 20.5 56.6 32 64 Z"
              fill="#2A6BB0"
            />
            <circle cx="32" cy="27" r="6.5" fill="#ffffff" />
            <path d="M29.4 31.5 L34.6 31.5 L33.2 47 L30.8 47 Z" fill="#ffffff" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 24,
                letterSpacing: 6,
                color: "#C8CBCD",
                fontWeight: 600,
              }}
            >
              MANITOBA
            </span>
            <span style={{ fontSize: 48, color: "#ffffff", fontWeight: 800 }}>
              LOCK &amp; SAFE
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 30,
              color: "#AC162C",
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            COMMERCIAL LOCKSMITH · WINNIPEG, MANITOBA
          </span>
          <span
            style={{
              fontSize: 72,
              color: "#ffffff",
              fontWeight: 800,
              lineHeight: 1.1,
              marginTop: 16,
            }}
          >
            {site.tagline}
          </span>
          <span
            style={{
              fontSize: 32,
              color: "#C8CBCD",
              marginTop: 20,
              lineHeight: 1.4,
            }}
          >
            Master key systems · Access control · High-security locks · Safes
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid rgba(255,255,255,0.15)",
            paddingTop: 28,
          }}
        >
          <span style={{ fontSize: 30, color: "#ffffff", fontWeight: 700 }}>
            Mobile service · {site.phone.display}
          </span>
          <span style={{ fontSize: 28, color: "#8E9090" }}>{site.domain}</span>
        </div>
      </div>
    ),
    size,
  );
}
