import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Onpoint Automation - Control4 Smart Home Specialists";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#252525",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: 16,
            }}
          >
            Onpoint Automation
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#1aceff",
              marginBottom: 32,
            }}
          >
            Control4 Smart Home Specialists
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 24,
              color: "#ffffff",
              opacity: 0.8,
            }}
          >
            <span>Newcastle</span>
            <span style={{ color: "#1aceff" }}>|</span>
            <span>Hunter Valley</span>
            <span style={{ color: "#1aceff" }}>|</span>
            <span>Port Stephens</span>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            backgroundColor: "#1aceff",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
