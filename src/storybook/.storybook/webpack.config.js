'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var managerEntry = process.env.DEV_BUILD
  ? _path2.default.resolve(__dirname, '../../src/client/manager')
  : _path2.default.resolve(__dirname, '../manager');

var config = {
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query: { presets: ['react', 'es2015', 'stage-2'] },
        exclude: [_path2.default.resolve('./node_modules'), _path2.default.resolve(__dirname, 'node_modules')],
        include: [_path2.default.resolve('./'), __dirname, _path2.default.resolve(__dirname, '../../src')]
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      }
    ]
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'native-base': 'native-base-web',
      'react-native-vector-icons/Ionicons': 'native-base-web/lib/Components/Widgets/Icon',
      'react/lib/ReactNativePropRegistry': 'react-native-web-extended/dist/modules/ReactNativePropRegistry'
    }
  }
};

module.exports = config;
