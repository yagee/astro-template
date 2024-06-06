module.exports = {
  plugins: [
    require('postcss-utopia'),
    require('postcss-import'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-media-minmax'),
    require('postcss-sort-media-queries'),
    require('postcss-combine-duplicated-selectors')(),
    // TODO: Check if this works
    // require('postcss-combine-media-query'),
    require('cssnano')({
      preset: [
        'advanced',
        {
          autoprefixer: false,
          reduceIdents: false,
          discardUnused: false,
          zindex: false,
        },
      ],
    }),
  ],
};
