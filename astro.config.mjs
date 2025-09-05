import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';
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
  site: 'https://yagee-astro-template.netlify.app/',
  devToolbar: {
    enabled: false,
  },
  build: {
    // inlineStylesheets: 'never',
  },
  image: {
    responsiveStyles: true,
  },
  integrations: [
    typograf({
      selector: 'p, a, h1, h2, h3, div, span',
      typografOptions: {
        locale: ['ru', 'en-US'],
        htmlEntity: { type: 'name' },
      },
      typografSettings: {
        'common/nbsp/afterShortWord': { lengthShortWord: 3 },
      },
    }),
    relativeLinks(),
    compress({
      CSS: {
        csso: {
          forceMediaMerge: true, // don't work because styles are inlined
        },
      },
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
      Image: import.meta.env.PROD,
      // shows true or false
      JavaScript: { terser: terserOptions },
      SVG: {
        svgo: {
          // plugins: [
          //   {
          //     inlineStyles: false,
          //   },
          // ],
        },
      },
    }),
    sitemap(),
    // removeOriginalImages(),
  ],
  experimental: {
    preserveScriptOrder: true,
  },
});
