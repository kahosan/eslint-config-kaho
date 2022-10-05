module.exports = {
  overrides: [
    {
      files: ['*.js'],
      extends: './index.js'
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./react.js', './ts.js'],
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ]
};
