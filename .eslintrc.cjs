// Init Setting From : https://shawnkim.tistory.com/132
module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "off",
      {
        allowConstantExport: true,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "@typescript-eslint/no-empty-object-type": "off", // 빈 object 사용 여부
    "react-hooks/exhaustive-deps": "off", // useEffect 빈 배열 사용 여부
    "import/named": "off", // named import 사용 여부
    "react/prop-types": "off", // prop-types 사용 여부
    "no-unused-vars": "off", // 안쓰는 변수 경고 여부 ex) const a = 1
    "react/no-unescaped-entities": "off", // react에서 특수문자 사용 여부 ex) &nbsp;
    "@typescript-eslint/no-explicit-any": "off",
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
    "import/order": [
      "error",
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
    "sort-imports": [
      "error",
      {
        ignoreCase: true, // 대소문자 구분 없이 정렬
        ignoreDeclarationSort: true, // 선언 순서 유지
        ignoreMemberSort: false, // 멤버 내에서 알파벳 순으로 정렬
        memberSyntaxSortOrder: [
          "none", // 기본 import
          "all", // 와일드카드 import ex) import * as React from 'react'
          "single", // 단일 import ex) import React from 'react'
          "multiple", // 명명된 import ex) import { useState, useEffect } from 'react'
        ],
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
        extensions: [".ts", ".tsx", ".svg"],
      },
    },
  },
};
