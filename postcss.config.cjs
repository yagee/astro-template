module.exports = {
  plugins: [
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-media-minmax'),
    require('postcss-sort-media-queries'),
    require('cssnano'),
  ],
};
