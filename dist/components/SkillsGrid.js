import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
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
    {
        name: "n8n",
        logo: "https://avatars.githubusercontent.com/u/54484936?s=200&v=4",
    },
    {
        name: "OpenAI",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    },
    {
        name: "Python",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
];
const SkillsGrid = () => {
    const scrollRef = useRef(null);
    useEffect(() => {
        const container = scrollRef.current;
        let animationFrame;
        const scroll = () => {
            if (!container)
                return;
            container.scrollLeft += 0.5;
            if (container.scrollLeft >=
                container.scrollWidth - container.clientWidth) {
                container.scrollLeft = 0;
            }
            animationFrame = requestAnimationFrame(scroll);
        };
        animationFrame = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrame);
    }, []);
    return (_jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-12 sm:mt-16 lg:mt-20", children: [_jsxs("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-white", children: [_jsx("span", { className: "text-orange-500", children: "Tech" }), "nologies"] }), _jsx("div", { className: "border-t-2 border-orange-500 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto" }), _jsx("div", { ref: scrollRef, className: "overflow-x-scroll whitespace-nowrap no-scrollbar", children: _jsx("div", { className: "flex space-x-4 sm:space-x-6 md:space-x-8 px-2 sm:px-4 py-2", children: skills.map((skill) => (_jsxs("div", { className: "flex-shrink-0 w-48 sm:w-52 md:w-56 h-56 sm:h-60 md:h-64 flex flex-col items-center justify-center text-center p-4 sm:p-5 md:p-6 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg rounded-xl transform transition duration-500 hover:scale-110 active:scale-95 hover:shadow-2xl", children: [_jsx("img", { src: skill.logo, alt: `${skill.name} logo`, className: "w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 mb-3 sm:mb-4 object-contain", loading: "lazy" }), _jsx("h2", { className: "text-xl sm:text-2xl font-bold text-white break-words", children: skill.name })] }, skill.name))) }) }), _jsx("div", { className: "border-t-2 border-orange-500 mt-8 sm:mt-10 md:mt-12 max-w-4xl mx-auto" })] }));
};
export default SkillsGrid;
//# sourceMappingURL=SkillsGrid.js.map