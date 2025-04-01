import { Project } from "@/data/data";
import { LucideGithub, LucideGlobe } from "lucide-react";
import { Button } from "./ui/button";
import * as motion from "motion/react-client";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      key={project.id}
      variants={{
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
      }}
      className="bg-card dark:bg-card/50 text-card-foreground flex flex-col gap-2 rounded-xl border p-6 text-sm"
    >
      <h3 className="text-base font-bold">{project.title}</h3>
      <p>{project.description}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {project.stack.map((s: string) => (
          <span
            key={s}
            className="bg-muted text-muted-foreground rounded-full px-2.5 py-1 text-xs font-semibold"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="mt-3 grid flex-grow grid-cols-2 items-end gap-4">
        <Button asChild disabled={!project.url}>
          <a
            href={project.url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`${!project.url ? "pointer-events-none opacity-50" : ""} flex items-center gap-2`}
          >
            <LucideGlobe />
            Live
          </a>
        </Button>
        <Button asChild disabled={!project.source}>
          <a
            href={project.source ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`${!project.source ? "pointer-events-none opacity-50" : ""} flex items-center gap-2`}
          >
            <LucideGithub />
            Source
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
