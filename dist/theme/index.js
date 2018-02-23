'use strict';

var _theming = require('theming');

var _provider = require('./provider');

var _provider2 = _interopRequireDefault(_provider);

var _default = require('./default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  ThemeProvider: _provider2.default,
  withTheme: _theming.withTheme,
  DefaultTheme: _default2.default
};