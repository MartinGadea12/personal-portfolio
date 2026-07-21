"use client";

import { Download, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { localize, profile, type Locale } from "@/lib/profile";
import { emailjsConfig, toTemplateParams } from "@/lib/emailjs";
import type { Translations } from "@/lib/i18n/translations";
import { SectionHeading } from "./section-heading";

type ContactProps = {
  locale: Locale;
  copy: Translations;
};

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact({ locale, copy }: ContactProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<"success" | "error" | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const feedbackRef = useRef<HTMLParagraphElement>(null);

  const validate = () => {
    const nextErrors: FieldErrors = {};
    const name = formState.name.trim();
    const email = formState.email.trim();
    const message = formState.message.trim();

    if (name.length < 2 || name.length > 100) nextErrors.name = copy.contact.invalidName;
    if (!emailPattern.test(email) || email.length > 254) nextErrors.email = copy.contact.invalidEmail;
    if (message.length < 10 || message.length > 2000) nextErrors.message = copy.contact.invalidMessage;

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || formState.website || !validate()) return;

    setIsSubmitting(true);
    setFeedback(null);

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        toTemplateParams(formState),
        { publicKey: emailjsConfig.publicKey }
      );

      setFeedback("success");
      setFormState({ name: "", email: "", message: "", website: "" });
      setErrors({});
    } catch {
      setFeedback("error");
    } finally {
      setIsSubmitting(false);
      requestAnimationFrame(() => feedbackRef.current?.focus());
    }
  };

  return (
    <section
      id="contact"
      className="section-shell"
      aria-labelledby="contact-title"
    >
      <div id="contact-title">
        <SectionHeading eyebrow={copy.sections.contact} title={copy.contact.heading} />
      </div>
      <p className="mb-8 max-w-3xl text-lg leading-8 text-muted-foreground">{copy.contact.intro}</p>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-foreground">{copy.contact.direct}</h3>
          <div className="mt-5 grid gap-3">
          <a
            href={`mailto:${profile.email}`}
              className="contact-link"
          >
              <Mail className="size-5 text-primary" aria-hidden="true" />
            <span>{profile.email}</span>
          </a>
            <div className="flex min-h-11 items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="size-5 text-primary" aria-hidden="true" />
              <span>{localize(profile.location, locale)}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="block font-semibold text-foreground">{copy.contact.availability}</span>
              {localize(profile.availability, locale)}
            </p>
          </div>
          <div className="mt-6 flex gap-2">
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label={`LinkedIn (${copy.controls.external})`}>
              <Linkedin className="size-5" aria-hidden="true" />
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label={`GitHub (${copy.controls.external})`}>
              <Github className="size-5" aria-hidden="true" />
            </a>
            <a href={profile.cvPath} download={profile.cvDownloadName} className="button-secondary">
              <Download className="size-4" aria-hidden="true" />
              CV
            </a>
          </div>
        </aside>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8" noValidate aria-busy={isSubmitting}>
          <h3 className="mb-6 text-lg font-semibold text-foreground">{copy.contact.formHeading}</h3>
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formState.website}
              onChange={(e) => setFormState({ ...formState, website: e.target.value })}
            />
          </div>
          <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                  {copy.contact.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                  className="form-control"
                  placeholder={copy.contact.namePlaceholder}
              />
                {errors.name && <p id="name-error" className="form-error">{errors.name}</p>}
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                  {copy.contact.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                  maxLength={254}
                  autoComplete="email"
                  inputMode="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                  className="form-control"
                  placeholder={copy.contact.emailPlaceholder}
              />
                {errors.email && <p id="email-error" className="form-error">{errors.email}</p>}
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-foreground"
            >
                {copy.contact.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              minLength={10}
              maxLength={2000}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
                className="form-control min-h-32 resize-y"
                placeholder={copy.contact.messagePlaceholder}
            />
              {errors.message && <p id="message-error" className="form-error">{errors.message}</p>}
          </div>

          {feedback === "success" && (
              <p ref={feedbackRef} tabIndex={-1} role="status" className="rounded-lg bg-primary/10 p-3 text-sm text-primary">
                {copy.contact.success}
            </p>
          )}
          {feedback === "error" && (
              <p ref={feedbackRef} tabIndex={-1} role="alert" className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
                {copy.contact.error}{" "}
                <a href={`mailto:${profile.email}`} className="font-semibold underline">{profile.email}</a>
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
              className="button-primary"
          >
            {isSubmitting ? (
              <>
                  <span className="size-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent motion-reduce:animate-none" aria-hidden="true" />
                  {copy.contact.sending}
              </>
            ) : (
              <>
                  <Send className="size-4" aria-hidden="true" />
                  {copy.contact.submit}
              </>
            )}
          </button>
            <p className="text-xs leading-5 text-muted-foreground">{copy.contact.privacy}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
