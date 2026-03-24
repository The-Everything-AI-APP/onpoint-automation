import { ImageResponse } from "next/og";
import { services } from "@/data/services";

export const alt = "Onpoint Automation Service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const title = service?.title ?? "Our Services";

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
              fontSize: 56,
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: 24,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#ffffff",
              opacity: 0.7,
            }}
          >
            {"Control4 Smart Home Specialists - Newcastle & Hunter Valley"}
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
