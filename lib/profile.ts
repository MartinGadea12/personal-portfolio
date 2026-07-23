export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export type LocalizedText = Record<Locale, string>;

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: LocalizedText;
  workMode?: LocalizedText;
  productType: LocalizedText;
  contributions: Record<Locale, readonly string[]>;
  technologies: readonly string[];
};

export type ProjectCategory =
  | "Full Stack"
  | "Applied AI"
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Automation";

export type Project = {
  id: string;
  title: string;
  description: LocalizedText;
  role: LocalizedText;
  category: ProjectCategory;
  technologies: readonly string[];
  image: string;
  imageAlt: LocalizedText;
  imageFit?: "cover" | "contain";
  demoUrl?: string;
  repositories?: readonly { label: string; url: string }[];
  highlights?: Record<Locale, readonly string[]>;
  features?: Record<Locale, readonly string[]>;
  featured?: boolean;
  caseStudy: boolean;
  demoData?: boolean;
  participation?: LocalizedText;
  implementation?: LocalizedText;
  ai?: LocalizedText;
  result?: LocalizedText;
};

export type SkillCategory = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  skills: readonly string[];
  primary?: boolean;
};

export type Education = {
  id: string;
  program: string;
  institution: string;
  period: string;
};

export const siteUrl = "https://martingadea.org";

export const profile = {
  name: "Martin Gadea",
  email: "martiingadeea1996@gmail.com",
  location: { es: "Argentina · Remoto", en: "Argentina · Remote" },
  availability: {
    es: "Disponible para trabajo remoto",
    en: "Available for remote work",
  },
  githubUrl: "https://github.com/MartinGadea12",
  linkedinUrl: "https://www.linkedin.com/in/martingadea12",
  cv: {
    es: {
      path: "/CV-GADEA-ESPA%C3%91OL.pdf",
      downloadName: "CV-GADEA-ESPANOL.pdf",
    },
    en: {
      path: "/CV-GADEA-ENGLISH.pdf",
      downloadName: "CV-GADEA-ENGLISH.pdf",
    },
  },
} as const;

