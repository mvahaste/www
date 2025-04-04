import { Skill, skills } from "@/data/data";
import * as motion from "motion/react-client";

export default function SkillsList() {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {skills.map((skill: Skill) => {
        const Icon = skill.icon;

        return (
          <motion.span
            key={skill.id}
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
            className="bg-card flex flex-row items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
          >
            <Icon />
            {skill.name}
          </motion.span>
        );
      })}
    </div>
  );
}
