// app/root.tsx
import type { LinksFunction  } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import stylesheet from '~/tailwind.css?url'
import { LanguageProvider } from "~/contexts/LanguageContext";

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
]

export default function App() {
  return (
    <html lang="en" id="html-root">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <LanguageProvider>
          <Outlet />
        </LanguageProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
