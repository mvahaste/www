import { Project } from "@/data/data";
import { LucideCodeXml, LucideExternalLink } from "lucide-react";
import * as motion from "motion/react-client";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: "variable",
});

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
      className="bg-card dark:bg-card/50 text-card-foreground flex flex-col gap-2 overflow-hidden rounded-xl border text-sm"
    >
      <div className="flex flex-col gap-2 p-6 pb-0">
        <h3 className={`${lora.className} text-base font-bold`}>
          {project.title}
        </h3>
        <p>{project.description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.stack.map((s: string) => (
            <span
              key={s}
              className="bg-muted dark:bg-muted/25 text-muted-foreground rounded-full px-2.5 py-1 text-xs font-semibold"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-muted dark:bg-muted/25 text-muted-foreground mt-3 flex justify-between gap-4 border-t px-6 py-4 font-medium">
        <a
          href={project.source ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`${!project.source ? "pointer-events-none opacity-50" : "hover:text-foreground transition-colors duration-150 hover:underline"} flex items-center gap-2`}
        >
          <LucideCodeXml size={16} />
          Source
        </a>
        <a
          href={project.url ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`${!project.url ? "pointer-events-none opacity-50" : "hover:text-foreground transition-colors duration-150 hover:underline"} flex items-center gap-2`}
        >
          <LucideExternalLink size={16} />
          Live
        </a>
      </div>
    </motion.div>
  );
}
