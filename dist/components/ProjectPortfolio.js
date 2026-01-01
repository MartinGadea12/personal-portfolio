import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const projects = [
    {
        title: "DaiOff",
        description: "AI-powered legal labor advisory platform built with RAG systems, embeddings, and vector databases. Implements multi-agent workflows using n8n for automated case analysis, intelligent document generation, and real-time legal insights. Leverages advanced NLP and machine learning to provide accurate legal guidance for law firms and labor unions.",
        technologies: "TYPESCRIPT, REMIX, POSTGRESQL, RAG, EMBEDDINGS, N8N, AI",
        images: ["/assets/images/daioffLanding.png", "/assets/images/daioff.png"],
        deploy: "https://dev-app.daioff.com/",
        code: "",
    },
    {
        title: "Arkia",
        description: "Building portfolio management platform for real estate buildings with AI-powered features. Implementing RAG systems and embeddings for intelligent property data analysis, automated reporting, and predictive maintenance insights. Using multi-agent architectures with n8n to streamline workflows and enhance decision-making for property management.",
        technologies: "TYPESCRIPT, REMIX, POSTGRESQL, RAG, EMBEDDINGS, N8N, AI",
        images: ["/assets/images/inprogress.png"],
        deploy: "",
        code: "",
    },
    {
        title: "Jarvis",
        description: "AI-powered marketing advisor platform that helps businesses optimize their digital strategies. Features intelligent content suggestions, automated campaign analysis, and real-time performance insights. Built with modern AI technologies to enhance marketing decision-making and workflow automation.",
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
        title: "Cryptocurrency Dashboard",
        description: "Advanced cryptocurrency analytics platform featuring real-time data visualization. Includes tables for top cryptocurrencies by volume, trending tokens, and earlybird coins with comprehensive performance metrics. Built with modern web technologies for fast, responsive user experience.",
        technologies: "TYPESCRIPT, REMIX, TAILWIND, D3.JS",
        images: ["/assets/images/dashboard.jpg"],
        deploy: "https://cryptoghost.fly.dev/dashboard/volume-coins",
        code: "",
    },
    {
        title: "Crypto Bubbles",
        description: "Interactive cryptocurrency visualization built with D3.js. Features animated bubbles that represent different cryptocurrencies, with physics-based movement, collision detection, and interactive navigation. Clicking on bubbles navigates to detailed cryptocurrency information.",
        technologies: "TYPESCRIPT, REMIX, D3.JS, DATA VISUALIZATION",
        images: ["/assets/images/bubbles2.png"],
        deploy: "https://cryptoghost.fly.dev/dashboard/bubbles",
        code: "",
    },
    {
        title: "Cryptocurrency Landing Page",
        description: "Professional landing page for an onchain data platform. Features a sleek dark-themed design with modern UI components, emphasizing the platform's reliability and expertise in blockchain data analytics.",
        technologies: "TYPESCRIPT, REMIX, TAILWIND, ACETERNITY",
        images: [
            "/assets/images/landingPage.png",
            "/assets/images/langingPage2.png",
        ],
        deploy: "https://cryptoghost.fly.dev/",
        code: "",
    },
    {
        title: 'E-Commerce "Sneakers"',
        description: "Modern e-commerce platform for imported sneakers with integrated payment processing (PayPal and Stripe) and email notifications via Nodemailer. Features responsive design, shopping cart functionality, and secure checkout process.",
        technologies: "TYPESCRIPT, REACT, REDUX, BOOTSTRAP, STRIPE",
        images: ["/assets/images/sneakers.png"],
        deploy: "https://snykers.vercel.app/",
        code: "https://github.com/snYKersCompany/shoes-eComerce",
    },
    {
        title: 'Mobile App "Packar"',
        description: "Cross-platform mobile application for package delivery services. Developed with React Native and Expo, featuring real-time tracking, user notifications, and intuitive package management interface.",
        technologies: "TYPESCRIPT, REACT NATIVE, EXPO GO",
        images: ["/assets/images/packar.png"],
        deploy: "",
        code: "",
    },
    {
        title: "Personal Portfolio",
        description: "Professional portfolio website showcasing projects and technical skills. Built with modern web technologies including React, Remix, and Tailwind CSS. Features responsive design, smooth animations, and optimized performance.",
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
const ProjectPortfolio = () => {
    return (_jsxs("div", { className: "mx-auto mb-32 sm:mb-40 md:mb-48 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-12 sm:mt-16 lg:mt-20", children: [_jsxs("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4 sm:mb-6 md:mb-7", children: [_jsx("span", { className: "text-orange-500", children: "Pro" }), "jects"] }), _jsx("div", { className: "border-t-2 border-orange-500 max-w-4xl mx-auto mb-8 sm:mb-10" }), _jsx("div", { className: "max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6", children: projects.map((project, index) => (_jsxs(motion.div, { className: "bg-gray-900 text-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:scale-[1.02] active:scale-[0.98] flex flex-col", children: [_jsx(ImageCarousel, { images: project.images || [] }), _jsxs("div", { className: "p-4 sm:p-5 md:p-6 flex flex-col flex-grow", children: [_jsx("h2", { className: "text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3", children: project.title }), _jsx("p", { className: "text-xs sm:text-sm text-orange-400 font-medium mb-2 sm:mb-3 uppercase tracking-wide leading-tight", children: project.technologies }), _jsx("p", { className: "text-sm sm:text-base text-gray-300 mb-4 sm:mb-5 flex-grow line-clamp-4", children: project.description }), _jsxs("div", { className: "mt-auto flex flex-col sm:flex-row gap-2 sm:gap-3", children: [project.deploy && (_jsx("a", { href: project.deploy, target: "_blank", rel: "noopener noreferrer", className: "bg-blue-600 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 sm:py-2.5 rounded-md hover:bg-blue-700 active:bg-blue-800 transition w-full text-center", children: "Deploy" })), project.code && (_jsx("a", { href: project.code, target: "_blank", rel: "noopener noreferrer", className: "bg-gray-700 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 sm:py-2.5 rounded-md hover:bg-gray-600 active:bg-gray-500 transition w-full text-center", children: "Code" }))] })] })] }, index))) }), _jsx("div", { className: "border-t-2 border-orange-500 max-w-4xl mx-auto mt-12 sm:mt-16 md:mt-20" })] }));
};
const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if (images.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [images.length]);
    if (images.length === 0) {
        return (_jsx("div", { className: "relative w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-t-lg overflow-hidden bg-gray-800 flex items-center justify-center", children: _jsx("p", { className: "text-gray-500 text-sm", children: "No image available" }) }));
    }
    return (_jsxs("div", { className: "relative w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-t-lg overflow-hidden", children: [_jsx(AnimatePresence, { initial: false, mode: "wait", children: images.map((image, index) => index === currentIndex && (_jsx(motion.img, { src: image, alt: `Project Image ${index + 1}`, className: "absolute w-full h-full object-cover top-0 left-0", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.5 }, loading: "lazy" }, image))) }), images.length > 1 && (_jsx("div", { className: "absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5", children: images.map((_, index) => (_jsx("div", { className: `w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-500'}` }, index))) }))] }));
};
export default ProjectPortfolio;
//# sourceMappingURL=ProjectPortfolio.js.map