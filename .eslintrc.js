module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: ['xo-space/esnext', 'xo-typescript'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    'capitalized-comments': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'no-mixed-operators': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/prefer-readonly-parameter-types': 0,
  },
};
