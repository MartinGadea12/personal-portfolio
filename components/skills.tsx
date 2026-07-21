import { localize, skillCategories, type Locale } from "@/lib/profile";
import type { Translations } from "@/lib/i18n/translations";
import { SectionHeading } from "./section-heading";
import { TechList } from "./tech-list";

type SkillsProps = {
  locale: Locale;
  copy: Translations;
};

export function Skills({ locale, copy }: SkillsProps) {

  return (
    <section id="skills" className="section-shell" aria-labelledby="skills-title">
      <div id="skills-title">
        <SectionHeading eyebrow={copy.sections.skills} title={copy.sections.skillsIntro} />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((category) => (
          <article
            key={category.id}
            className={
              category.primary
                ? "rounded-2xl border border-primary/30 bg-primary/5 p-6 md:col-span-2"
                : "rounded-2xl border border-border bg-card p-6"
            }
          >
            <h3 className="text-lg font-semibold text-foreground">
              {localize(category.title, locale)}
            </h3>
            <p className="mb-4 mt-1 text-sm text-muted-foreground">
              {localize(category.description, locale)}
            </p>
            <TechList
              items={category.skills}
              label={localize(category.title, locale)}
              emphasized={category.primary}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
