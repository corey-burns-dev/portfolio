# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to
[our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm lint`            | Run ESLint to check for code issues              |
| `pnpm lint:fix`        | Run ESLint and automatically fix issues          |
| `pnpm format`          | Format all files with Prettier                   |
| `pnpm format:check`    | Check if files are properly formatted            |
| `pnpm docker:dev`      | Run development server in Docker (port 4321)     |
| `pnpm docker:prod`     | Run production build in Docker (port 8080)       |
| `pnpm docker:build`    | Build Docker images                              |
| `pnpm docker:down`     | Stop and remove Docker containers                |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 🐳 Docker

This project includes Docker support for both development and production environments.

### Development with Docker

```sh
# Start development server with hot-reload
pnpm docker:dev

# Or use docker compose directly
docker compose up dev
```

The dev server will be available at `http://localhost:4321` with live reloading.

### Production with Docker

```sh
# Build and run production container
pnpm docker:prod

# Or use docker compose directly
docker compose up prod
```

The production site will be available at `http://localhost:8080` served by Nginx.

### Docker Commands

```sh
# Build images
docker compose build

# Stop containers
docker compose down

# View logs
docker compose logs -f

# Rebuild and restart
docker compose up --build
```

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our
[Discord server](https://astro.build/chat).
