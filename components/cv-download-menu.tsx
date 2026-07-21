"use client";

import { ChevronDown, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Translations } from "@/lib/i18n/translations";
import { profile, type Locale } from "@/lib/profile";

type CvDownloadMenuProps = {
  copy: Translations;
  label?: string;
  variant?: "primary" | "secondary" | "compact";
  align?: "left" | "right";
  className?: string;
  onDownload?: () => void;
};

const languages: readonly Locale[] = ["es", "en"];

export function CvDownloadMenu({
  copy,
  label = "CV",
  variant = "secondary",
  align = "left",
  className = "",
  onDownload,
}: CvDownloadMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstOptionRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    firstOptionRef.current?.focus();

    const closeMenu = (event: KeyboardEvent | MouseEvent) => {
      if (event instanceof KeyboardEvent && event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }

      if (
        event instanceof MouseEvent &&
        !containerRef.current?.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", closeMenu);
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("keydown", closeMenu);
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [open]);

  const buttonClass = variant === "primary"
    ? "button-primary"
    : variant === "compact"
      ? "button-compact"
      : "button-secondary";

  return (
    <div ref={containerRef} className={`relative inline-flex ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        className={`${buttonClass} w-full`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <Download className="size-4" aria-hidden="true" />
        {label}
        <ChevronDown
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={copy.controls.cvLanguage}
          className={`absolute top-full z-50 mt-2 min-w-48 rounded-xl border border-border bg-card p-1.5 shadow-lg ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {languages.map((language, index) => {
            const cv = profile.cv[language];
            const languageLabel = language === "es"
              ? copy.controls.cvSpanish
              : copy.controls.cvEnglish;

            return (
              <a
                key={language}
                ref={index === 0 ? firstOptionRef : undefined}
                href={cv.path}
                download={cv.downloadName}
                role="menuitem"
                className="flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium text-foreground hover:bg-secondary"
                onClick={() => {
                  setOpen(false);
                  onDownload?.();
                }}
              >
                <Download className="size-4 text-primary" aria-hidden="true" />
                {languageLabel}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
