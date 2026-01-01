export type Language = 'en' | 'es';

export interface Translations {
  // Navbar
  navbar: {
    github: string;
    linkedin: string;
  };
  
  // Hero
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    description2: string;
  };
  
  // Skills
  skills: {
    title: string;
  };
  
  // Work Experience
  workExperience: {
    title: string;
    experiences: {
      daioff: {
        position: string;
        duration: string;
        description: string;
      };
      gravitad: {
        position: string;
        duration: string;
        description: string;
      };
      packar: {
        position: string;
        duration: string;
        description: string;
      };
    };
  };
  
  // Projects
  projects: {
    title: string;
    view: string;
    moreTechnologies: string;
    technologies: string;
    description: string;
    viewLiveDemo: string;
    viewCode: string;
    noImage: string;
    projectDescriptions: {
      daioff: string;
      arkia: string;
      jarvis: string;
      cryptoGhost: string;
      sneakers: string;
      packar: string;
      portfolio: string;
    };
  };
  
  // Contact
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    navbar: {
      github: 'GitHub Profile',
      linkedin: 'LinkedIn Profile',
    },
    hero: {
      greeting: "Nice to meet you",
      name: "I'm",
      title: "Martin Gadea",
      description: "Full Stack Developer & AI Engineer based in Argentina.",
      description2: "I specialize in building intelligent, scalable applications with AI-powered features, including RAG systems, embeddings, and multi-agent workflows.",
    },
    skills: {
      title: "Technologies",
    },
    workExperience: {
      title: "Work Experience",
      experiences: {
        daioff: {
          position: 'Full Stack Developer & AI Engineer',
          duration: 'June 2023 - Present',
          description: 'Leading the development of an AI-powered legal labor advisory platform that revolutionizes how law firms and labor unions handle legal processes. Architected and implemented RAG (Retrieval-Augmented Generation) systems using embeddings and vector databases for intelligent case analysis. Built multi-agent workflows using n8n to automate document drafting, legal research, and case management. The platform leverages advanced NLP and machine learning to provide real-time legal insights, resulting in significant time savings and improved accuracy for legal professionals. Technologies: TypeScript, Remix, PostgreSQL, AI/ML, RAG systems, embeddings, n8n, multi-agent architectures.',
        },
        gravitad: {
          position: 'Front-End Developer',
          duration: 'December 2022 - June 2023',
          description: 'Developed high-performance user interfaces for an advanced cryptocurrency trading platform. Focused on creating intuitive, responsive designs using React and TypeScript. Collaborated with cross-functional teams to implement complex data visualization features, real-time price updates, and interactive trading interfaces. Contributed to improving user experience and platform performance through code optimization and modern development practices.',
        },
        packar: {
          position: 'Front-End Mobile Developer',
          duration: 'February 2021 - June 2022',
          description: 'Developed a cross-platform mobile application for package delivery services using TypeScript, React Native, and Expo. Implemented responsive designs and optimized performance to ensure smooth user experience across iOS and Android devices. Collaborated with designers and backend developers to integrate new features and improve user engagement, resulting in a 20% increase in active users.',
        },
      },
    },
    projects: {
      title: "Projects",
      view: "View",
      moreTechnologies: "More Technologies",
      technologies: "Technologies",
      description: "Description",
      viewLiveDemo: "View Live Demo",
      viewCode: "View Code",
      noImage: "No image",
      projectDescriptions: {
        daioff: "AI-powered legal labor advisory platform built with RAG systems, embeddings, and vector databases. Implements multi-agent workflows using n8n for automated case analysis, intelligent document generation, and real-time legal insights. Leverages advanced NLP and machine learning to provide accurate legal guidance for law firms and labor unions.",
        arkia: "Building portfolio management platform for real estate buildings with AI-powered features. Implementing RAG systems and embeddings for intelligent property data analysis, automated reporting, and predictive maintenance insights. Using multi-agent architectures with n8n to streamline workflows and enhance decision-making for property management.",
        jarvis: "AI-powered marketing advisor platform that helps businesses optimize their digital strategies. Features intelligent content suggestions, automated campaign analysis, and real-time performance insights. Built with modern AI technologies to enhance marketing decision-making and workflow automation.",
        cryptoGhost: "Comprehensive cryptocurrency analytics platform featuring multiple interactive tools. Includes a professional landing page with modern UI design, an advanced dashboard with real-time data visualization showing top cryptocurrencies by volume, trending tokens, and earlybird coins with comprehensive performance metrics. Also features an interactive bubble chart visualization built with D3.js, where animated bubbles represent different cryptocurrencies with physics-based movement, collision detection, and interactive navigation. Built with modern web technologies for fast, responsive user experience.",
        sneakers: "Modern e-commerce platform for imported sneakers with integrated payment processing (PayPal and Stripe) and email notifications via Nodemailer. Features responsive design, shopping cart functionality, and secure checkout process.",
        packar: "Cross-platform mobile application for package delivery services. Developed with React Native and Expo, featuring real-time tracking, user notifications, and intuitive package management interface.",
        portfolio: "Professional portfolio website showcasing projects and technical skills. Built with modern web technologies including React, Remix, and Tailwind CSS. Features responsive design, smooth animations, and optimized performance.",
      },
    },
    contact: {
      title: "Contact",
      subtitle: "I'm open to new opportunities and collaborations. Whether you're looking for a developer with AI expertise, need help building scalable applications, or want to discuss a project, feel free to reach out. I'd love to hear from you!",
      name: "Company or Recruiter",
      email: "Email Address",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully",
      error: "Error sending message. Please try again.",
    },
  },
  es: {
    navbar: {
      github: 'Perfil de GitHub',
      linkedin: 'Perfil de LinkedIn',
    },
    hero: {
      greeting: "Encantado de conocerte",
      name: "Soy",
      title: "Martin Gadea",
      description: "Desarrollador Full Stack y Especialista en IA con base en Argentina.",
      description2: "Me especializo en construir aplicaciones inteligentes y escalables con características potenciadas por IA, incluyendo sistemas RAG, embeddings y flujos de trabajo multiagente.",
    },
    skills: {
      title: "Tecnologías",
    },
    workExperience: {
      title: "Experiencia Laboral",
      experiences: {
        daioff: {
          position: 'Desarrollador Full Stack & Especialista en IA',
          duration: 'Junio 2023 - Presente',
          description: 'Liderando el desarrollo de una plataforma de asesoría legal laboral potenciada por IA que revoluciona cómo los despachos legales y sindicatos manejan los procesos legales. Arquitecturé e implementé sistemas RAG (Retrieval-Augmented Generation) usando embeddings y bases de datos vectoriales para análisis inteligente de casos. Construí flujos de trabajo multiagente usando n8n para automatizar la redacción de documentos, investigación legal y gestión de casos. La plataforma aprovecha NLP avanzado y machine learning para proporcionar insights legales en tiempo real, resultando en ahorros significativos de tiempo y mayor precisión para profesionales legales. Tecnologías: TypeScript, Remix, PostgreSQL, IA/ML, sistemas RAG, embeddings, n8n, arquitecturas multiagente.',
        },
        gravitad: {
          position: 'Desarrollador Front-End',
          duration: 'Diciembre 2022 - Junio 2023',
          description: 'Desarrollé interfaces de usuario de alto rendimiento para una plataforma avanzada de trading de criptomonedas. Me enfoqué en crear diseños intuitivos y responsivos usando React y TypeScript. Colaboré con equipos multifuncionales para implementar características complejas de visualización de datos, actualizaciones de precios en tiempo real e interfaces de trading interactivas. Contribuí a mejorar la experiencia del usuario y el rendimiento de la plataforma a través de optimización de código y prácticas modernas de desarrollo.',
        },
        packar: {
          position: 'Desarrollador Front-End Mobile',
          duration: 'Febrero 2021 - Junio 2022',
          description: 'Desarrollé una aplicación móvil multiplataforma para servicios de entrega de paquetes usando TypeScript, React Native y Expo. Implementé diseños responsivos y optimicé el rendimiento para asegurar una experiencia de usuario fluida en dispositivos iOS y Android. Colaboré con diseñadores y desarrolladores backend para integrar nuevas características y mejorar el engagement del usuario, resultando en un aumento del 20% en usuarios activos.',
        },
      },
    },
    projects: {
      title: "Proyectos",
      view: "Ver",
      moreTechnologies: "Más Tecnologías",
      technologies: "Tecnologías",
      description: "Descripción",
      viewLiveDemo: "Ver Demo en Vivo",
      viewCode: "Ver Código",
      noImage: "Sin imagen",
      projectDescriptions: {
        daioff: "Plataforma de asesoría legal laboral potenciada por IA construida con sistemas RAG, embeddings y bases de datos vectoriales. Implementa flujos de trabajo multiagente usando n8n para análisis automatizado de casos, generación inteligente de documentos e insights legales en tiempo real. Aprovecha NLP avanzado y machine learning para proporcionar orientación legal precisa para despachos legales y sindicatos.",
        arkia: "Plataforma de gestión de portafolio para edificios inmobiliarios con características potenciadas por IA. Implementando sistemas RAG y embeddings para análisis inteligente de datos de propiedades, reportes automatizados e insights de mantenimiento predictivo. Usando arquitecturas multiagente con n8n para optimizar flujos de trabajo y mejorar la toma de decisiones para gestión de propiedades.",
        jarvis: "Plataforma de asesor de marketing potenciada por IA que ayuda a las empresas a optimizar sus estrategias digitales. Incluye sugerencias inteligentes de contenido, análisis automatizado de campañas e insights de rendimiento en tiempo real. Construida con tecnologías modernas de IA para mejorar la toma de decisiones de marketing y automatización de flujos de trabajo.",
        cryptoGhost: "Plataforma integral de análisis de criptomonedas con múltiples herramientas interactivas. Incluye una landing page profesional con diseño UI moderno, un dashboard avanzado con visualización de datos en tiempo real mostrando las principales criptomonedas por volumen, tokens en tendencia y monedas earlybird con métricas de rendimiento completas. También incluye una visualización interactiva de gráfico de burbujas construida con D3.js, donde burbujas animadas representan diferentes criptomonedas con movimiento basado en física, detección de colisiones y navegación interactiva. Construida con tecnologías web modernas para una experiencia de usuario rápida y responsiva.",
        sneakers: "Plataforma moderna de e-commerce para zapatillas importadas con procesamiento de pagos integrado (PayPal y Stripe) y notificaciones por email vía Nodemailer. Incluye diseño responsivo, funcionalidad de carrito de compras y proceso de checkout seguro.",
        packar: "Aplicación móvil multiplataforma para servicios de entrega de paquetes. Desarrollada con React Native y Expo, con seguimiento en tiempo real, notificaciones de usuario e interfaz intuitiva de gestión de paquetes.",
        portfolio: "Sitio web de portfolio profesional que muestra proyectos y habilidades técnicas. Construido con tecnologías web modernas incluyendo React, Remix y Tailwind CSS. Incluye diseño responsivo, animaciones suaves y rendimiento optimizado.",
      },
    },
    contact: {
      title: "Contacto",
      subtitle: "Estoy abierto a nuevas oportunidades y colaboraciones. Ya sea que busques un desarrollador con experiencia en IA, necesites ayuda construyendo aplicaciones escalables, o quieras discutir un proyecto, no dudes en contactarme. ¡Me encantaría saber de ti!",
      name: "Empresa o Reclutador",
      email: "Correo Electrónico",
      message: "Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "Mensaje enviado con éxito",
      error: "Error al enviar el mensaje. Por favor, intenta de nuevo.",
    },
  },
};
