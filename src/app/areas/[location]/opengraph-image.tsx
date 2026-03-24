import { ImageResponse } from "next/og";
import { locations } from "@/data/locations";

export const alt = "Onpoint Automation Service Area";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locations.map((l) => ({ location: l.slug }));
}

export default async function Image({ params }: { params: Promise<{ location: string }> }) {
  const { location: slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  const name = location?.name ?? "Our Service Area";

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
              fontSize: 28,
              color: "#1aceff",
              marginBottom: 16,
              textTransform: "uppercase",
              letterSpacing: 4,
            }}
          >
            Onpoint Automation
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: 24,
            }}
          >
            {`Smart Home Automation in ${name}`}
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#ffffff",
              opacity: 0.7,
            }}
          >
            {"Control4 Installation, Service & Support"}
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
