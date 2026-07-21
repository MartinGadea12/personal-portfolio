import { experiences, localize, type Locale } from "@/lib/profile";
import type { Translations } from "@/lib/i18n/translations";
import { SectionHeading } from "./section-heading";
import { TechList } from "./tech-list";

type ExperienceProps = {
  locale: Locale;
  copy: Translations;
};

export function Experience({ locale, copy }: ExperienceProps) {

  return (
    <section
      id="experience"
      className="section-shell"
      aria-labelledby="experience-title"
    >
      <div id="experience-title">
        <SectionHeading
          eyebrow={copy.sections.experience}
          title={copy.sections.experienceIntro}
        />
      </div>
      <ol className="space-y-6">
        {experiences.map((experience) => (
          <li key={experience.id} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {experience.role} · {experience.company}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {localize(experience.productType, locale)}
                  {experience.workMode ? ` · ${localize(experience.workMode, locale)}` : ""}
                </p>
              </div>
              <p className="shrink-0 text-sm font-medium text-primary">
                {localize(experience.period, locale)}
              </p>
            </div>

            <h4 className="sr-only">{copy.experience.contributionLabel}</h4>
            <ul className="mb-6 space-y-2 text-sm leading-6 text-muted-foreground">
              {experience.contributions[locale].map((contribution) => (
                <li key={contribution} className="flex gap-3">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {contribution}
                </li>
              ))}
            </ul>
            <TechList items={experience.technologies} label={copy.experience.stackLabel} />
          </li>
        ))}
      </ol>
    </section>
  );
}