export const experiences: readonly Experience[] = [
  {
    id: "arkia",
    company: "Arkia / Activo Digital",
    role: "Tech Lead",
    period: { es: "Ago 2025 — Mar 2026", en: "Aug 2025 — Mar 2026" },
    workMode: { es: "Remoto", en: "Remote" },
    productType: {
      es: "Plataforma PropTech para activos inmobiliarios",
      en: "PropTech platform for real-estate assets",
    },
    contributions: {
      es: [
        "Liderazgo técnico del desarrollo de una plataforma PropTech para administrar activos inmobiliarios de gran escala, con foco en regulaciones ambientales europeas.",
        "Diseño e integración de agentes de IA y flujos RAG para apoyar la estimación del comportamiento del mercado inmobiliario y el análisis de carteras de activos.",
        "Gestión y procesamiento de documentación, certificados y estándares medioambientales de edificios, incluyendo impacto ambiental y huella de carbono.",
        "Desarrollo de herramientas de apoyo a la toma de decisiones financieras y automatización de workflows para la administración de activos.",
      ],
      en: [
        "Led the technical development of a PropTech platform for managing large-scale real estate assets, with a focus on European environmental regulations.",
        "Designed and integrated AI agents and RAG workflows to support real estate market behavior forecasting and asset portfolio analysis.",
        "Managed and processed building documentation, certificates, and environmental standards, including environmental impact and carbon footprint data.",
        "Developed decision-support tools for financial analysis and automated workflows for real estate asset management.",
      ],
    },
    technologies: ["n8n", "RAG", "Python", "Node.js", "React", "TypeScript", "Supabase", "OpenAI"],
  },
  {
    id: "daioff",
    company: "DaiOff",
    role: "Full Stack Developer",
    period: { es: "Jun 2023 — Feb 2026", en: "Jun 2023 — Feb 2026" },
    workMode: { es: "Remoto", en: "Remote" },
    productType: {
      es: "Productos LegalTech y SportsTech",
      en: "LegalTech and SportsTech products",
    },
    contributions: {
      es: [
        "Desarrollo mobile de WeMatch con React Native y Expo: reservas, e-commerce, comunidad, chat, torneos, ligas, formación, wallet, pagos y matchmaking.",
        "Contribución al ecosistema web de WeMatch: gestor de clubes, panel administrativo, backend, autenticación por roles, inventario, catálogo, promociones, analítica de ventas y automatización de entregas.",
        "Desarrollo de flujos y APIs para una plataforma LegalTech de gestión de casos, auditorías, documentos, tareas y asistentes jurídicos con Remix, Prisma y PostgreSQL.",
        "Implementación y evolución de un servicio RAG jurídico con Python, FastAPI, LangGraph, embeddings de OpenAI y Qdrant.",
        "Participación en Jarvis AI e integraciones con OpenAI, Stripe, Expo EAS, Docker, Fly.io y GitHub Actions.",
      ],
      en: [
        "Developed the WeMatch mobile application with React Native and Expo, covering bookings, e-commerce, community features, chat, tournaments, leagues, training, wallet, payments, and matchmaking.",
        "Contributed to the WeMatch web ecosystem, including the club management system, admin panel, backend, role-based authentication, inventory, catalog, promotions, sales analytics, and delivery automation.",
        "Developed workflows and APIs for a LegalTech platform for case, audit, document, task, and legal assistant management using Remix, Prisma, and PostgreSQL.",
        "Implemented and enhanced a legal RAG service using Python, FastAPI, LangGraph, OpenAI embeddings, and Qdrant.",
        "Contributed to Jarvis AI and integrations with OpenAI, Stripe, Expo EAS, Docker, Fly.io, and GitHub Actions.",
      ],
    },
    technologies: ["React", "TypeScript", "Node.js", "Remix", "Express", "React Native", "Prisma", "PostgreSQL", "Supabase", "RAG", "n8n", "OpenAI", "Python", "FastAPI", "LangGraph", "Qdrant"],
  },
  {
    id: "gravitad",
    company: "Gravitad",
    role: "Frontend Developer",
    period: { es: "Dic 2022 — Jun 2023", en: "Dec 2022 — Jun 2023" },
    workMode: { es: "Remoto", en: "Remote" },
    productType: {
      es: "Wallet de criptomonedas",
      en: "Cryptocurrency wallet",
    },
    contributions: {
      es: [
        "Desarrollo frontend de una wallet de criptomonedas con React y TypeScript.",
        "Implementación de componentes, interfaces responsive e integración de APIs para consultar y administrar información desde la aplicación.",
      ],
      en: [
        "Developed the frontend of a cryptocurrency wallet using React and TypeScript.",
        "Built components and responsive interfaces and integrated APIs to retrieve and manage application data.",
      ],
    },
    technologies: ["React", "TypeScript"],
  },
  {
    id: "packar",
    company: "Packar",
    role: "Frontend Developer",
    period: { es: "Feb 2021 — Jun 2022", en: "Feb 2021 — Jun 2022" },
    workMode: { es: "Remoto", en: "Remote" },
    productType: { es: "Aplicación mobile", en: "Mobile application" },
    contributions: {
      es: [
        "Desarrollo y mantenimiento de una aplicación mobile con React Native y Expo.",
        "Construcción y evolución de interfaces adaptadas a distintos dispositivos móviles.",
      ],
      en: [
        "Developed and maintained a mobile application using React Native and Expo.",
        "Built and enhanced interfaces optimized for different mobile devices.",
      ],
    },
    technologies: ["React Native", "Expo"],
  },
];

