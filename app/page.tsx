import ProjectsGrid from "@/components/projects-grid";
import SkillsList from "@/components/skills-list";
import Socials from "@/components/socials";
import WaveEmoji from "@/components/wave-emoji";
import fs from "fs";
import * as motion from "motion/react-client";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Lora } from "next/font/google";

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
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
        className={`${lora.className} mt-7 scroll-m-20 pb-2 text-2xl font-bold tracking-tight first:mt-0`}
      >
        {props.children}
      </motion.h2>
    );
  },
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  p: (props: any) => {
    return (
      <motion.p
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
        className="mb-3 leading-7 last:mb-0"
      >
        {props.children}
      </motion.p>
    );
  },
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  strong: (props: any) => (
    <span className="font-semibold antialiased">{props.children}</span>
  ),
};

export default async function HomePage() {
  const source = fs.readFileSync("data/content.md", "utf8");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.015 },
        },
      }}
    >
      <MDXRemote source={source} components={components} />
    </motion.div>
  );
}
