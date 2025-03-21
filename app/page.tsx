import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Project, projects, Skill, skills, Social, socials } from "@/data/data";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      {/* About Me */}
      <h2 className="mb-2 text-2xl font-bold">Hi, I{"'"}m Mikk 👋</h2>
      <p>
        I{"'"}m a 22-year-old student at the University of Tartu, currently in
        my second year. I{"'"}ve always been into computers and programming, I
        first started messing around with python and quickly got hooked on web
        development, doing both front and back-end, with a larger focus on the
        former.
      </p>
      {/* Contact */}
      <h2 className="mt-8 mb-2 text-2xl font-bold">Contact 📫</h2>
      <p className="flex flex-wrap gap-1">
        Let{"'"}s get in touch, email me at{" "}
        <span className="font-medium">mvahaste@proton.me</span>!
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {socials.map((social: Social) => {
          const Icon = social.icon;

          return (
            <Button key={social.id} asChild>
              <a
                className="flex items-center gap-2"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
                {social.name}
              </a>
            </Button>
          );
        })}
      </div>
      {/* Projects */}
      <h2 className="mt-8 text-2xl font-bold">Projects 🚀</h2>
      <p>
        Some of my projects, unfortunately some of the source code is private.
      </p>
      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {/* Skills / Technologies */}
      <h2 className="mt-8 text-2xl font-bold">Skills 🎨</h2>
      <p>Some of the languages I know and technologies I use.</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {skills.map((skill: Skill) => {
          const Icon = skill.icon;

          return (
            <span
              key={skill.id}
              className="bg-card flex flex-row items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
            >
              <Icon />
              {skill.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
