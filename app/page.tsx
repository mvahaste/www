import { MDXRemote } from "next-mdx-remote/rsc";
import * as motion from "motion/react-client";
import fs from "fs";
import WaveEmoji from "@/components/wave-emoji";

function SocialLinks() {
  return <p>TODO: Create SocialLinks component</p>;
}

function ProjectsGrid() {
  return <p>TODO: Create ProjectsGrid component</p>;
}

function SkillsList() {
  return <p>TODO: Create SkillsList component</p>;
}

const components = {
  WaveEmoji,
  SocialLinks,
  ProjectsGrid,
  SkillsList,
  h2: (props: any) => {
    return (
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="text-xl font-bold"
      >
        {props.children}
      </motion.h2>
    );
  },
  p: (props: any) => {
    return (
      <motion.p
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        {props.children}
      </motion.p>
    );
  },
};

export default async function HomePage() {
  const source = fs.readFileSync("data/content.md", "utf8");

  return (
    <div className="wrapper">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
