import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "garros.ai — L'IA donne la compétence. garros.ai donne la méthode.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#F5F0E8",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "serif",
        }}
      >
        {/* Logo mark */}
        <svg
          width="72"
          height="72"
          viewBox="0 0 48 48"
          style={{ marginBottom: 40 }}
        >
          <path
            fill="#D4763B"
            d="M24 1.5c8.4 0 12.9 1.1 16.6 4.4 3.6 3.3 5.4 8.1 5.4 17.1s-1.5 14.5-5.1 17.9C37.3 44.3 32.6 46 24 46s-13.3-1.7-16.9-5.1C3.5 37.5 2 32.4 2 23S3.8 9.2 7.4 5.9C11.1 2.6 15.6 1.5 24 1.5Z"
          />
          <path
            fill="none"
            stroke="#FAF7F2"
            strokeWidth="5"
            strokeLinecap="round"
            d="M18.5 33 L29.5 15"
          />
        </svg>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            fontSize: 52,
            fontWeight: 700,
            marginBottom: 24,
            letterSpacing: "-1px",
          }}
        >
          <span style={{ color: "#2D1B0E" }}>garros</span>
          <span style={{ color: "#D4763B" }}>.ai</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            fontSize: 28,
            lineHeight: 1.4,
            maxWidth: 700,
          }}
        >
          <span style={{ color: "#5C3D22" }}>L&apos;IA donne la compétence.&nbsp;</span>
          <span style={{ color: "#D4763B", fontWeight: 600 }}>
            garros.ai donne la méthode.
          </span>
        </div>

        {/* Decorative line */}
        <div
          style={{
            position: "absolute",
            right: 100,
            bottom: 80,
            fontSize: 20,
            color: "#B8A898",
            letterSpacing: "2px",
          }}
        >
          Conseil en transformation IA
        </div>
      </div>
    ),
    { ...size }
  );
}
