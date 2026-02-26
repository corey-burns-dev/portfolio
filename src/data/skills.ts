import { type TechIconKey } from "./tech-icons";

export const developerInfo = {
  excerpt: [
    {
      text: "I build products end-to-end, from frontend UX to backend services, with a focus on performance and clarity.",
    },
    {
      text: "I like tight feedback loops, pragmatic architecture, and tooling that keeps teams moving fast.",
    },
    {
      text: "These are the tools I reach for most often, and the ones I keep sharp.",
    },
  ],
};

export const mySkills: Array<{ title: string; iconKeys: TechIconKey[] }> = [
  {
    title: "Frontend",
    iconKeys: [
      "react",
      "ts",
      "js",
      "html",
      "css",
      "tailwind",
      "astro",
      "vue",
      "svelte",
      "nextjs",
      "vite",
      "redux",
      "sass",
      "webpack",
      "svg",
    ],
  },
  {
    title: "Backend",
    iconKeys: [
      "nodejs",
      "express",
      "graphql",
      "postgres",
      "mysql",
      "mongodb",
      "redis",
      "python",
      "go",
      "php",
      "laravel",
      "sqlite",
      "nginx",
      "cloudflare",
      "linux",
    ],
  },
  {
    title: "DevOps",
    iconKeys: [
      "docker",
      "kubernetes",
      "githubactions",
      "gitlab",
      "aws",
      "azure",
      "gcp",
      "vercel",
      "netlify",
      "terraform",
      "ansible",
      "bash",
      "nginx",
      "linux",
      "cloudflare",
    ],
  },
];
