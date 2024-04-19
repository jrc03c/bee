module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "eslint:recommended",
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
