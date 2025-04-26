import type { APIRoute } from 'astro';

const now = new Date();

console.log(now);

const robotsTxt = `
/* TEAM */
  Front-end: Roman Ryzhikov
  Email: astro@yagee.ru
  Twitter: napilsya
  Location: Kaliningrad, Russia

/* SITE */
  Last update: ${now.toLocaleDateString('ru-RU')}
  Standards: HTML5, CSS3, ES2021
  Components: Astro, Postcss, Utopia
  Software: Windows, WSL, Ubuntu, Figma, VS Code, pnpm, Prettier, ESLint
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
