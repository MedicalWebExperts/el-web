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
  children: _propTypes2.default.node,
  text: _propTypes2.default.string,
  color: _propTypes2.default.oneOf(['primary', 'secondary', 'default']),
  align: _propTypes2.default.oneOf(['left', 'right', 'center', 'inherit', 'justify']),
  noWrap: _propTypes2.default.bool,
  secondary: _propTypes2.default.bool,
  theme: _propTypes2.default.shape({}).isRequired,
  styles: _propTypes2.default.shape({})
};

var defaultProps = {
  children: '',
  text: '',
  color: 'default',
  align: 'inherit',
  noWrap: false,
  secondary: false,
  styles: {}
};

var Text = function Text(_ref) {
  var children = _ref.children,
      text = _ref.text,
      color = _ref.color,
      align = _ref.align,
      noWrap = _ref.noWrap,
      secondary = _ref.secondary,
      theme = _ref.theme,
      styles = _ref.styles;
  return _react2.default.createElement(
    'p',
    { style: styles, className: _style2.default.dynamic([['3525336644', [theme.colors[color], align, secondary ? theme.font.secondary : theme.font.primary, noWrap ? 'nowrap' : 'normal', theme.font.size, theme.font.size / 10, theme.spacing]]])
    },
    _react2.default.createElement(_style2.default, {
      styleId: '3525336644',
      css: 'p.__jsx-style-dynamic-selector{color:' + theme.colors[color] + ' text-align:' + align + ' font-family:' + (secondary ? theme.font.secondary : theme.font.primary) + ' white-space:' + (noWrap ? 'nowrap' : 'normal') + ' font-size:' + theme.font.size + 'px line-height:' + theme.font.size / 10 + ' margin-top:0 margin-bottom:' + theme.spacing + 'px;}',
      dynamic: [theme.colors[color], align, secondary ? theme.font.secondary : theme.font.primary, noWrap ? 'nowrap' : 'normal', theme.font.size, theme.font.size / 10, theme.spacing]
    }),
    text || children
  );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
exports.default = (0, _theme.withTheme)(Text);