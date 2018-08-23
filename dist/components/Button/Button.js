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

var _theme = require('../../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  text: _propTypes2.default.string.isRequired,
  outline: _propTypes2.default.bool,
  color: _propTypes2.default.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
  theme: _propTypes2.default.shape({}).isRequired
};

var defaultProps = {
  outline: false,
  color: 'primary'
};

var Button = function Button(_ref) {
  var text = _ref.text,
      outline = _ref.outline,
      color = _ref.color,
      theme = _ref.theme;
  var colors = theme.colors,
      button = theme.button;
  // check type

  var buttonClassName = 'default';
  if (outline) {
    buttonClassName = 'outline';
  }
  // check colors
  var backgroundColor = null;
  var textColor = null;
  switch (color) {
    case 'secondary':
      backgroundColor = colors.secondary;
      textColor = colors.buttonSecondaryText;
      break;
    case 'success':
      backgroundColor = colors.success;
      textColor = colors.buttonSuccessText;
      break;
    case 'warning':
      backgroundColor = colors.warning;
      textColor = colors.buttonWarningText;
      break;
    case 'danger':
      backgroundColor = colors.danger;
      textColor = colors.buttonDangerText;
      break;
    default:
      backgroundColor = colors.primary;
      textColor = colors.buttonPrimaryText;
      break;
  }

  return _react2.default.createElement(
    'div',
    {
      className: _style2.default.dynamic([['2190887616', [button.textAlign, button.padding, button.fontSize, button.cursor, backgroundColor, textColor, colors.transparent, backgroundColor, backgroundColor]]])
    },
    _react2.default.createElement(_style2.default, {
      styleId: '2190887616',
      css: 'button.__jsx-style-dynamic-selector{text-align:' + button.textAlign + ';padding:' + button.padding + ';font-size:' + button.fontSize + ';cursor:' + button.cursor + ';}button.default.__jsx-style-dynamic-selector{background-color:' + backgroundColor + ';color:' + textColor + ';}button.outline.__jsx-style-dynamic-selector{background-color:' + colors.transparent + ';border:solid 1px ' + backgroundColor + ';color:' + backgroundColor + ';}',
      dynamic: [button.textAlign, button.padding, button.fontSize, button.cursor, backgroundColor, textColor, colors.transparent, backgroundColor, backgroundColor]
    }),
    _react2.default.createElement(
      'button',
      { type: 'button', className: _style2.default.dynamic([['2190887616', [button.textAlign, button.padding, button.fontSize, button.cursor, backgroundColor, textColor, colors.transparent, backgroundColor, backgroundColor]]]) + ' ' + (buttonClassName || '')
      },
      text
    )
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = (0, _theme.withTheme)(Button);