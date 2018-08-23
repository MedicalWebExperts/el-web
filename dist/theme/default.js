'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _Typography = require('./components/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = require('./components/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  font: {
    size: 16,
    primary: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    secondary: 'Georgia, "Times New Roman", Times, serif'
  },
  spacing: 25,
  typography: _Typography2.default,
  colors: _colors2.default,
  button: _Button2.default
};