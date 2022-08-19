module.exports = {
  extends: ['@antfu/eslint-config-ts'],
  rules: {
    '@typescript-eslint/semi': ['error', 'always'],
    'curly': ['error', 'multi-line'],
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    '@typescript-eslint/comma-dangle': ['error', 'never']
  }
};
