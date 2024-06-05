// app/routes/_index.tsx
import Hero from "~/components/Hero";
import SkillsGrid from "~/components/SkillsGrid";
import ProjectPortfolio from "~/components/ProjectPortfolio";
import WorkExperience from "~/components/WorkExperience";
import Contact from "~/components/Contact";
import Navbar from "~/components/Navbar";


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
