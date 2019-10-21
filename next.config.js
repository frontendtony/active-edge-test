const path = require('path');
const withCSS = require('@zeit/next-css');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withCSS({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    config.resolve.modules.push(path.resolve('./'));
    config.resolve.modules.push(path.resolve('./components'));

    return config;
  },
  exportTrailingSlash: isProd
});
