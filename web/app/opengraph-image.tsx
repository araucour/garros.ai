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
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "serif",
        }}
      >
        {/* Bloc centré : logo + tagline aligné à gauche du logo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {/* Logo + Wordmark côte à côte */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 24,
              marginBottom: 40,
            }}
          >
            <svg width="96" height="96" viewBox="0 0 48 48">
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

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
                fontSize: 72,
                fontWeight: 700,
                letterSpacing: "-2px",
              }}
            >
              <span style={{ color: "#2D1B0E" }}>garros</span>
              <span style={{ color: "#D4763B" }}>.ai</span>
            </div>
          </div>

          {/* Tagline — aligné à gauche du logo */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              fontSize: 36,
              lineHeight: 1.5,
            }}
          >
            <span style={{ color: "#5C3D22" }}>L&apos;IA donne la compétence.</span>
            <span style={{ color: "#D4763B", fontWeight: 600 }}>
              garros.ai donne la méthode.
            </span>
          </div>
        </div>

        {/* Decorative */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            fontSize: 28,
            color: "#B8A898",
            letterSpacing: "3px",
            display: "flex",
          }}
        >
          Conseil en transformation IA
        </div>
      </div>
    ),
    { ...size }
  );
}
