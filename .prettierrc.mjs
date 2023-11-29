export default {
  $schema: 'https://json.schemastore.org/prettierrc',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  // all this settings are nested from work config
  singleQuote: true, // default value is false
  singleAttributePerLine: true, // default value is false
};
