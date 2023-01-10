module.exports = {
  extends: ['@antfu/eslint-config-ts'],
  rules: {
    '@typescript-eslint/semi': ['error', 'always'],
    curly: ['error', 'multi-line'],
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    'quote-props': [
      'error',
      'as-needed',
      { keywords: false, unnecessary: true, numbers: false }
    ],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      { prefer: 'type-imports', disallowTypeAnnotations: true }
    ],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }]
  }
};
