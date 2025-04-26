import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';
import relativeLinks from 'astro-relative-links';
// import typograf from 'astro-typograf';

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
  integrations: [
    // typograf({
    //   selector: 'p, a, h1, h2, h3, div, span',
    // }),
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
  // Docs for responsiveImages https://docs.astro.build/en/reference/experimental-flags/responsive-images/
  // image: {
  //   experimentalLayout: 'responsive',
  // },
  experimental: {
    //   contentLayer: true,
    responsiveImages: true,
    svg: true,
    preserveScriptOrder: true,
  },
});
