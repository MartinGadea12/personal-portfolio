import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes, FaChevronRight, FaArrowRight } from "react-icons/fa";
import { useLanguage } from "~/contexts/LanguageContext";

interface Project {
  title: string;
  description: string;
  technologies: string;
  images: string[];
  deploy: string;
  code: string;
}

// Función para obtener proyectos con descripciones traducidas
const getProjects = (t: any): Project[] => [
  {
    title: "DaiOff",
    description: t.projects.projectDescriptions.daioff,
    technologies: "TYPESCRIPT, REMIX, POSTGRESQL, RAG, EMBEDDINGS, N8N, AI",
    images: ["/assets/images/daioffLanding.png", "/assets/images/daioff.png"],
    deploy: "https://daioff-develop.fly.dev/",
    code: "",
  },
  {
    title: "Arkia",
    description: t.projects.projectDescriptions.arkia,
    technologies: "TYPESCRIPT, REMIX, POSTGRESQL, RAG, EMBEDDINGS, N8N, AI",
    images: [
      "/assets/images/arkia1.png",
      "/assets/images/arkia2.png",
      "/assets/images/arkia3.png",
    ],
    deploy: "https://edificio-digital.fly.dev/",
    code: "",
  },
  {
    title: "Jarvis",
    description: t.projects.projectDescriptions.jarvis,
    technologies: "TYPESCRIPT, REMIX, TAILWIND, AI, NLP",
    images: [
      "/assets/images/jarvis1.png",
      "/assets/images/jarvis2.png",
      "/assets/images/jarvis3.png",
    ],
    deploy: "https://jarvis-ai-dark-sea-5094.fly.dev/",
    code: "",
  },
  {
    title: "Crypto Ghost",
    description: t.projects.projectDescriptions.cryptoGhost,
    technologies: "TYPESCRIPT, REMIX, TAILWIND, D3.JS, DATA VISUALIZATION, ACETERNITY",
    images: [
      "/assets/images/landingPage.png",
      "/assets/images/langingPage2.png",
      "/assets/images/dashboard.jpg",
      "/assets/images/bubbles2.png",
    ],
    deploy: "https://cryptoghost.fly.dev/",
    code: "",
  },
  {
    title: 'E-Commerce "Sneakers"',
    description: t.projects.projectDescriptions.sneakers,
    technologies: "TYPESCRIPT, REACT, REDUX, BOOTSTRAP, STRIPE",
    images: ["/assets/images/sneakers.png"],
    deploy: "https://snykers.vercel.app/",
    code: "https://github.com/snYKersCompany/shoes-eComerce",
  },
  {
    title: 'Mobile App "Packar"',
    description: t.projects.projectDescriptions.packar,
    technologies: "TYPESCRIPT, REACT NATIVE, EXPO GO",
    images: ["/assets/images/packar.png"],
    deploy: "",
    code: "",
  },
  {
    title: "Personal Portfolio",
    description: t.projects.projectDescriptions.portfolio,
    technologies: "TYPESCRIPT, REACT, REMIX, TAILWIND",
    images: [
      "/assets/images/portfolio.png",
      "/assets/images/portfolio2.png",
      "/assets/images/portfolio3.png",
      "/assets/images/portfolio4.png",
    ],
    deploy: "https://portfolio-nine-gules-88.vercel.app/",
    code: "https://github.com/MartinGadea12/personal-portfolio",
  },
];

// Función uniforme para obtener color del badge - TODAS naranjas para consistencia
const getTechColor = (tech: string) => {
  // Todas las tecnologías usan el mismo color naranja para uniformidad
  return "bg-orange-500/20 text-orange-400 border-orange-500/40";
};

