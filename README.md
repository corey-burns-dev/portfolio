# Corey Burns - Portfolio

[![Work in Progress](https://img.shields.io/badge/status-work%20in%20progress-orange.svg)](https://github.com/corey-burns-dev/portfolio)

A modern, responsive portfolio website built with Astro, Tailwind CSS, and TypeScript. This project
showcases my work, skills, and experience as a developer.

> 🚧 **This portfolio is currently under active development** - Features and content are being added
> regularly!

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Code Quality**: ESLint + Prettier with Husky pre-commit hooks

## 📁 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/          # Images, icons, and other static assets
│   ├── components/      # Reusable Astro components
│   ├── data/           # Static data files (JSON, etc.)
│   ├── layouts/        # Page layout components
│   ├── pages/          # Route pages
│   └── styles/         # Global styles and CSS
├── .husky/             # Git hooks
├── .vscode/            # VS Code settings
└── astro.config.mjs    # Astro configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/corey-burns-dev/portfolio.git
cd portfolio

# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

Visit `http://localhost:4321` to see the site.

### Build for Production

```bash
# Build the site
pnpm build

# Preview the production build
pnpm preview
```

## 🧞 Commands

All commands are run from the root of the project:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `pnpm dev`          | Starts local dev server at `localhost:4321`      |
| `pnpm build`        | Build your production site to `./dist/`          |
| `pnpm preview`      | Preview your build locally, before deploying     |
| `pnpm lint`         | Run ESLint to check for code issues              |
| `pnpm lint:fix`     | Run ESLint and automatically fix issues          |
| `pnpm format`       | Format all files with Prettier                   |
| `pnpm format:check` | Check if files are properly formatted            |
| `pnpm astro ...`    | Run CLI commands like `astro add`, `astro check` |

## 🔍 Code Quality

This project uses ESLint and Prettier for code linting and formatting. These tools run automatically
before each commit thanks to Husky and lint-staged.

### Automatic Quality Checks

- **Pre-commit hooks**: ESLint and Prettier run automatically on staged files before each commit
- **File types checked**:
  - JavaScript/TypeScript/Astro files: ESLint + Prettier
  - JSON/CSS/Markdown/YAML files: Prettier only

### Manual Quality Commands

```bash
# Check for linting issues
pnpm lint

# Fix linting issues automatically
pnpm lint:fix

# Format all files
pnpm format

# Check if files are properly formatted
pnpm format:check
```

### Configuration

- **ESLint**: Configured in `eslint.config.mjs` with Astro support
- **Prettier**: Configured in `.prettierrc` with Astro plugin
- **Husky**: Git hooks in `.husky/`
- **lint-staged**: File-specific commands in `package.json`

## 🐳 Docker Support

This project includes Docker support for both development and production environments.

### Development with Docker

```bash
# Start development server with hot-reload
pnpm docker:dev
```

The dev server will be available at `http://localhost:4321` with live reloading.

### Production with Docker

```bash
# Build and run production container
pnpm docker:prod
```

The production site will be available at `http://localhost:8080` served by Nginx.

## 📝 Features (Work in Progress)

- [ ] Responsive design with Tailwind CSS
- [ ] Dark/light mode toggle
- [ ] Font switching (IBM Plex Sans & Clash Display)
- [x] ESLint + Prettier with pre-commit hooks
- [ ] Projects showcase
- [ ] Blog posts
- [ ] Contact form
- [ ] Performance optimizations
- [ ] SEO enhancements

## 🤝 Contributing

This is a personal portfolio project, but feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is private and personal.

## 📞 Contact

### Corey Burns

- GitHub: [@corey-burns-dev](https://github.com/corey-burns-dev)
- LinkedIn: [Your LinkedIn Profile]
- Email: <vucp9bf5g@mozmail.com>

---

Built with ❤️ using Astro and Tailwind CSS\_
