import { notFound } from "next/navigation";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { isLocale, profile, siteUrl } from "@/lib/profile";
import { translations } from "@/lib/i18n/translations";

type PortfolioPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { locale: requestedLocale } = await params;
  if (!isLocale(requestedLocale)) notFound();
  const copy = translations[requestedLocale];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: profile.name,
        url: siteUrl,
        email: `mailto:${profile.email}`,
        jobTitle: requestedLocale === "es"
          ? "Full Stack Developer especializado en IA aplicada"
          : "Full Stack & Applied AI Engineer",
        address: { "@type": "PostalAddress", addressCountry: "AR" },
        sameAs: [profile.githubUrl, profile.linkedinUrl],
        knowsAbout: ["React", "TypeScript", "Node.js", "RAG", "n8n", "React Native"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${profile.name} Portfolio`,
        inLanguage: ["es", "en"],
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/${requestedLocale}/#profile`,
        url: `${siteUrl}/${requestedLocale}`,
        name: copy.seo.title,
        description: copy.seo.description,
        inLanguage: requestedLocale,
        mainEntity: { "@id": `${siteUrl}/#person` },
        isPartOf: { "@id": `${siteUrl}/#website` },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Hero locale={requestedLocale} copy={copy} />
      <main id="content" className="mx-auto max-w-6xl px-5 sm:px-8">
        <About copy={copy} />
        <Experience locale={requestedLocale} copy={copy} />
        <Projects locale={requestedLocale} copy={copy} />
        <Skills locale={requestedLocale} copy={copy} />
        <Contact locale={requestedLocale} copy={copy} />
      </main>
    </>
  );
}
