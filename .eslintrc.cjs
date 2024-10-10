module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // 안쓰는 변수 경고 여부 ex) const a = 1
    "react/no-unescaped-entities": "off", // react에서 특수문자 사용 여부 ex) &nbsp;
    "@typescript-eslint/ban-types": "off", // 특정 타입 사용 여부 ex) Object, String
    "react/react-in-jsx-scope": "off", // react 사용 여부 ex) import React from 'react'
    // 추후 컴포넌트 확장 여부에 따라 변경 ex) 추후 사용될 수 있는 경우 "off"로 변경
    // 최적화 시 error로 잡고 수정
    // [run in cli]
    // npx eslint --fix .
    // npx prettier --w **/*.{js,jsx,ts,tsx}
    "@typescript-eslint/no-unused-vars": [
      // 안쓰는 변수 경고 여부 typescript 전용 ex) const a = 1
      "off", // or "warn" or "error"
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "import/order": [
      "warn",
      {
        groups: [
          "object",
          "builtin",
          "external",
          "internal",
          ["sibling", "parent", "index"],
          "type",
          "unknown",
        ],
        pathGroups: [
          { pattern: "react", group: "external", position: "before" },
          { pattern: "assets/**", group: "internal" },
          { pattern: "components/**", group: "internal" },
          { pattern: "hooks/**", group: "internal" },
          { pattern: "pages/**", group: "internal" },
          { pattern: "utils/**", group: "internal" },
          { pattern: "common/**", group: "internal" },
          { pattern: "routes/**", group: "internal" },
          { pattern: "styles/**", group: "internal" },
          { pattern: "**/*.scss", group: "object", position: "before" },
        ],
        pathGroupsExcludedImportTypes: ["react", "unknown"],
        "newlines-between": "always", // import 간의 new line 여부
        alphabetize: {
          // import 정렬 설정
          order: "asc", // or "desc"
          caseInsensitive: true, // 대소문자 구분 여부
        },
      },
    ],
  },
};
