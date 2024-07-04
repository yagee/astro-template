# Astro Template

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
