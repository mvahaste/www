import { Project, projects } from "@/data/data";
import ProjectCard from "./project-card";

export default function ProjectsGrid() {
  return (
    <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
