module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  globals: {
    makeKey: {
      readonly: true,
    },
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["eslint-plugin-html"],
  rules: {
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],

    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
  },
}