export const projects: readonly Project[] = [
  {
    id: "daioff",
    title: "DAIOFF",
    description: {
      es: "Plataforma LegalTech full stack para despachos y sindicatos, con gestión de casos, auditorías, documentos y asistentes de IA para análisis y recomendaciones.",
      en: "Full-stack LegalTech platform for law firms and unions, combining case, audit and document management with AI-assisted analysis and recommendations.",
    },
    role: { es: "Contribución Full Stack e integración de RAG", en: "Full-stack contribution and RAG integration" },
    category: "Applied AI",
    technologies: ["Remix", "React", "TypeScript", "Prisma", "PostgreSQL", "RAG", "FastAPI", "Qdrant"],
    image: "/projects/DaiOff.png",
    imageAlt: {
      es: "Página principal de la plataforma legal DaiOff",
      en: "DaiOff legal platform home page",
    },
    demoUrl: "https://daioff-develop.fly.dev/",
    caseStudy: true,
    demoData: true,
    participation: {
      es: "Contribuí dentro de un equipo en APIs y flujos Remix, modelo de datos con Prisma, gestión de casos y auditorías, asistentes legales e integración del servicio RAG.",
      en: "Contributed within a team across Remix APIs and flows, Prisma data modeling, case and audit management, legal assistants and RAG service integration.",
    },
    implementation: {
      es: "Trabajé con loaders, actions y rutas API de Remix, junto con Prisma y PostgreSQL. También participé en la evolución de la recuperación jurídica desde un flujo interno hacia FastAPI, LangGraph y Qdrant, y posteriormente OpenAI File Search.",
      en: "I worked with Remix loaders, actions and API routes alongside Prisma and PostgreSQL. I also contributed to evolving legal retrieval from an in-app flow to FastAPI, LangGraph and Qdrant, and later OpenAI File Search.",
    },
    ai: {
      es: "Implementé y evolucioné un servicio RAG que procesaba sentencias y convenios, segmentaba contenido por estructura legal, generaba embeddings y recuperaba contexto desde Qdrant. Lo integré con DAIOFF antes de que la aplicación adoptara otro flujo de recuperación.",
      en: "I implemented and evolved a RAG service that processed judgments and collective agreements, split content by legal structure, generated embeddings and retrieved context from Qdrant. I integrated it with DAIOFF before the application adopted another retrieval flow.",
    },
    result: {
      es: "Contribuí a implementar flujos para casos, auditorías, documentos, recomendaciones, alertas y consultas jurídicas asistidas por IA.",
      en: "I contributed to implementing flows for cases, audits, documents, recommendations, alerts and AI-assisted legal queries.",
    },
  },
  {
    id: "wematch-mobile",
    title: "WeMatch Mobile",
    description: {
      es: "App mobile de pádel con reservas, e-commerce, red social, chat, torneos, ligas, matchmaking, formación y pagos.",
      en: "Padel mobile app combining bookings, e-commerce, social networking, chat, tournaments, leagues, matchmaking, learning and payments.",
    },
    role: { es: "Desarrollo mobile e integración backend", en: "Mobile development and backend integration" },
    category: "Mobile",
    technologies: ["React Native", "Expo", "TypeScript", "Supabase", "Stripe", "n8n", "OpenAI", "EAS"],
    image: "/projects/We Match.png",
    imageFit: "contain",
    imageAlt: {
      es: "Inicio de la aplicación mobile WeMatch para jugadores",
      en: "WeMatch player mobile application home screen",
    },
    highlights: {
      es: [
        "Reservas de pistas y partidos",
        "E-commerce, wallet y pagos",
        "Red social, comunidad y chat",
        "Torneos, ligas y matchmaking",
      ],
      en: [
        "Court and match bookings",
        "E-commerce, wallet and payments",
        "Social network, community and chat",
        "Tournaments, leagues and matchmaking",
      ],
    },
    caseStudy: true,
    participation: {
      es: "Contribuí en la migración e implementación de la app React Native/Expo, su integración con APIs y reservas, pagos con Stripe y automatización de builds y actualizaciones con EAS.",
      en: "Contributed to the React Native/Expo app migration and implementation, API and booking integration, Stripe payments, and automated builds and updates with EAS.",
    },
    implementation: {
      es: "Trabajé en la integración de la app React Native/Expo con la API Express y servicios Supabase/PostgreSQL, pagos con Stripe y automatización de builds Android y actualizaciones OTA mediante EAS.",
      en: "I worked on integrating the React Native/Expo app with the Express API and Supabase/PostgreSQL services, Stripe payments, and automated Android builds and OTA updates through EAS.",
    },
    ai: {
      es: "Participé en la construcción de un workflow n8n activo para matchmaking asistido por IA, utilizando embeddings de OpenAI y Supabase Vector Store para recuperar perfiles de jugadores como herramienta del agente.",
      en: "Contributed to building an active n8n workflow for AI-assisted matchmaking, using OpenAI embeddings and Supabase Vector Store to retrieve player profiles as an agent tool.",
    },
    result: {
      es: "Contribuí a implementar experiencias para descubrir clubes, reservar pistas y partidos, competir, aprender, comprar, pagar e interactuar con otros jugadores.",
      en: "I contributed to implementing experiences for discovering clubs, booking courts and matches, competing, learning, purchasing, paying and interacting with other players.",
    },
  },
  {
    id: "wematch-club-manager",
    title: "WeMatch Club Manager",
    description: {
      es: "Aplicación web para administrar clubes de pádel, con reservas, pistas, jugadores, pagos, caja, inventario, escuela, torneos, ligas y operaciones internas.",
      en: "Web application for managing padel clubs, covering bookings, courts, players, payments, cash management, inventory, school, tournaments, leagues and internal operations.",
    },
    role: { es: "Contribución Full Stack", en: "Full-stack contribution" },
    category: "Full Stack",
    technologies: ["React", "Vite", "TypeScript", "Node.js", "Express", "Supabase", "PostgreSQL", "Stripe"],
    image: "/projects/WeMatch Panel.png",
    imageAlt: {
      es: "Gestor web de reservas y operaciones de clubes de WeMatch",
      en: "WeMatch web application for club bookings and operations",
    },
    demoUrl: "https://padel-fe.fly.dev/",
    highlights: {
      es: [
        "Gestión de clubes, pistas y jugadores",
        "Reservas, precios y tarifas",
        "Pagos, caja e inventario",
        "Panel administrativo y backend en tiempo real",
      ],
      en: [
        "Club, court and player management",
        "Bookings, pricing and tariffs",
        "Payments, cash management and inventory",
        "Administrative panel and real-time backend",
      ],
    },
    featured: true,
    caseStudy: false,
    demoData: true,
  },
  {
    id: "wematch-admin",
    title: "WeMatch Admin Panel",
    description: {
      es: "Panel administrativo responsive para WeMatch con autenticación por roles, altas de clubes, e-commerce, inventario, promociones y analítica comercial.",
      en: "Responsive WeMatch administration panel with role-based authentication, club onboarding, e-commerce, inventory, promotions and sales analytics.",
    },
    role: { es: "Desarrollo frontend e integración de APIs", en: "Frontend development and API integration" },
    category: "Full Stack",
    technologies: ["React", "TypeScript", "Vite", "React Router", "Tailwind CSS", "Express", "Supabase", "PostgreSQL"],
    image: "/projects/wematch-admin-store.png",
    imageAlt: {
      es: "Gestión de tienda e inventario en el panel administrativo de WeMatch",
      en: "Store and inventory management in the WeMatch administration panel",
    },
    demoUrl: "https://padel-wechat-admin.fly.dev/",
    highlights: {
      es: [
        "Autenticación administrativa por roles",
        "Onboarding y aprobación de clubes",
        "Catálogo, inventario y almacenamiento de imágenes",
        "Colecciones, promociones y ofertas flash",
        "KPIs, gráficos y analítica de ventas",
        "Interfaz responsive con actualización automática",
      ],
      en: [
        "Role-based administrative authentication",
        "Club onboarding and approval",
        "Catalog, inventory and image storage",
        "Collections, promotions and flash offers",
        "KPIs, charts and sales analytics",
        "Responsive UI with automatic refresh",
      ],
    },
    features: {
      es: [
        "Inicio de sesión administrativo, autorización por rol, renovación de sesión y cierre seguro.",
        "Dashboard con métricas de jugadores, clubes, productos, stock, colecciones, alertas y actividad reciente.",
        "Consulta de jugadores con búsqueda, estado, datos de contacto y paginación.",
        "Consulta de clubes con búsqueda por nombre, ciudad o dirección y paginación.",
        "Registro público de clubes mediante un wizard con datos operativos, pistas, horarios, tarifas, políticas, información fiscal e imágenes.",
        "Revisión de solicitudes con filtros, detalle, aprobación, rechazo, generación de invitaciones y envío de emails.",
        "CRUD de productos con búsqueda, categorías, precios, visibilidad, destacados, ofertas flash, SKU, marca e imágenes.",
        "Control de inventario con stock inicial, umbral de stock bajo, ajustes y registro de movimientos.",
        "CRUD de colecciones con banners, orden, productos asociados y publicación.",
        "Gestión de campañas flash y códigos promocionales porcentuales o de importe fijo.",
        "Analítica de ventas por período con ingresos, pedidos, ticket medio, unidades, tendencias, productos destacados y pedidos recientes.",
        "UX responsive con loaders, errores, estados vacíos, toasts, confirmaciones y actualizaciones automáticas según visibilidad.",
      ],
      en: [
        "Administrative login, role-based authorization, session refresh and secure logout.",
        "Dashboard metrics for players, clubs, products, stock, collections, alerts and recent activity.",
        "Player lookup with search, status, contact data and pagination.",
        "Club lookup with name, city or address search and pagination.",
        "Public club registration wizard covering operations, courts, schedules, pricing, policies, fiscal data and images.",
        "Application review with filters, details, approval, rejection, invitation generation and email delivery.",
        "Product CRUD with search, categories, pricing, visibility, featured items, flash offers, SKU, brand and images.",
        "Inventory control with initial stock, low-stock thresholds, adjustments and movement records.",
        "Collection CRUD with banners, ordering, assigned products and publishing.",
        "Flash campaign and percentage or fixed-amount promotional code management.",
        "Period-based sales analytics with revenue, orders, average order value, units, trends, top products and recent orders.",
        "Responsive UX with loaders, errors, empty states, toasts, confirmations and visibility-aware automatic refresh.",
      ],
    },
    caseStudy: true,
    participation: {
      es: "Participé en la construcción del panel administrativo, integrando autenticación, dashboard, altas de clubes, catálogo, inventario, promociones, ventas y servicios del backend.",
      en: "I contributed to building the administration panel, integrating authentication, dashboard, club onboarding, catalog, inventory, promotions, sales and backend services.",
    },
    implementation: {
      es: "Trabajé sobre una SPA con React, TypeScript, Vite y React Router conectada a una API Express. Integré autorización administrativa, Supabase para datos y storage, formularios validados, polling controlado y una interfaz responsive.",
      en: "I worked on a React, TypeScript, Vite and React Router SPA connected to an Express API. I integrated administrative authorization, Supabase data and storage, validated forms, controlled polling and a responsive interface.",
    },
    result: {
      es: "Contribuí a centralizar en una sola herramienta el onboarding de clubes, la operación del e-commerce y la lectura de métricas comerciales de WeMatch.",
      en: "I contributed to centralizing club onboarding, e-commerce operations and WeMatch sales metrics in a single tool.",
    },
  },
  {
    id: "activo-digital",
    title: "Arkia / Activo Digital",
    description: {
      es: "Plataforma PropTech para gestión de activos inmobiliarios, documentación, certificados y análisis financiero y ambiental, con agentes de IA, RAG y automatizaciones n8n.",
      en: "PropTech platform for real-estate asset management, documentation, certificates, and financial and environmental analysis, with AI agents, RAG and n8n automations.",
    },
    role: { es: "Tech Lead", en: "Tech Lead" },
    category: "Full Stack",
    technologies: ["React", "TypeScript", "Node.js", "Python", "Supabase", "n8n", "RAG", "OpenAI"],
    image: "/projects/Arkia.png",
    imageAlt: {
      es: "Interfaz de gestión inmobiliaria de Arkia / Activo Digital",
      en: "Arkia / Activo Digital real-estate management interface",
    },
    demoUrl: "https://edificio-digital.fly.dev/",
    caseStudy: true,
    demoData: true,
    participation: {
      es: "Lideré el desarrollo técnico de la plataforma: frontend, APIs, autenticación, edificios y libros digitales, Supabase y despliegues. También construí workflows n8n para clasificación, validación documental y agentes financieros y ambientales.",
      en: "Led the technical development of the platform across frontend, APIs, authentication, buildings and digital books, Supabase and deployment. Also built n8n workflows for classification, document validation, and financial and environmental agents.",
    },
    implementation: {
      es: "Trabajé sobre un frontend React/TypeScript y un backend Node.js/Express con Supabase, PostgreSQL, storage y RLS. También orquesté procesos Redis/BullMQ y webhooks n8n para clasificar consultas, validar archivos y coordinar OpenAI con Supabase.",
      en: "I worked across a React/TypeScript frontend and Node.js/Express backend using Supabase, PostgreSQL, storage and RLS. I also orchestrated Redis/BullMQ processes and n8n webhooks for query classification, file validation, and OpenAI/Supabase coordination.",
    },
    ai: {
      es: "Diseñé e integré workflows para validar PDFs e imágenes, aplicar checklists, detectar duplicados y almacenar resultados en Supabase. También implementé flujos RAG financieros y ambientales con embeddings de OpenAI, Supabase Vector Store y agentes especializados, además de un clasificador de consultas por webhook.",
      en: "Designed and integrated workflows that validate PDFs and images, apply checklists, detect duplicates and store results in Supabase. I also implemented financial and environmental RAG flows with OpenAI embeddings, Supabase Vector Store and specialized agents, plus a webhook-based query classifier.",
    },
    result: {
      es: "La plataforma centraliza edificios, documentación, auditorías y finanzas, con automatizaciones para ingesta validada y consulta contextual de información financiera y ambiental orientada a regulaciones europeas.",
      en: "The platform centralizes buildings, documents, audits and finance, with automation for validated ingestion and contextual retrieval of financial and environmental information aligned with European regulations.",
    },
  },
  {
    id: "jarvis",
    title: "Jarvis AI",
    description: {
      es: "Aplicación de marketing asistido por IA que genera diagnósticos, buyer personas, estrategias de embudo y contenido a partir del contexto del negocio.",
      en: "AI-assisted marketing application generating diagnoses, buyer personas, funnel strategies and content from business context.",
    },
    role: { es: "Contribución Full Stack e IA aplicada", en: "Full-stack and applied AI contribution" },
    category: "Applied AI",
    technologies: ["Remix", "React", "TypeScript", "Prisma", "SQLite", "OpenAI"],
    image: "/projects/Jarvis.png",
    imageAlt: {
      es: "Página principal del asistente de marketing Jarvis",
      en: "Jarvis marketing assistant home page",
    },
    demoUrl: "https://jarvis-ai-dark-sea-5094.fly.dev/",
    caseStudy: false,
    demoData: true,
  },
  {
    id: "crypto-ghost",
    title: "Crypto Ghost",
    description: {
      es: "Interfaz web de análisis de criptomonedas con dashboard y visualización de datos.",
      en: "Cryptocurrency analysis interface with a dashboard and data visualizations.",
    },
    role: { es: "Desarrollo frontend", en: "Frontend development" },
    category: "Frontend",
    technologies: ["TypeScript", "Remix", "D3.js", "Responsive Design"],
    image: "/projects/Crypto Ghost.png",
    imageAlt: {
      es: "Dashboard de análisis de criptomonedas Crypto Ghost",
      en: "Crypto Ghost cryptocurrency analysis dashboard",
    },
    demoUrl: "https://cryptoghost.fly.dev/",
    caseStudy: false,
    demoData: true,
  },
  {
    id: "sneakers",
    title: "E-Commerce Sneakers",
    description: {
      es: "Proyecto colaborativo de e-commerce con catálogo, carrito y flujo de compra.",
      en: "Collaborative e-commerce project with a catalogue, cart and checkout flow.",
    },
    role: { es: "Desarrollo Full Stack en equipo", en: "Team-based Full Stack development" },
    category: "Full Stack",
    technologies: ["React", "Redux", "Node.js", "Express", "PostgreSQL"],
    image: "/projects/E-Commerce Sneakers.png",
    imageAlt: {
      es: "Catálogo del e-commerce Sneakers",
      en: "Sneakers e-commerce catalogue",
    },
    caseStudy: false,
    demoData: true,
  },
  {
    id: "packar-mobile",
    title: "Packar",
    description: {
      es: "Aplicación mobile desarrollada con React Native y Expo.",
      en: "Mobile application developed with React Native and Expo.",
    },
    role: { es: "Desarrollo mobile", en: "Mobile development" },
    category: "Mobile",
    technologies: ["React Native", "Expo"],
    image: "/projects/Mobile App Packcar.png",
    imageAlt: {
      es: "Pantallas de la aplicación mobile Packar",
      en: "Packar mobile application screens",
    },
    caseStudy: false,
  },
];

