import type { Locale } from "@/lib/profile";

const es = {
  seo: {
    title: "Martin Gadea | Full Stack Developer especializado en IA aplicada",
    description:
      "Portfolio de Martin Gadea, desarrollador Full Stack con más de 5 años de experiencia en React, TypeScript, Node.js, aplicaciones mobile, RAG y automatización con n8n.",
  },
  nav: {
    label: "Navegación principal",
    home: "Inicio",
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
    open: "Abrir menú",
    close: "Cerrar menú",
    skip: "Saltar al contenido",
  },
  hero: {
    eyebrow: "Full Stack · IA aplicada · Argentina",
    title: "Full Stack Developer especializado en IA aplicada",
    description:
      "Desarrollo aplicaciones web y mobile con React, TypeScript y Node.js, integrando IA, RAG y automatizaciones con n8n para resolver necesidades reales de producto.",
    tags: ["5+ años de experiencia", "Full Stack", "IA aplicada", "Disponible remoto"],
    projectsCta: "Ver proyectos",
    contactCta: "Contactarme",
    cvCta: "Descargar CV",
    socialLabel: "Perfiles profesionales",
  },
  sections: {
    about: "Sobre mí",
    aboutIntro: "Experiencia de producto de punta a punta",
    experience: "Experiencia",
    experienceIntro: "Más de cinco años desarrollando productos web y mobile.",
    projects: "Proyectos",
    projectsIntro: "Una selección ordenada por relevancia Full Stack e IA aplicada.",
    skills: "Habilidades",
    skillsIntro: "Base Full Stack y especialización práctica, sin niveles arbitrarios.",
    contact: "Contacto",
  },
  about: {
    paragraphs: [
      "Soy desarrollador Full Stack con más de cinco años de experiencia construyendo aplicaciones web y mobile. Trabajo principalmente con React, TypeScript y Node.js, desarrollando interfaces, APIs, lógica de negocio e integraciones con bases de datos.",
      "También lideré el desarrollo técnico de una plataforma PropTech y construí workflows n8n para clasificación, validación documental y agentes RAG financieros, ambientales y de matchmaking. Mi enfoque es integrar IA y automatización dentro de productos funcionales, combinando experiencia de usuario, lógica de negocio y recuperación contextual.",
      "Busco oportunidades Full Stack, Backend, Frontend o de IA aplicada dentro de equipos remotos.",
    ],
    capabilities: ["Web y mobile", "Frontend y backend", "APIs y bases de datos", "RAG y automatización con n8n", "Equipos remotos y ágiles"],
    education: "Educación",
    languages: "Idiomas",
    languageValue: "Español nativo · Inglés A2",
  },
  experience: {
    contributionLabel: "Aportes y responsabilidades",
    stackLabel: "Tecnologías relacionadas",
  },
  projects: {
    role: "Rol",
    category: "Categoría",
    demo: "Ver demo",
    repository: "Ver repositorio",
    caseStudy: "Ver caso de estudio",
    technologies: "Stack principal",
    demoData: "Datos de demostración",
  },
  caseStudy: {
    back: "Volver a proyectos",
    summary: "Resumen",
    participation: "Mi participación",
    stack: "Stack",
    implementation: "Implementación",
    features: "Funciones principales",
    ai: "Inteligencia artificial",
    result: "Resultado",
    evidence: "Evidencia",
  },
  contact: {
    heading: "Hablemos de tu equipo o producto",
    intro:
      "Estoy disponible para posiciones Full Stack, Frontend, Backend y de IA aplicada, especialmente en productos que combinen React, TypeScript, Node.js, RAG y automatización.",
    direct: "Contacto directo",
    availability: "Disponibilidad",
    formHeading: "Enviar un mensaje",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "tu@email.com",
    messagePlaceholder: "Contame brevemente sobre la oportunidad",
    submit: "Enviar mensaje",
    sending: "Enviando…",
    success: "Mensaje enviado. Gracias por contactarme.",
    error: "No se pudo enviar el mensaje. Podés escribirme directamente por email.",
    privacy: "Tus datos se usan únicamente para responder este mensaje y se envían mediante EmailJS.",
    invalidName: "Ingresá un nombre válido.",
    invalidEmail: "Ingresá un email válido.",
    invalidMessage: "El mensaje debe tener entre 10 y 2000 caracteres.",
  },
  controls: {
    themeLight: "Usar tema claro",
    themeDark: "Usar tema oscuro",
    language: "Ver portfolio en inglés",
    external: "abre en una pestaña nueva",
    cvLanguage: "Elegir idioma del CV",
    cvSpanish: "CV en español",
    cvEnglish: "CV en inglés",
  },
  footer: "Portfolio desarrollado con Next.js y TypeScript.",
} as const;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer Item)[]
    ? readonly Widen<Item>[]
    : { [Key in keyof T]: Widen<T[Key]> };

