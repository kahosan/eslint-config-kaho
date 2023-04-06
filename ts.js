module.exports = {
  extends: ['sukka/typescript'],
  rules: {
    '@typescript-eslint/ban-types': [ 'error', {
        'types': {
          '{}': false
        },
        'extendDefaults': true
      }
    ],
    'curly': [
      'error',
      'multi-or-nest',
      'consistent'
    ],
    '@fluffyfox/no-default-error': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': ['error', { 'allow': ['warn', 'error', 'info'] }],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
  }
};
