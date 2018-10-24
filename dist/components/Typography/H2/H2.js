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
  text: _propTypes.string.isRequired,
  secondary: _propTypes.bool,
  color: (0, _propTypes.oneOf)(['primary', 'secondary', 'default']),
  styles: (0, _propTypes.shape)({})
};

var defaultProps = {
  color: 'default',
  secondary: false,
  styles: {}
};

var H2 = function H2(_ref) {
  var text = _ref.text,
      color = _ref.color,
      secondary = _ref.secondary,
      styles = _ref.styles;
  return _react2.default.createElement(
    'h2',
    { style: styles, className: _style2.default.dynamic([['373888101', [_styles2.default.colors[color], secondary ? _styles2.default.font.secondary : _styles2.default.font.primary, _styles2.default.font.size * 2.5, _styles2.default.font.size / 10]]])
    },
    _react2.default.createElement(_style2.default, {
      styleId: '373888101',
      css: 'h2.__jsx-style-dynamic-selector{color:' + _styles2.default.colors[color] + ';font-family:' + (secondary ? _styles2.default.font.secondary : _styles2.default.font.primary) + ';font-size:' + _styles2.default.font.size * 2.5 + 'px;line-height:' + _styles2.default.font.size / 10 + ';margin:0;}',
      dynamic: [_styles2.default.colors[color], secondary ? _styles2.default.font.secondary : _styles2.default.font.primary, _styles2.default.font.size * 2.5, _styles2.default.font.size / 10]
    }),
    text
  );
};

H2.propTypes = propTypes;
H2.defaultProps = defaultProps;

exports.default = H2;