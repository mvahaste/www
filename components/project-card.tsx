import { Project } from "@/data/data";
import { LucideGithub, LucideGlobe } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import * as motion from "motion/react-client";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="bg-card text-card-foreground flex flex-col gap-1 rounded-xl border p-6 text-sm"
    >
      {/* Project image */}
      <>
        {project.image.light && project.image.dark ? (
          <>
            {/* Light theme image */}
            <Image
              className="mb-2 aspect-[16/9] h-auto w-full rounded-sm object-cover dark:hidden"
              width={500}
              height={300}
              src={project.image.light}
              alt="Project thumbnail (light)"
            />

            {/* Dark theme image */}
            <Image
              className="mb-2 hidden aspect-[16/9] h-auto w-full rounded-sm object-cover dark:block"
              width={500}
              height={300}
              src={project.image.dark}
              alt="Project thumbnail (dark)"
            />
          </>
        ) : (
          // Fallback, use whichever image is available
          <Image
            className="mb-2 aspect-[16/9] h-auto w-full rounded-sm object-cover"
            width={500}
            height={300}
            src={(project.image.light || project.image.dark)!}
            alt="Project thumbnail"
          />
        )}
      </>
      <h3 className="text-base font-semibold">{project.title}</h3>
      <p>{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((s: string) => (
          <span
            key={s}
            className="bg-muted rounded-full px-2 py-1 text-xs font-semibold"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="mt-4 grid flex-grow grid-cols-2 items-end gap-4">
        <Button asChild disabled={!project.url}>
          <a
            href={project.url}
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
            href={project.source}
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
