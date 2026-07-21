import { education } from "@/lib/profile";
import type { Translations } from "@/lib/i18n/translations";
import { SectionHeading } from "./section-heading";

type AboutProps = {
  copy: Translations;
};

export function About({ copy }: AboutProps) {

  return (
    <section
      id="about"
      className="section-shell"
      aria-labelledby="about-title"
    >
      <div id="about-title">
        <SectionHeading
          eyebrow={copy.sections.about}
          title={copy.sections.aboutIntro}
        />
      </div>
      <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-5 text-base leading-8 text-muted-foreground">
          {copy.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>

        <aside className="space-y-8 rounded-2xl border border-border bg-card p-6">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              {copy.sections.about}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {copy.about.capabilities.map((capability) => (
                <li key={capability} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {capability}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              {copy.about.education}
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {education.map((item) => (
                <li key={item.id}>
                  <span className="block font-medium text-foreground">{item.program}</span>
                  <span>
                    {item.institution} · {item.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-muted-foreground">
            <span className="block font-semibold text-foreground">{copy.about.languages}</span>
            {copy.about.languageValue}
          </p>
        </aside>
      </div>
    </section>
  );
}
