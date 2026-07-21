import { profile } from "@/lib/profile";
import type { Translations } from "@/lib/i18n/translations";

export function Footer({ copy }: { copy: Translations }) {

  return (
    <footer className="border-t border-border py-8 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>{copy.footer}</p>
      </div>
    </footer>
  );
}
