import reactIcon from "../assets/icons/react-auto.svg";
import tsIcon from "../assets/icons/typescript.svg";
import jsIcon from "../assets/icons/javascript.svg";
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import tailwindIcon from "../assets/icons/tailwindcss-auto.svg";
import astroIcon from "../assets/icons/astro.svg";
import vueIcon from "../assets/icons/vuejs-auto.svg";
import svelteIcon from "../assets/icons/svelte.svg";
import nextjsIcon from "../assets/icons/nextjs-auto.svg";
import viteIcon from "../assets/icons/vite-auto.svg";
import reduxIcon from "../assets/icons/redux.svg";
import sassIcon from "../assets/icons/sass.svg";
import webpackIcon from "../assets/icons/webpack-auto.svg";
import svgIcon from "../assets/icons/svg-auto.svg";
import nodeIcon from "../assets/icons/nodejs-auto.svg";
import expressIcon from "../assets/icons/expressjs-auto.svg";
import graphqlIcon from "../assets/icons/graphql-auto.svg";
import postgresIcon from "../assets/icons/postgresql-auto.svg";
import mysqlIcon from "../assets/icons/mysql-auto.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import redisIcon from "../assets/icons/redis-auto.svg";
import pythonIcon from "../assets/icons/python-auto.svg";
import goIcon from "../assets/icons/golang.svg";
import phpIcon from "../assets/icons/php-auto.svg";
import laravelIcon from "../assets/icons/laravel-auto.svg";
import sqliteIcon from "../assets/icons/sqlite.svg";
import nginxIcon from "../assets/icons/nginx.svg";
import cloudflareIcon from "../assets/icons/cloudflare-auto.svg";
import linuxIcon from "../assets/icons/linux-auto.svg";
import dockerIcon from "../assets/icons/docker.svg";
import kubernetesIcon from "../assets/icons/kubernetes.svg";
import githubActionsIcon from "../assets/icons/githubactions-auto.svg";
import gitlabIcon from "../assets/icons/gitlab-auto.svg";
import awsIcon from "../assets/icons/aws-auto.svg";
import azureIcon from "../assets/icons/azure-auto.svg";
import gcpIcon from "../assets/icons/gcp-auto.svg";
import vercelIcon from "../assets/icons/vercel-auto.svg";
import netlifyIcon from "../assets/icons/netlify-auto.svg";
import terraformIcon from "../assets/icons/terraform-auto.svg";
import ansibleIcon from "../assets/icons/ansible.svg";
import bashIcon from "../assets/icons/bash-auto.svg";

export const techIcons = {
  react: reactIcon,
  ts: tsIcon,
  js: jsIcon,
  html: htmlIcon,
  css: cssIcon,
  tailwind: tailwindIcon,
  astro: astroIcon,
  vue: vueIcon,
  svelte: svelteIcon,
  nextjs: nextjsIcon,
  vite: viteIcon,
  redux: reduxIcon,
  sass: sassIcon,
  webpack: webpackIcon,
  svg: svgIcon,
  nodejs: nodeIcon,
  express: expressIcon,
  graphql: graphqlIcon,
  postgres: postgresIcon,
  mysql: mysqlIcon,
  mongodb: mongodbIcon,
  redis: redisIcon,
  python: pythonIcon,
  go: goIcon,
  php: phpIcon,
  laravel: laravelIcon,
  sqlite: sqliteIcon,
  nginx: nginxIcon,
  cloudflare: cloudflareIcon,
  linux: linuxIcon,
  docker: dockerIcon,
  kubernetes: kubernetesIcon,
  githubactions: githubActionsIcon,
  gitlab: gitlabIcon,
  aws: awsIcon,
  azure: azureIcon,
  gcp: gcpIcon,
  vercel: vercelIcon,
  netlify: netlifyIcon,
  terraform: terraformIcon,
  ansible: ansibleIcon,
  bash: bashIcon,
} as const;

export type TechIconKey = keyof typeof techIcons;
