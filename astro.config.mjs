import { defineConfig } from 'astro/config';

import compress from 'astro-compress';
import relativeLinks from 'astro-relative-links';
import typograf from 'astro-typograf';

// https://astro.build/config
export default defineConfig({
  integrations: [
    typograf('p, h1, h2, h3, div, span'),
    relativeLinks(),
    compress(),
  ],
});
