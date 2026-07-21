"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile, type Locale } from "@/lib/profile";
import type { Translations } from "@/lib/i18n/translations";
import { ThemeToggle } from "./theme-toggle";

type SiteHeaderProps = {
  locale: Locale;
  copy: Translations;
};

export function SiteHeader({ locale, copy }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const otherLocale = locale === "es" ? "en" : "es";
  const navigation = [
    ["home", copy.nav.home],
    ["about", copy.nav.about],
    ["experience", copy.nav.experience],
    ["projects", copy.nav.projects],
    ["skills", copy.nav.skills],
    ["contact", copy.nav.contact],
  ] as const;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.1, 0.5] },
    );
    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/92 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="rounded-md text-base font-bold tracking-tight text-foreground">
          MG<span className="text-primary">.</span>
        </a>

        <nav className="hidden lg:block" aria-label={copy.nav.label}>
          <ul className="flex items-center gap-1">
            {navigation.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={activeSection === id ? "location" : undefined}
                  className="nav-link"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a href={`/${otherLocale}`} hrefLang={otherLocale} className="control-link" aria-label={copy.controls.language}>
            {otherLocale.toUpperCase()}
          </a>
          <ThemeToggle lightLabel={copy.controls.themeLight} darkLabel={copy.controls.themeDark} />
          <a href={profile.cvPath} download={profile.cvDownloadName} className="ml-1 hidden button-compact sm:inline-flex">
            <Download className="size-4" aria-hidden="true" />
            CV
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="icon-link ml-1 lg:hidden"
            aria-label={open ? copy.nav.close : copy.nav.open}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label={copy.nav.label}>
          <ul className="mx-auto grid max-w-6xl gap-1">
            {navigation.map(([id, label], index) => (
              <li key={id}>
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={`#${id}`}
                  onClick={closeMenu}
                  aria-current={activeSection === id ? "location" : undefined}
                  className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-foreground hover:bg-secondary"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <a href={profile.cvPath} download={profile.cvDownloadName} onClick={closeMenu} className="button-primary w-full">
                <Download className="size-4" aria-hidden="true" />
                {copy.hero.cvCta}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
