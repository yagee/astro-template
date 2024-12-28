# Astro Template

![wakatime](https://wakatime.com/badge/user/49414914-9ef6-458a-b15c-feb527a44bbd/project/c1c4391f-b706-4972-a1be-87113ebf8625.svg?style=flat-square 'Wakatime')

This is an Astro template project that provides a starting point for building websites using the Astro framework. The template includes various configurations and tools to help developers get started quickly.

## Main Function Points

- Provides a pre-configured Astro project with common settings and dependencies
- Includes integration with Helmet for managing meta tags and SEO
- Adds a sitemap and robots.txt file for better search engine optimization
- Optimizes the build process using Jampack for improved performance
- Includes Prettier and ESLint for code formatting and linting
- Supports deployment to Netlify with a pre-configured Netlify configuration file

## Technology Stack

- Astro: A static site generator for building fast and content-focused websites
- Helmet: A library for managing HTML head tags, including meta tags and SEO
- Jampack: A tool for optimizing Astro builds for better performance
- Prettier: A code formatter for maintaining consistent code style
- ESLint: A linter for identifying and fixing problems in JavaScript code

## Commands

| Command             | Action                                            |
| :------------------ | :------------------------------------------------ |
| `pnpm i`            | Installs dependencies                             |
| `pnpm dev`          | Starts local dev server at `localhost:4321`       |
| `pnpm build`        | Build your production site to `./dist/`           |
| `pnpm preview`      | Preview your build locally, before deploying      |
| `pnpm optimize`     | Optimize build with Jampack                       |
| `pnpm sync`         | Generates TypeScript types for all Astro modules. |
| `pnpm prettier`     | Check code format with Prettier                   |
| `pnpm prettier:fix` | Format codes with Prettier                        |
| `pnpm lint`         | Lint with ESLint                                  |

## Upgrade

```sh
pnpm dlx @astrojs/upgrade
```

## Deploy

```sh
netlify deploy --prod -d dist
```
