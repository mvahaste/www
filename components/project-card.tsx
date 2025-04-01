import { Project } from "@/data/data";
import { LucideGithub, LucideGlobe } from "lucide-react";
import { Button } from "./ui/button";
import * as motion from "motion/react-client";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // const projectImage = () => {
  //   const imageProps = {
  //     width: 500,
  //     height: 300,
  //     alt: "Project thumbnail",
  //   };
  //
  //   const className = "aspect-[16/9] h-auto w-full object-cover";
  //
  //   // If both light and dark images are provided, use the appropriate one based on the theme
  //   if (project.image?.light && project.image?.dark) {
  //     return (
  //       <>
  //         <Image
  //           className={`${className} dark:hidden`}
  //           src={project.image.light}
  //           {...imageProps}
  //         />
  //         <Image
  //           className={`${className} hidden dark:block`}
  //           src={project.image.dark}
  //           {...imageProps}
  //         />
  //       </>
  //     );
  //   }
  //
  //   // If only one image is provided, use whichever is available
  //   return (
  //     <Image
  //       className={className}
  //       src={(project.image?.light || project.image?.dark)!}
  //       {...imageProps}
  //     />
  //   );
  // };

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="bg-card text-card-foreground flex flex-col gap-2 rounded-xl border p-6 text-sm"
    >
      {/* {project.image && ( */}
      {/*   <div className="mb-2 aspect-[16/9] overflow-hidden rounded-md border"> */}
      {/*     {projectImage()} */}
      {/*   </div> */}
      {/* )} */}
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
