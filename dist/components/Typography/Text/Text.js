'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styles = require('../../../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  children: _propTypes.node,
  text: _propTypes.string,
  color: (0, _propTypes.oneOf)(['primary', 'secondary', 'default']),
  align: (0, _propTypes.oneOf)(['left', 'right', 'center', 'inherit', 'justify']),
  noWrap: _propTypes.bool,
  secondary: _propTypes.bool,
  styles: (0, _propTypes.shape)({})
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
      styles = _ref.styles;
  return _react2.default.createElement(
    'p',
    { style: styles, className: _style2.default.dynamic([['10965609', [_styles2.default.colors[color], align, secondary ? _styles2.default.font.secondary : _styles2.default.font.primary, noWrap ? 'nowrap' : 'normal', _styles2.default.font.size, _styles2.default.font.size / 10]]])
    },
    _react2.default.createElement(_style2.default, {
      styleId: '10965609',
      css: 'p.__jsx-style-dynamic-selector{color:' + _styles2.default.colors[color] + ';text-align:' + align + ';font-family:' + (secondary ? _styles2.default.font.secondary : _styles2.default.font.primary) + ';white-space:' + (noWrap ? 'nowrap' : 'normal') + ';font-size:' + _styles2.default.font.size + 'px;line-height:' + _styles2.default.font.size / 10 + ';margin:0;}',
      dynamic: [_styles2.default.colors[color], align, secondary ? _styles2.default.font.secondary : _styles2.default.font.primary, noWrap ? 'nowrap' : 'normal', _styles2.default.font.size, _styles2.default.font.size / 10]
    }),
    text || children
  );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
exports.default = Text;