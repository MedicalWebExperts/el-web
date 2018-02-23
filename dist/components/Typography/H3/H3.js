'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _theme = require('../../../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  text: _propTypes2.default.string.isRequired,
  secondary: _propTypes2.default.bool,
  color: _propTypes2.default.oneOf(['primary', 'secondary', 'default']),
  theme: _propTypes2.default.shape({}).isRequired,
  styles: _propTypes2.default.shape({})
};

var defaultProps = {
  color: 'default',
  secondary: false,
  styles: {}
};

var H3 = function H3(_ref) {
  var text = _ref.text,
      theme = _ref.theme,
      color = _ref.color,
      secondary = _ref.secondary,
      styles = _ref.styles;
  return _react2.default.createElement(
    'h3',
    { style: styles, className: _style2.default.dynamic([['46742820', [theme.colors[color], secondary ? theme.font.secondary : theme.font.primary, theme.font.size * theme.typography.h3.fontSize, theme.font.size / 10, theme.spacing * theme.typography.h3.marginBottom]]])
    },
    _react2.default.createElement(_style2.default, {
      styleId: '46742820',
      css: 'h3.__jsx-style-dynamic-selector{color:' + theme.colors[color] + ';font-family:' + (secondary ? theme.font.secondary : theme.font.primary) + ';font-size:' + theme.font.size * theme.typography.h3.fontSize + 'px;line-height:' + theme.font.size / 10 + ';margin-top:0;margin-bottom:' + theme.spacing * theme.typography.h3.marginBottom + 'px;}',
      dynamic: [theme.colors[color], secondary ? theme.font.secondary : theme.font.primary, theme.font.size * theme.typography.h3.fontSize, theme.font.size / 10, theme.spacing * theme.typography.h3.marginBottom]
    }),
    text
  );
};

H3.propTypes = propTypes;
H3.defaultProps = defaultProps;

exports.default = (0, _theme.withTheme)(H3);