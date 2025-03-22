import {
  LucideGithub,
  LucideIcon,
  LucideLinkedin,
  LucideMail,
} from "lucide-react";
import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export interface Social {
  id: number;
  name: string;
  icon: LucideIcon;
  url: string;
}

export const socials: Social[] = [
  {
    id: 1,
    name: "Email",
    icon: LucideMail,
    url: "mvahaste@proton.me",
  },
  {
    id: 2,
    name: "GitHub",
    icon: LucideGithub,
    url: "https://github.com/mvahaste",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: LucideLinkedin,
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
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    id: 2,
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    id: 3,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    id: 4,
    name: "Supabase",
    icon: SiSupabase,
  },
  {
    id: 5,
    name: "Python",
    icon: SiPython,
  },
  {
    id: 6,
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  image: {
    light?: string;
    dark?: string;
  };
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
    image: {
      light: "/images/projects/linkbook-light.png",
      dark: "/images/projects/linkbook-dark.png",
    },
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase"],
    url: "https://linkbook.mvahaste.dev",
    source: "https://github.com/mvahaste/linkbook",
  },
  {
    id: 2,
    title: "Chirp",
    description:
      "A simple Twitter clone built to explore and learn Supabase. Features include creating posts, liking and replying to posts, following users, and editing profiles.",
    image: {
      light: "/images/projects/chirp-light.png",
      dark: "/images/projects/chirp-dark.png",
    },
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase"],
    url: "https://chirp.mvahaste.dev",
    source: "https://github.com/mvahaste/chirp",
  },
  {
    id: 3,
    title: "Hansa Medical Tellimiskeskkond",
    description:
      "A web platform developed for Hansa Medical partners to conveniently order medical supplies and equipment, as well as review past orders and active contracts.",
    image: { light: "/images/projects/hansamedical-tellimiskeskkond.png" },
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    url: "https://tellimine.hansamedical.ee",
  },
  {
    id: 4,
    title: "Hansa Medical Uneravi",
    description:
      "An e-commerce website designed for individuals with sleep apnea to purchase CPAP machines and related accessories that support better sleep quality.",
    image: { light: "/images/projects/hansamedical-uneravi.png" },
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    url: "https://uneravi.hansamedical.ee",
  },
];
