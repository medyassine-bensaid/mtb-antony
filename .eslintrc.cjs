module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:astro/recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  env: { browser: true, es2022: true, node: true },
  overrides: [
    { files: ['*.ts'], parser: '@typescript-eslint/parser' },
    { files: ['*.astro'], parser: 'astro-eslint-parser', parserOptions: { parser: '@typescript-eslint/parser', extraFileExtensions: ['.astro'] } },
  ],
  rules: { 'no-unused-vars': 'off' },
};
