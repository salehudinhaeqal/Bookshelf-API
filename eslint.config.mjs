import airbnbBase from 'eslint-config-airbnb-base';

export default [
  {
    files: ['src/**/*.js'],
    rules: {
      ...airbnbBase.rules,
      'no-console': 'off', 
    },
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly',
      },
    },
  },
];