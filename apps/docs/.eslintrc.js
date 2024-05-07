/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@artbc/eslint-config/next.js",
    "@artbc/eslint-config/tailwindcss.js",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
}
