import { ImageResponse } from "next/og";

export const alt = "ToConnectNow — IA de Ventas para Clínicas Estéticas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#f4f4f5",
          padding: 80,
          fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            maxWidth: 900,
            marginBottom: 32,
          }}
        >
          ToConnectNow
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 400,
            color: "#a1a1aa",
            lineHeight: 1.25,
            maxWidth: 800,
          }}
        >
          IA de ventas para clínicas estéticas. Responde en segundos, agenda más
          consultas.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 64,
            right: 80,
            width: 240,
            height: 16,
            background: "#3b82f6",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
