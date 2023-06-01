module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
    "react/no-unescaped-entities":0,
    "no-unused-vars":0,
    "no-debugger":0,
    "no-console":0,
  },
};