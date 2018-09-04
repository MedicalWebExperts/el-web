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

var _styles = require('../../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  text: _propTypes2.default.string.isRequired,
  outline: _propTypes2.default.bool,
  color: _propTypes2.default.oneOf(['primary', 'secondary', 'success', 'warning', 'danger'])
};

var defaultProps = {
  outline: false,
  color: 'primary'
};

var Button = function Button(_ref) {
  var text = _ref.text,
      outline = _ref.outline,
      color = _ref.color;

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
      backgroundColor = _styles2.default.colors.secondary;
      textColor = _styles2.default.colors.buttonSecondaryText;
      break;
    case 'success':
      backgroundColor = _styles2.default.colors.success;
      textColor = _styles2.default.colors.buttonSuccessText;
      break;
    case 'warning':
      backgroundColor = _styles2.default.colors.warning;
      textColor = _styles2.default.colors.buttonWarningText;
      break;
    case 'danger':
      backgroundColor = _styles2.default.colors.danger;
      textColor = _styles2.default.colors.buttonDangerText;
      break;
    default:
      backgroundColor = _styles2.default.colors.primary;
      textColor = _styles2.default.colors.buttonPrimaryText;
      break;
  }

  return _react2.default.createElement(
    'div',
    {
      className: _style2.default.dynamic([['193854085', [backgroundColor, textColor, _styles2.default.colors.transparent, backgroundColor, backgroundColor]]])
    },
    _react2.default.createElement(_style2.default, {
      styleId: '193854085',
      css: 'button.__jsx-style-dynamic-selector{text-align:center;padding:15px 30px;font-size:16px;cursor:\'pointer\';}button.default.__jsx-style-dynamic-selector{background-color:' + backgroundColor + ';color:' + textColor + ';outline:none;}button.outline.__jsx-style-dynamic-selector{background-color:' + _styles2.default.colors.transparent + ';border:solid 1px ' + backgroundColor + ';color:' + backgroundColor + ';outline:none;}',
      dynamic: [backgroundColor, textColor, _styles2.default.colors.transparent, backgroundColor, backgroundColor]
    }),
    _react2.default.createElement(
      'button',
      { type: 'button', className: _style2.default.dynamic([['193854085', [backgroundColor, textColor, _styles2.default.colors.transparent, backgroundColor, backgroundColor]]]) + ' ' + (buttonClassName || '')
      },
      text
    )
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;