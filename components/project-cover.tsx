import Image from "next/image";
import { localize, type Locale, type Project } from "@/lib/profile";

type ProjectCoverProps = {
  project: Project;
  locale: Locale;
  sizes: string;
  priority?: boolean;
};

export function ProjectCover({
  project,
  locale,
  sizes,
  priority = false,
}: ProjectCoverProps) {
  if (project.imageFit !== "contain") {
    return (
      <Image
        src={project.image}
        alt={localize(project.imageAlt, locale)}
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain"
      />
    );
  }

  return (
    <Image
      src={project.image}
      alt={localize(project.imageAlt, locale)}
      fill
      priority={priority}
      sizes={sizes}
      className="object-contain p-4"
    />
  );
}
