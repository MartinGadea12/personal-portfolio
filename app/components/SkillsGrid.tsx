import React, { useEffect, useRef } from "react";

const skills = [
  {
    name: "HTML",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    name: "Javascript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "Typescript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "Tailwind",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "React Native",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },

  {
    name: "Next.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Express",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    name: "MongoDB",
    logo: "https://www.svgrepo.com/show/331488/mongodb.svg",
  },
  {
    name: "SQLite",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  },
  {
    name: "Git",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
  },
  {
    name: "GitHub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
];

const SkillsGrid: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrame: number;

    const scroll = () => {
      if (!container) return;
      container.scrollLeft += 0.5;

      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 mt-20">
      <h1 className="text-4xl font-bold text-center mb-6 text-white">
        <span className="text-orange-500">Tech</span>nologies
      </h1>
      <div className="border-t-2 border-orange-500 mb-12"></div>

      <div
        ref={scrollRef}
        className="overflow-x-scroll whitespace-nowrap no-scrollbar"
      >
        <div className="flex space-x-8 px-4 py-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex-shrink-0 w-56 h-64 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg rounded-xl transform transition duration-500 hover:scale-110 hover:shadow-2xl"
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-24 h-24 mb-4 object-contain"
              />
              <h2 className="text-2xl font-bold text-white">{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t-2 border-orange-500 mt-12"></div>
    </div>
  );
};

export default SkillsGrid;
