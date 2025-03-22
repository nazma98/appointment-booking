export default [
  {
    ignores: ['node_modules', 'docs'],
  },
  {
    files: ['./src/*.{js, ts}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
    },
  },
  {
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "semi": "error",
    },
  },
];
