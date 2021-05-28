const { name } = require('./package');
module.exports = {
  devServer: {
    port: 3003,
    historyApiFallback: true,
    hot: false,
    liveReload: false,
    watchContentBase: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      publicPath: '/',
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
