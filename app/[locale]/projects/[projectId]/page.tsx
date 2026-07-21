import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { notFound } from "next/navigation";
import { getProject, isLocale, localize, locales, profile, projects, siteUrl } from "@/lib/profile";
import { translations } from "@/lib/i18n/translations";
import { ProjectCover } from "@/components/project-cover";
import { TechList } from "@/components/tech-list";

type CaseStudyPageProps = {
  params: Promise<{ locale: string; projectId: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.filter((project) => project.caseStudy).map((project) => ({ locale, projectId: project.id })),
  );
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { locale, projectId } = await params;
  const project = getProject(projectId);
  if (!isLocale(locale) || !project?.caseStudy) return {};
  const description = localize(project.description, locale);
  return {
    title: project.title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}/projects/${project.id}`,
      languages: {
        "es-AR": `${siteUrl}/es/projects/${project.id}`,
        en: `${siteUrl}/en/projects/${project.id}`,
      },
    },
    openGraph: {
      type: "article",
      title: `${project.title} | ${profile.name}`,
      description,
      images: [{ url: project.image, alt: localize(project.imageAlt, locale) }],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { locale: requestedLocale, projectId } = await params;
  const project = getProject(projectId);
  if (!isLocale(requestedLocale) || !project?.caseStudy) notFound();
  const copy = translations[requestedLocale];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: localize(project.description, requestedLocale),
    url: `${siteUrl}/${requestedLocale}/projects/${project.id}`,
    image: `${siteUrl}${project.image}`,
    creator: { "@type": "Person", name: profile.name, url: siteUrl },
    inLanguage: requestedLocale,
  };

  return (
    <main id="content" className="mx-auto min-h-screen max-w-5xl px-5 pb-24 pt-28 sm:px-8 sm:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li><a href={`/${requestedLocale}`} className="text-link">{copy.nav.home}</a></li>
          <li aria-hidden="true">/</li>
          <li><a href={`/${requestedLocale}#projects`} className="text-link">{copy.sections.projects}</a></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">{project.title}</li>
        </ol>
      </nav>

      <a href={`/${requestedLocale}#projects`} className="button-secondary mb-8">
        <ArrowLeft className="size-4" aria-hidden="true" />
        {copy.caseStudy.back}
      </a>

      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{project.category}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">{project.title}</h1>
        <p className="mt-5 text-xl leading-8 text-muted-foreground">{localize(project.description, requestedLocale)}</p>
      </header>

      <div className="group relative my-10 aspect-video overflow-hidden rounded-2xl border border-border bg-secondary">
        <ProjectCover
          project={project}
          locale={requestedLocale}
          priority
          sizes="(min-width: 1024px) 960px, 100vw"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="case-study-section">
          <h2>{copy.caseStudy.summary}</h2>
          <p>{localize(project.description, requestedLocale)}</p>
        </section>
        <section className="case-study-section">
          <h2>{copy.caseStudy.participation}</h2>
          <p>
            {localize(project.participation ?? project.role, requestedLocale)}
          </p>
        </section>
        {project.implementation && (
          <section className="case-study-section">
            <h2>{copy.caseStudy.implementation}</h2>
            <p>{localize(project.implementation, requestedLocale)}</p>
          </section>
        )}
        {project.features && (
          <section className="case-study-section md:col-span-2">
            <h2>{copy.caseStudy.features}</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {project.features[requestedLocale].map((feature) => (
                <li key={feature} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
        {project.ai && (
          <section className="case-study-section">
            <h2>{copy.caseStudy.ai}</h2>
            <p>{localize(project.ai, requestedLocale)}</p>
          </section>
        )}
        {project.result && (
          <section className="case-study-section">
            <h2>{copy.caseStudy.result}</h2>
            <p>{localize(project.result, requestedLocale)}</p>
          </section>
        )}
        <section className="case-study-section md:col-span-2">
          <h2>{copy.caseStudy.stack}</h2>
          <TechList items={project.technologies} label={copy.projects.technologies} emphasized />
        </section>
      </div>

      {(project.demoUrl || project.repositories?.length) && (
        <section className="mt-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-foreground">{copy.caseStudy.evidence}</h2>
          {project.demoData && <p className="mt-2 text-sm text-muted-foreground">{copy.projects.demoData}</p>}
          <div className="mt-5 flex flex-wrap gap-3">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="button-primary">
                <ExternalLink className="size-4" aria-hidden="true" />
                {copy.projects.demo}
                <span className="sr-only"> ({copy.controls.external})</span>
              </a>
            )}
            {project.repositories?.map((repository) => (
              <a
                key={repository.url}
                href={repository.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                <Github className="size-4" aria-hidden="true" />
                {copy.projects.repository}: {repository.label}
                <span className="sr-only"> ({copy.controls.external})</span>
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
