import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { localize, profile, type Locale } from "@/lib/profile";
import type { Translations } from "@/lib/i18n/translations";

type HeroProps = {
  locale: Locale;
  copy: Translations;
};

export function Hero({ locale, copy }: HeroProps) {

  return (
    <section id="home" className="relative overflow-hidden border-b border-border pb-20 pt-28 sm:pb-24 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_15%,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_38%)]" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {copy.hero.eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          {profile.name}
          <span className="mt-3 block text-primary">{copy.hero.title}</span>
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
          {copy.hero.description}
        </p>

        <ul className="mt-7 flex flex-wrap gap-2" aria-label={copy.hero.title}>
          {copy.hero.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#projects" className="button-primary">{copy.hero.projectsCta}</a>
          <a href="#contact" className="button-secondary">{copy.hero.contactCta}</a>
          <a href={profile.cvPath} download={profile.cvDownloadName} className="button-secondary">
            <Download className="size-4" aria-hidden="true" />
            {copy.hero.cvCta}
          </a>
        </div>

        <div className="mt-9 flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-7">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            {localize(profile.location, locale)}
          </span>
          <ul className="flex items-center gap-2" aria-label={copy.hero.socialLabel}>
            <li>
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label={`GitHub (${copy.controls.external})`}>
                <Github className="size-5" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label={`LinkedIn (${copy.controls.external})`}>
                <Linkedin className="size-5" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="icon-link" aria-label="Email">
                <Mail className="size-5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
