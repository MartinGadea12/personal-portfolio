// app/routes/_index.tsx
import { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import SkillsGrid from "~/components/SkillsGrid";
import ProjectPortfolio from "~/components/ProjectPortfolio";
import WorkExperience from "~/components/WorkExperience";
import Contact from "~/components/Contact";
import Navbar from "~/components/Navbar";

export const meta: MetaFunction = () => {
  return {
    title: "New Remix App",
    description: "Welcome to Remix!",
  };
};

export default function Index() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <SkillsGrid />
      <WorkExperience />
      <ProjectPortfolio />
      <Contact />
    </div>
  );
}
