import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Martin Gadea — Full Stack & Applied AI",
    short_name: "Martin Gadea",
    description: "Portfolio profesional de Martin Gadea.",
    start_url: "/es",
    display: "standalone",
    background_color: "#0b1619",
    theme_color: "#2dd4bf",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
