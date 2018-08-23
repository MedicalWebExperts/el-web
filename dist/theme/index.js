'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultTheme = exports.withTheme = exports.ThemeProvider = undefined;

var _theming = require('theming');

var _provider = require('./provider');

var _provider2 = _interopRequireDefault(_provider);

var _default = require('./default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ThemeProvider = _provider2.default;
exports.withTheme = _theming.withTheme;
exports.DefaultTheme = _default2.default;