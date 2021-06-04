module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '91',
        },
      },
    ],
    ['@babel/preset-typescript'],
  ],
};
