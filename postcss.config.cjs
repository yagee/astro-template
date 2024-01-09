module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-media-minmax'),
    require('postcss-sort-media-queries'),
    require('postcss-combine-duplicated-selectors')({
      removeDuplicatedProperties: true,
      removeDuplicatedValues: false,
    }),
    // require('postcss-combine-media-query'),
    require('cssnano')({
      preset: 'advanced',
      autoprefixer: false,
    }),
  ],
};