const en: Widen<typeof es> = {
  seo: {
    title: "Martin Gadea | Full Stack & Applied AI Engineer",
    description:
      "Portfolio of Martin Gadea, a Full Stack Developer with 5+ years of experience in React, TypeScript, Node.js, mobile applications, RAG and n8n automation.",
  },
  nav: {
    label: "Main navigation",
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    open: "Open menu",
    close: "Close menu",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "Full Stack · Applied AI · Argentina",
    title: "Full Stack & Applied AI Engineer",
    description:
      "I build web and mobile applications with React, TypeScript and Node.js, integrating AI, RAG and n8n automations to solve real product needs.",
    tags: ["5+ years of experience", "Full Stack", "Applied AI", "Available remotely"],
    projectsCta: "View projects",
    contactCta: "Contact me",
    cvCta: "Download CV",
    socialLabel: "Professional profiles",
  },
  sections: {
    about: "About",
    aboutIntro: "End-to-end product development experience",
    experience: "Experience",
    experienceIntro: "More than five years building web and mobile products.",
    projects: "Projects",
    projectsIntro: "A selection ordered by Full Stack and applied AI relevance.",
    skills: "Skills",
    skillsIntro: "A Full Stack foundation and practical specialization, without arbitrary levels.",
    contact: "Contact",
  },
  about: {
    paragraphs: [
      "I am a Full Stack Developer with more than five years of experience building web and mobile applications. I work mainly with React, TypeScript and Node.js, developing interfaces, APIs, business logic and database integrations.",
      "I also led the technical development of a PropTech platform and built n8n workflows for classification, document validation, and financial, environmental and matchmaking RAG agents. My focus is integrating AI and automation into functional products by combining user experience, business logic and contextual retrieval.",
      "I am looking for Full Stack, Backend, Frontend or applied AI opportunities within remote teams.",
    ],
    capabilities: ["Web and mobile", "Frontend and backend", "APIs and databases", "RAG and n8n automation", "Remote, agile teams"],
    education: "Education",
    languages: "Languages",
    languageValue: "Native Spanish · English A2",
  },
  experience: {
    contributionLabel: "Contributions and responsibilities",
    stackLabel: "Related technologies",
  },
  projects: {
    role: "Role",
    category: "Category",
    demo: "View demo",
    repository: "View repository",
    caseStudy: "View case study",
    technologies: "Main stack",
    demoData: "Demo data",
  },
  caseStudy: {
    back: "Back to projects",
    summary: "Summary",
    participation: "My participation",
    stack: "Stack",
    implementation: "Implementation",
    features: "Core functionality",
    ai: "Artificial intelligence",
    result: "Result",
    evidence: "Evidence",
  },
  contact: {
    heading: "Let’s discuss your team or product",
    intro:
      "I am available for Full Stack, Frontend, Backend and applied AI positions, especially in products combining React, TypeScript, Node.js, RAG and automation.",
    direct: "Direct contact",
    availability: "Availability",
    formHeading: "Send a message",
    name: "Name",
    email: "Email",
    message: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@email.com",
    messagePlaceholder: "Briefly describe the opportunity",
    submit: "Send message",
    sending: "Sending…",
    success: "Message sent. Thank you for reaching out.",
    error: "The message could not be sent. You can email me directly.",
    privacy: "Your details are used only to reply to this message and are sent through EmailJS.",
    invalidName: "Enter a valid name.",
    invalidEmail: "Enter a valid email.",
    invalidMessage: "The message must be between 10 and 2000 characters.",
  },
  controls: {
    themeLight: "Use light theme",
    themeDark: "Use dark theme",
    language: "View portfolio in Spanish",
    external: "opens in a new tab",
    cvLanguage: "Choose CV language",
    cvSpanish: "CV in Spanish",
    cvEnglish: "CV in English",
  },
  footer: "Portfolio built with Next.js and TypeScript.",
};

export type Translations = Widen<typeof es>;

export const translations: Record<Locale, Translations> = { es, en };
