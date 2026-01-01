import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaFire } from 'react-icons/fa';
const experiences = [
    {
        company: 'DaiOff',
        position: 'Full Stack Developer & AI Engineer',
        duration: 'June 2023 - Present',
        description: 'Leading the development of an AI-powered legal labor advisory platform that revolutionizes how law firms and labor unions handle legal processes. Architected and implemented RAG (Retrieval-Augmented Generation) systems using embeddings and vector databases for intelligent case analysis. Built multi-agent workflows using n8n to automate document drafting, legal research, and case management. The platform leverages advanced NLP and machine learning to provide real-time legal insights, resulting in significant time savings and improved accuracy for legal professionals. Technologies: TypeScript, Remix, PostgreSQL, AI/ML, RAG systems, embeddings, n8n, multi-agent architectures.'
    },
    {
        company: 'Team Gravitad',
        position: 'Front-End Developer',
        duration: 'December 2022 - June 2023',
        description: 'Developed high-performance user interfaces for an advanced cryptocurrency trading platform. Focused on creating intuitive, responsive designs using React and TypeScript. Collaborated with cross-functional teams to implement complex data visualization features, real-time price updates, and interactive trading interfaces. Contributed to improving user experience and platform performance through code optimization and modern development practices.'
    },
    {
        company: 'Packar',
        position: 'Front-End Mobile Developer',
        duration: 'February 2021 - June 2022',
        description: 'Developed a cross-platform mobile application for package delivery services using TypeScript, React Native, and Expo. Implemented responsive designs and optimized performance to ensure smooth user experience across iOS and Android devices. Collaborated with designers and backend developers to integrate new features and improve user engagement, resulting in a 20% increase in active users.'
    },
];
const WorkExperience = () => {
    return (_jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-12 sm:mt-16 lg:mt-20", children: [_jsxs("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-white", children: [_jsx("span", { className: "text-orange-500", children: "Work" }), " Experience"] }), _jsx("div", { className: "border-t-2 border-orange-500 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12" }), _jsx("div", { className: "space-y-4 sm:space-y-5 md:space-y-6", children: experiences.map((experience, index) => (_jsxs("div", { className: "p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg rounded-lg transform transition duration-500 hover:scale-[1.02] hover:shadow-xl", children: [_jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-2", children: [_jsx(FaFire, { className: "text-orange-500 mr-2 mb-2 sm:mb-0 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" }), _jsx("h2", { className: "text-xl sm:text-2xl md:text-3xl font-semibold text-white", children: experience.position })] }), _jsx("h3", { className: "text-lg sm:text-xl md:text-2xl font-bold text-orange-500 mb-1 sm:mb-2", children: experience.company }), _jsx("p", { className: "text-sm sm:text-base text-gray-400 mb-3 sm:mb-4", children: experience.duration }), _jsx("p", { className: "text-sm sm:text-base md:text-lg text-white leading-relaxed", children: experience.description })] }, index))) }), _jsx("div", { className: "border-t-2 border-orange-500 max-w-4xl mx-auto mt-8 sm:mt-10 md:mt-12" })] }));
};
export default WorkExperience;
//# sourceMappingURL=WorkExperience.js.map