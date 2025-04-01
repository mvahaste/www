import { Skill, skills } from "@/data/data";
import * as motion from "motion/react-client";

export default function SkillsList() {
  return (
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
  );
}
