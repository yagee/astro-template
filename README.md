# Astro Template

![wakatime](https://wakatime.com/badge/user/49414914-9ef6-458a-b15c-feb527a44bbd/project/c1c4391f-b706-4972-a1be-87113ebf8625.svg?style=flat-square 'Wakatime')

This is an Astro template project that provides a starting point for building websites using the Astro framework. The template includes various configurations and tools to help developers get started quickly.

## Main Function Points

- Provides a pre-configured Astro project with common settings and dependencies
- Uses `astro-capo` for managing meta tags and SEO
- Adds a sitemap for better search engine optimization
- Includes Prettier and ESLint for code formatting and linting

## Technology Stack

- Astro: A static site generator for building fast and content-focused websites
- astro-capo: A library for managing HTML head tags, including meta tags and SEO
- Prettier: A code formatter for maintaining consistent code style
- ESLint: A linter for identifying and fixing problems in JavaScript code

## Commands

| Command              | Action                                        |
| :------------------- | :-------------------------------------------- |
| `bun install`        | Installs dependencies                         |
| `bun run dev`        | Starts local dev server at `localhost:4321`   |
| `bun run build`      | Checks types and builds the site to `./dist/` |
| `bun run preview`    | Previews the production build locally         |
| `bun run astro sync` | Generates TypeScript types for Astro modules  |
| `bun run format`     | Formats code with Biome and Prettier          |
| `bun run lint`       | Lints with ESLint                             |

## Upgrade

```sh
bunx @astrojs/upgrade
```
