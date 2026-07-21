# Portfolio — Martin Gadea

Portfolio profesional bilingüe de Martin Gadea, Full Stack Developer especializado en IA aplicada.

## Stack

- Next.js 16 (App Router), React 19 y TypeScript estricto.
- Tailwind CSS 4.
- `next-themes` para tema claro/oscuro.
- EmailJS para el formulario de contacto.

## Funcionalidades

- Rutas indexables en español (`/es`) e inglés (`/en`).
- Metadata localizada, canonical, `hreflang`, Open Graph, Twitter Card y JSON-LD.
- Sitemap, robots, manifest e imagen social.
- Navegación responsive accesible y casos de estudio.
- Descarga del CV en español o inglés y formulario con validación, honeypot y fallback por email.

## Requisitos

- Node.js 20 o superior. Node.js 22 es la versión recomendada en `.nvmrc`.
- npm 10.

## Desarrollo

```bash
npm ci
npm run dev
```

Abrir `http://localhost:3000`; la raíz redirige a `/es`.

## Validación

```bash
npm run lint
npm run typecheck
npm run build
```

No existe una suite de tests automatizados en este repositorio.

## Contenido

- `lib/profile.ts`: perfil, experiencia, proyectos, habilidades y educación.
- `lib/i18n/translations.ts`: contenido de interfaz en español e inglés.
- `public/projects/`: capturas de proyectos.
- `public/Martin_Gadea_CV_Español.pdf`: CV publicado en español.
- `public/Martin_Gadea_CV_English.pdf`: CV publicado en inglés.

Los proyectos deben incluir únicamente información verificable. Los campos sin evidencia se omiten de la interfaz.

## EmailJS

Los identificadores públicos pueden configurarse mediante:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

En el panel de EmailJS se deben restringir los orígenes permitidos a localhost y `https://martingadea.org`.

## Despliegue

El proyecto está preparado para Vercel con instalación reproducible mediante `npm ci`. Después del despliegue:

1. Asociar `martingadea.org` al proyecto correcto.
2. Validar `/es`, `/en`, `/robots.txt`, `/sitemap.xml` y ambos CV.
3. Registrar el dominio en los orígenes permitidos de EmailJS.