export const skillCategories: readonly SkillCategory[] = [
  {
    id: "ai",
    title: { es: "IA y automatización", en: "AI & Automation" },
    description: {
      es: "Especialización aplicada a productos web.",
      en: "Specialization applied to web products.",
    },
    skills: ["RAG", "Embeddings", "LLMs", "Prompt engineering", "n8n", "OpenAI API", "LangChain", "LangGraph", "Pinecone", "Qdrant", "Supabase Vector Store", "Integración de IA", "Automatización de flujos"],
    primary: true,
  },
  {
    id: "frontend",
    title: { es: "Frontend", en: "Frontend" },
    description: { es: "Interfaces web accesibles y responsive.", en: "Accessible, responsive web interfaces." },
    skills: ["JavaScript ES6+", "TypeScript", "React", "React Router", "Redux", "Next.js", "Remix", "HTML5", "CSS3", "TailwindCSS", "Material UI", "Bootstrap", "Responsive Design"],
  },
  {
    id: "backend",
    title: { es: "Backend", en: "Backend" },
    description: { es: "APIs, lógica de negocio y datos.", en: "APIs, business logic and data." },
    skills: ["Node.js", "Express", "Python", "FastAPI", "REST APIs", "PostgreSQL", "Supabase", "MongoDB", "SQLite", "Prisma", "Sequelize", "Postman"],
  },
  {
    id: "mobile",
    title: { es: "Mobile", en: "Mobile" },
    description: { es: "Aplicaciones multiplataforma.", en: "Cross-platform applications." },
    skills: ["React Native", "Expo", "Expo EAS"],
  },
  {
    id: "workflow",
    title: { es: "Herramientas y metodología", en: "Tools & Workflow" },
    description: { es: "Colaboración remota y ágil.", en: "Remote, agile collaboration." },
    skills: ["Git", "GitHub Actions", "Docker", "CI/CD", "Fly.io", "AWS EC2", "AWS S3", "AWS Lambda", "Scrum", "Agile", "Trabajo remoto"],
  },
];

export const education: readonly Education[] = [
  { id: "henry", program: "Full Stack Web Developer", institution: "Henry Bootcamp", period: "2022–2023" },
  { id: "open-bootcamp", program: "React y TypeScript", institution: "Open Bootcamp", period: "2023" },
  { id: "coursera", program: "React Native", institution: "Coursera", period: "2024" },
];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localize(text: LocalizedText, locale: Locale) {
  return text[locale];
}

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}
