import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { localize, projects, type Locale } from "@/lib/profile";
import type { Translations } from "@/lib/i18n/translations";
import { ProjectCover } from "./project-cover";
import { SectionHeading } from "./section-heading";
import { TechList } from "./tech-list";

type ProjectsProps = {
  locale: Locale;
  copy: Translations;
};

export function Projects({ locale, copy }: ProjectsProps) {

  return (
    <section
      id="projects"
      className="section-shell"
      aria-labelledby="projects-title"
    >
      <div id="projects-title">
        <SectionHeading eyebrow={copy.sections.projects} title={copy.sections.projectsIntro} />
      </div>
      <ul className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className={project.caseStudy || project.featured ? "lg:col-span-2" : undefined}
          >
            <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-secondary">
                <ProjectCover
                  project={project}
                  locale={locale}
                  sizes={project.caseStudy || project.featured ? "(min-width: 1024px) 1024px, 100vw" : "(min-width: 1024px) 512px, 100vw"}
                />
              </div>
              <div className="p-6 sm:p-7">
                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">{project.category}</span>
                  {project.demoData && (
                    <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                      {copy.projects.demoData}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {copy.projects.role}: {localize(project.role, locale)}
                </p>
                <p className="my-4 leading-7 text-muted-foreground">
                  {localize(project.description, locale)}
                </p>
                {project.highlights && (
                  <ul className="mb-4 grid gap-2 text-sm text-foreground sm:grid-cols-2">
                    {project.highlights[locale].map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="text-primary" aria-hidden="true">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <TechList items={project.technologies} label={copy.projects.technologies} />
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.caseStudy && (
                    <a
                      href={`/${locale}/projects/${project.id}`}
                      className="button-secondary"
                    >
                      {copy.projects.caseStudy}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="button-secondary">
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
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
