import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { isLocale, locales, profile, siteUrl } from "@/lib/profile";
import { translations } from "@/lib/i18n/translations";
import "../globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<LocaleLayoutProps, "children">): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  if (!isLocale(requestedLocale)) return {};
  const copy = translations[requestedLocale];
  const canonical = `${siteUrl}/${requestedLocale}`;

  return {
    metadataBase: new URL(siteUrl),
    title: { default: copy.seo.title, template: `%s | ${profile.name}` },
    description: copy.seo.description,
    authors: [{ name: profile.name, url: siteUrl }],
    creator: profile.name,
    alternates: {
      canonical,
      languages: { "es-AR": `${siteUrl}/es`, en: `${siteUrl}/en`, "x-default": `${siteUrl}/es` },
    },
    openGraph: {
      type: "profile",
      url: canonical,
      title: copy.seo.title,
      description: copy.seo.description,
      siteName: `${profile.name} Portfolio`,
      locale: requestedLocale === "es" ? "es_AR" : "en_US",
      alternateLocale: requestedLocale === "es" ? ["en_US"] : ["es_AR"],
      images: [{ url: `${siteUrl}/social-image`, width: 1200, height: 630, alt: copy.hero.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.seo.title,
      description: copy.seo.description,
      images: [`${siteUrl}/social-image`],
    },
    robots: { index: true, follow: true },
    icons: { icon: "/icon", apple: "/apple-icon" },
    manifest: "/manifest.webmanifest",
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: requestedLocale } = await params;
  if (!isLocale(requestedLocale)) notFound();
  const copy = translations[requestedLocale];

  return (
    <html
      lang={requestedLocale}
      className={`${geistSans.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="bg-background font-sans text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <a href="#content" className="skip-link">{copy.nav.skip}</a>
          <SiteHeader locale={requestedLocale} copy={copy} />
          {children}
          <Footer copy={copy} />
        </ThemeProvider>
      </body>
    </html>
  );
}
