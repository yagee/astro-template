export default {
  $schema: 'https://json.schemastore.org/prettierrc',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  // all this settings are nested from qvant config
  singleQuote: true, // default value is false
  trailingComma: 'none', // default value is "all"
  arrowParens: 'avoid', // default value is "always"
  singleAttributePerLine: true // default value is false
};
