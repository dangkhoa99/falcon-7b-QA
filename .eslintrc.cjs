module.exports = {
  env: { browser: true, es2020: true },
  overrides: [{ files: ['**/*.cjs', 'vite.config.js'], env: { node: true } }],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/ban-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
}
