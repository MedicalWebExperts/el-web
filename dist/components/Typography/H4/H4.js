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

var _styles = require('../../../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  text: _propTypes2.default.string.isRequired,
  secondary: _propTypes2.default.bool,
  color: _propTypes2.default.oneOf(['primary', 'secondary', 'default']),
  styles: _propTypes2.default.shape({})
};

var defaultProps = {
  color: 'default',
  secondary: false,
  styles: {}
};

var H4 = function H4(_ref) {
  var text = _ref.text,
      color = _ref.color,
      secondary = _ref.secondary,
      styles = _ref.styles;
  return _react2.default.createElement(
    'h4',
    { style: styles, className: _style2.default.dynamic([['2509457466', [_styles2.default.colors[color], secondary ? _styles2.default.font.secondary : _styles2.default.font.primary, _styles2.default.font.size * 1.75, _styles2.default.font.size / 10, _styles2.default.spacing * 1.6]]])
    },
    _react2.default.createElement(_style2.default, {
      styleId: '2509457466',
      css: 'h4.__jsx-style-dynamic-selector{color:' + _styles2.default.colors[color] + ' font-family:' + (secondary ? _styles2.default.font.secondary : _styles2.default.font.primary) + ' font-size:' + _styles2.default.font.size * 1.75 + 'px line-height:' + _styles2.default.font.size / 10 + ' margin-top:0 margin-bottom:' + _styles2.default.spacing * 1.6 + 'px;}',
      dynamic: [_styles2.default.colors[color], secondary ? _styles2.default.font.secondary : _styles2.default.font.primary, _styles2.default.font.size * 1.75, _styles2.default.font.size / 10, _styles2.default.spacing * 1.6]
    }),
    text
  );
};

H4.propTypes = propTypes;
H4.defaultProps = defaultProps;

exports.default = H4;