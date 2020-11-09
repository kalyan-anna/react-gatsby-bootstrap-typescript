//***********************************************************
// * 0 = off | 1 = warn | 2 = error
//***********************************************************
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier',
    'prettier/react',
  ],
  plugins: ['react', 'import', 'immutable', 'jsx-a11y', 'react-hooks', 'jest'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-tag-spacing': 0,
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-console': 1,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
