import EmailButton from "@/components/email-button";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Project, projects, Skill, skills, Social, socials } from "@/data/data";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      {/* About Me */}
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="mb-2 text-xl font-bold"
      >
        Hi, I{"'"}m Mikk{" "}
        <motion.span
          animate={{
            rotate: [0, 20, -10, 20, -5, 0],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="inline-block origin-[70%_70%]"
        >
          👋
        </motion.span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        I{"'"}m a <span className="font-medium">22-year-old</span> student at
        the <span className="font-medium">University of Tartu</span>, currently
        in my second year, mainly focusing on{" "}
        <span className="font-medium">web development</span>. I{"'"}ve always
        been into computers and programming—I first started messing around with
        Python and quickly got hooked on web development, doing both front and
        back-end, with a larger focus on the former.
        <br />
        <br />
        Outside of coding, I enjoy playing video games—
        <span className="font-medium">ELDEN RING</span> and{" "}
        <span className="font-medium">Subnautica</span> are probably my
        favorites, followed by the rest of the{" "}
        <span className="font-medium">Souls</span> games. I also listen to a lot
        of music, hit the gym and occasionally read when I get the chance.
      </motion.p>
      {/* Contact */}
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="mt-8 mb-2 text-xl font-bold"
      >
        Contact
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        Let{"'"}s get in touch, email me at{" "}
        <span className="font-medium">mvahaste@proton.me</span>!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="mt-2 flex flex-wrap gap-2"
      >
        {socials.map((social: Social) => {
          if (social.name === "Email") {
            return <EmailButton key={social.id} email={social.url} />;
          }

          const Icon = social.icon;

          return (
            <Button key={social.id} asChild variant="secondary">
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
      </motion.div>
      {/* Projects */}
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="mt-8 text-xl font-bold"
      >
        Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        Some of my projects, unfortunately some of the source code is private.
      </motion.p>
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
      {/* Skills / Technologies */}
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="mt-8 text-xl font-bold"
      >
        Skills
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        Some of the languages I know and technologies I use.
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-2 flex flex-wrap gap-2"
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {skills.map((skill: Skill) => {
          const Icon = skill.icon;

          return (
            <motion.span
              key={skill.id}
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-card flex flex-row items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
            >
              <Icon />
              {skill.name}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
}
