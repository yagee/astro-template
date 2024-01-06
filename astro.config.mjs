import { defineConfig } from 'astro/config';

import compress from 'astro-compress';
import relativeLinks from 'astro-relative-links';
import typograf from 'astro-typograf';

const terserOptions = {
  compress: false,
  mangle: false,
  output: {
    comments: false,
  },
};

// https://astro.build/config
export default defineConfig({
  integrations: [
    typograf('p, h1, h2, h3, div, span'),
    relativeLinks(),
    compress({
      HTML: {
        'html-minifier-terser': {
          collapseBooleanAttributes: true,
          // collapseWhitespace: true,
          // sortAttributes: true,
          // removeEmptyAttributes: true,
          removeAttributeQuotes: false,
          minifyJS: terserOptions,
          minifyCSS: false,
        },
      },
      JavaScript: terserOptions,
      SVG: {
        svgo: {
          plugins: [
            {
              inlineStyles: false,
            },
          ],
        },
      },
    }),
  ],
});
