import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Hero from "~/components/Hero";
import SkillsGrid from "~/components/SkillsGrid";
import ProjectPortfolio from "~/components/ProjectPortfolio";
import WorkExperience from "~/components/WorkExperience";
import Contact from "~/components/Contact";
import Navbar from "~/components/Navbar";
export const meta = () => {
    return [
        { title: "Martin Gadea - Full Stack Developer & AI Engineer" },
        {
            name: "description",
            content: "Full Stack Developer & AI Engineer specializing in RAG systems, embeddings, and multi-agent workflows. Building intelligent, scalable applications with AI-powered features."
        },
        {
            name: "keywords",
            content: "Full Stack Developer, AI Engineer, RAG systems, embeddings, n8n, multi-agent workflows, TypeScript, React, Remix, PostgreSQL, machine learning, NLP"
        },
        { property: "og:title", content: "Martin Gadea - Full Stack Developer & AI Engineer" },
        {
            property: "og:description",
            content: "Full Stack Developer & AI Engineer specializing in AI-powered applications, RAG systems, and intelligent automation."
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Martin Gadea - Full Stack Developer & AI Engineer" },
        {
            name: "twitter:description",
            content: "Full Stack Developer & AI Engineer specializing in AI-powered applications, RAG systems, and intelligent automation."
        },
    ];
};
export default function Index() {
    return (_jsxs("div", { className: "bg-black text-white", children: [_jsx(Navbar, {}), _jsx(Hero, {}), _jsx(SkillsGrid, {}), _jsx(WorkExperience, {}), _jsx(ProjectPortfolio, {}), _jsx(Contact, {})] }));
}
//# sourceMappingURL=_index.js.map