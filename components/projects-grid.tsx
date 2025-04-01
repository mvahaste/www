import { Project, projects } from "@/data/data";
import * as motion from "motion/react-client";
import ProjectCard from "./project-card";

export default function ProjectsGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      {projects.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
}
