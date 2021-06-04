module.exports = {
  presets: [
    [
      '@babel/preset-env',

      // For ES2016 output
      // {
      //   targets: {
      //     chrome: '91',
      //   },
      // },

      // For ES5 output
      {
        useBuiltIns: 'usage',
        corejs: '3.13',
        targets: {
          ie: '11',
        },
      },
    ],
  ],
};
