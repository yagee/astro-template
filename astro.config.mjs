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
  build: {
    // inlineStylesheets: 'never',
  },
  integrations: [
    typograf({
      selector: 'p, a, h1, h2, h3, div, span',
    }),
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
          minifyCSS: {
            level: 2,
          },
        },
      },
      CSS: {
        csso: {
          forceMediaMerge: true, // don't work because styles are inlined
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
