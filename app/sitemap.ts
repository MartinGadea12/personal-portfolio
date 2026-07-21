import type { MetadataRoute } from "next";
import { locales, projects, siteUrl } from "@/lib/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const homePages = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: { es: `${siteUrl}/es`, en: `${siteUrl}/en` },
    },
  }));

  const caseStudies = locales.flatMap((locale) =>
    projects.filter((project) => project.caseStudy).map((project) => ({
      url: `${siteUrl}/${locale}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/es/projects/${project.id}`,
          en: `${siteUrl}/en/projects/${project.id}`,
        },
      },
    })),
  );

  return [...homePages, ...caseStudies];
}