const ProjectPortfolio = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = getProjects(t);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const getTechBadges = (techString: string) => {
    return techString.split(",").map((tech) => tech.trim()).slice(0, 5);
  };

  const getRemainingTechs = (techString: string) => {
    return techString.split(",").map((tech) => tech.trim()).slice(5);
  };

  return (
    <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[95rem] mx-auto mb-24 sm:mb-32 md:mb-40 px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-12 mt-8 sm:mt-12 lg:mt-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4 sm:mb-6">
        <span className="text-orange-500">{t.projects.title.substring(0, 2)}</span>{t.projects.title.substring(2)}
      </h1>
      <div className="border-t-2 border-orange-500 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12"></div>

      {/* Cards tipo lista profesionales y uniformes */}
      <div className="space-y-3 sm:space-y-4">
        {projects.map((project, index) => {
          const mainTechs = getTechBadges(project.technologies);
          const remainingTechs = getRemainingTechs(project.technologies);
          const hasMoreTechs = remainingTechs.length > 0;
          
          return (
          <motion.div
            key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative overflow-hidden bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-sm border border-gray-700/60 hover:border-orange-500/70 rounded-xl p-4 sm:p-5 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/15 hover:-translate-y-0.5"
            >
              {/* Efecto de brillo profesional en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <div className="flex items-center gap-4 sm:gap-5 md:gap-6 relative z-10">
                {/* Thumbnail uniforme y profesional */}
                <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-lg overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-600/60 group-hover:border-orange-500/60 transition-all duration-300 shadow-xl group-hover:shadow-orange-500/25 relative">
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      style={{ objectPosition: 'center top' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-500 text-xs font-medium bg-gray-800/50">No image</div>';
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs font-medium bg-gray-800/50">
                      {t.projects.noImage}
                    </div>
                  )}
                </div>

                {/* Info profesional y uniforme */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {/* Título uniforme */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                      
                      {/* Badges uniformes y profesionales */}
                      <div className="flex flex-wrap items-center gap-2">
                        {mainTechs.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-all duration-300 group-hover:scale-105 ${getTechColor(tech)}`}
                          >
                            {tech}
                          </span>
                        ))}
                        
                        {/* Badge +X con tooltip profesional */}
                        {hasMoreTechs && (
                          <div className="relative group/tooltip inline-block">
                            <span className="px-2.5 py-1 text-xs font-semibold text-gray-300 bg-gray-700/60 rounded-lg border border-gray-600/50 cursor-help hover:bg-gray-700/80 hover:border-gray-500/60 transition-all duration-200">
                              +{remainingTechs.length}
                            </span>
                            
                            {/* Tooltip profesional y uniforme */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50 pointer-events-none group-hover/tooltip:pointer-events-auto">
                              <div className="bg-gray-800/95 backdrop-blur-sm border border-gray-700/60 rounded-lg p-3 shadow-2xl min-w-[200px] max-w-[280px]">
                                <div className="text-xs font-bold text-orange-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                                  <div className="w-1 h-3 bg-orange-500 rounded-full"></div>
                                  {t.projects.moreTechnologies}
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                  {remainingTechs.map((tech, i) => (
                                    <span
                                      key={i}
                                      className={`px-2 py-0.5 text-xs font-semibold rounded-lg border transition-all ${getTechColor(tech)}`}
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                                {/* Flecha del tooltip profesional */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1.5">
                                  <div className="w-3 h-3 bg-gray-800/95 border-r border-b border-gray-700/60 rotate-45"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Botón View profesional y uniforme */}
                    <div className="flex-shrink-0 flex items-center gap-2 text-orange-500 group-hover:text-orange-400 transition-colors">
                      <span className="text-xs font-bold hidden sm:inline tracking-wide">{t.projects.view}</span>
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
              </div>
            </div>
          </motion.div>
          );
        })}
      </div>

      <div className="border-t-2 border-orange-500 max-w-4xl mx-auto mt-12 sm:mt-16 md:mt-20"></div>

      {/* Modal de detalle profesional */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            t={t}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
  t: any;
}

const ProjectDetailModal = ({ project, onClose, t }: ProjectDetailModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const techArray = project.technologies.split(",").map((tech) => tech.trim());

  const nextImage = () => {
    setCurrentImageIndex(
      (prev) => (prev + 1) % (project.images?.length || 1)
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + (project.images?.length || 1)) % (project.images?.length || 1)
    );
  };

  return (
    <>
      {/* Backdrop profesional */}
      <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/95 backdrop-blur-md z-50"
      />

      {/* Modal profesional y uniforme */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed inset-2 sm:inset-4 md:inset-6 lg:inset-8 z-50 overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-gray-700/60 rounded-2xl shadow-2xl overflow-hidden max-w-7xl xl:max-w-[90rem] mx-auto backdrop-blur-xl">
          {/* Header con imagen profesional */}
          <div className="relative">
            {project.images && project.images.length > 0 ? (
              <div className="relative h-72 sm:h-96 md:h-[500px] bg-gradient-to-br from-gray-800 to-gray-900">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={project.images[currentImageIndex]}
                    alt={project.title}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
      </AnimatePresence>

                {/* Overlay gradiente profesional */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

                {/* Navegación de imágenes profesional */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3.5 rounded-full transition-all backdrop-blur-sm hover:scale-110 shadow-xl"
                      aria-label="Previous image"
                    >
                      <FaChevronRight className="w-5 h-5 rotate-180" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3.5 rounded-full transition-all backdrop-blur-sm hover:scale-110 shadow-xl"
                      aria-label="Next image"
                    >
                      <FaChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 bg-black/50 backdrop-blur-sm px-4 py-2.5 rounded-full border border-gray-700/50">
                      {project.images.map((_, index) => (
                        <button
              key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(index);
                          }}
                          className={`h-2.5 rounded-full transition-all ${
                            index === currentImageIndex
                              ? "w-10 bg-orange-500 shadow-lg shadow-orange-500/50"
                              : "w-2.5 bg-white/60 hover:bg-white/80"
                          }`}
                          aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
                  </>
                )}

                {/* Botón cerrar profesional */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  className="absolute top-6 right-6 bg-black/70 hover:bg-black/90 text-white p-3.5 rounded-full transition-all backdrop-blur-sm hover:scale-110 shadow-xl z-10"
                  aria-label="Close modal"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="h-72 sm:h-96 md:h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                <p className="text-gray-500 text-lg">{t.projects.noImage}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  className="absolute top-6 right-6 bg-black/70 hover:bg-black/90 text-white p-3.5 rounded-full transition-all backdrop-blur-sm hover:scale-110 shadow-xl"
                  aria-label="Close modal"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Contenido profesional y uniforme */}
          <div className="p-8 sm:p-10 md:p-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
              {project.title}
            </h2>

            {/* Tecnologías uniformes */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-4 flex items-center gap-2.5">
                <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
                {t.projects.technologies}
              </h3>
              <div className="flex flex-wrap gap-3">
                {techArray.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all hover:scale-105 ${getTechColor(tech)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Descripción profesional */}
            <div className="mb-10">
              <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-4 flex items-center gap-2.5">
                <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
                {t.projects.description}
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Botones de acción profesionales */}
            <div className="flex flex-col sm:flex-row gap-4">
              {project.deploy && (
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                  <span>{t.projects.viewLiveDemo}</span>
                </a>
              )}
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="group flex items-center justify-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-2xl hover:scale-105"
                >
                  <FaGithub className="w-6 h-6" />
                  <span>{t.projects.viewCode}</span>
                </a>
              )}
    </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectPortfolio;
