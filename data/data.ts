import { IconType } from "react-icons";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiGithub,
  SiLinkedin,
  SiMaildotru,
  SiNextdotjs,
  SiPython,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export interface Social {
  id: number;
  name: string;
  icon: IconType;
  url: string;
}

export const socials: Social[] = [
  {
    id: 1,
    name: "Email",
    icon: SiMaildotru,
    url: "mvahaste@proton.me",
  },
  {
    id: 2,
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com/mvahaste",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: SiLinkedin,
    url: "https://www.linkedin.com/in/mvahaste",
  },
];

export interface Skill {
  id: number;
  name: string;
  icon: IconType;
}

export const skills: Skill[] = [
  {
    id: 1,
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    id: 2,
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    id: 3,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    id: 4,
    name: "Java",
    icon: FaJava,
  },
  {
    id: 5,
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
  },
  {
    id: 6,
    name: "Supabase",
    icon: SiSupabase,
  },
  {
    id: 7,
    name: "Python",
    icon: SiPython,
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  url?: string;
  source?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Linkbook",
    description:
      "A lightweight link bookmarking web app that helps you organize and save important links, with support for metadata autofill and custom tags.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase"],
    url: "https://linkbook.mvahaste.dev",
    source: "https://github.com/mvahaste/linkbook",
  },
  {
    id: 2,
    title: "Chirp",
    description:
      "A simple Twitter clone built to explore and learn Supabase. Features include creating posts, liking and replying to posts, following users, and editing profiles.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase"],
    url: "https://chirp.mvahaste.dev",
    source: "https://github.com/mvahaste/chirp",
  },
  {
    id: 3,
    title: "Unit CI Testing",
    description:
      "A simple FastAPI-based application designed to manage a todo list, created with the goal of learning FastAPI, unit testing with pytest, and GitHub Actions for continuous integration.",
    stack: ["Python", "GitHub Actions"],
    source: "https://github.com/mvahaste/unit-ci-testing",
  },
  {
    id: 4,
    title: "VSCode Vim",
    description:
      "A step-by-step guide for configuring VS Code to replicate the minimal and efficient workflow of Vim. Created as a personal project before fully transitioning to Vim",
    stack: ["CSS", "Markdown"],
    source: "https://github.com/mvahaste/vscode-vim",
  },
];
