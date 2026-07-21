import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "76px",
          background: "#0b1619",
          color: "#f1f5f4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ color: "#5eead4", fontSize: 28, letterSpacing: 4, textTransform: "uppercase" }}>
          Portfolio profesional
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 28 }}>Martin Gadea</div>
        <div style={{ color: "#5eead4", fontSize: 46, fontWeight: 600, marginTop: 18 }}>
          Full Stack & Applied AI Engineer
        </div>
        <div style={{ color: "#b9c8c6", fontSize: 28, marginTop: 36 }}>
          React · TypeScript · Node.js · RAG · n8n
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
