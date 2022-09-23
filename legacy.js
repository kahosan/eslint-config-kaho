module.exports = {
  extends: ['sukka/legacy'],
  rules: {
    curly: ['error', 'multi-line'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    indent: ['error', 2, { SwitchCase: 1 }]
  }
};
