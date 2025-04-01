import { MDXRemote } from "next-mdx-remote/rsc";
import * as motion from "motion/react-client";
import fs from "fs";
import WaveEmoji from "@/components/wave-emoji";
import { Lora } from "next/font/google";
import Socials from "@/components/socials";
import ProjectsGrid from "@/components/projects-grid";
import SkillsList from "@/components/skills-list";

const lora = Lora({
  subsets: ["latin"],
  weight: "variable",
});

const components = {
  WaveEmoji,
  Socials,
  ProjectsGrid,
  SkillsList,
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  h2: (props: any) => {
    return (
      <motion.h2
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
        viewport={{ once: true }}
        className={`${lora.className} mt-6 scroll-m-20 pb-2 text-2xl font-bold tracking-tight first:mt-0`}
      >
        {props.children}
      </motion.h2>
    );
  },
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  p: (props: any) => {
    return (
      <motion.p
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
        viewport={{ once: true }}
        className="mb-3 leading-7 last:mb-0"
      >
        {props.children}
      </motion.p>
    );
  },
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  strong: (props: any) => (
    <span className="font-semibold">{props.children}</span>
  ),
};

export default async function HomePage() {
  const source = fs.readFileSync("data/content.md", "utf8");

  return (
    <div>
      <MDXRemote source={source} components={components} />
    </div>
  );
}
