/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 100,
  plugins: ['@nirtamir2/prettier-plugin-css-order', 'prettier-plugin-tailwindcss'],
  tailwindStylesheet: './app/style.css',
  tailwindPreserveWhitespace: true,
  tailwindPreserveDuplicates: true,
}
