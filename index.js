module.exports = {
  extends: ['@antfu/eslint-config-basic'],
  rules: {
    'semi': ['error', 'always'],
    'curly': ['error', 'multi-line'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['error', 'never'],
    'indent': ['error', 2, { SwitchCase: 1 }]
  }
};
