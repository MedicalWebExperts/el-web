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
  type: _propTypes2.default.oneOf(['primary', 'secondary', 'success', 'warning', 'danger'])
};

var defaultProps = {
  outline: false,
  type: 'primary'
};

var Button = function Button(_ref) {
  var text = _ref.text,
      outline = _ref.outline,
      type = _ref.type;

  // check type
  var buttonClassName = 'default';
  if (outline) {
    buttonClassName = 'outline';
  }
  // check colors
  var backgroundColor = null;
  switch (type) {
    case 'secondary':
      backgroundColor = _styles2.default.colors.secondary;
      break;
    case 'success':
      backgroundColor = _styles2.default.colors.success;
      break;
    case 'warning':
      backgroundColor = _styles2.default.colors.warning;
      break;
    case 'danger':
      backgroundColor = _styles2.default.colors.danger;
      break;
    default:
      backgroundColor = _styles2.default.colors.primary;
      break;
  }

  return _react2.default.createElement(
    'div',
    {
      className: _style2.default.dynamic([['2640058647', [backgroundColor, _styles2.default.colors.white, _styles2.default.colors.transparent, _styles2.default.colors.primary, _styles2.default.colors.primary]]])
    },
    _react2.default.createElement(_style2.default, {
      styleId: '2640058647',
      css: 'button.__jsx-style-dynamic-selector{text-align:center;padding:15px 30px;font-size:16px;cursor:pointer;font-weight:bold;border-radius:4px;border:none;outline:none;}button.__jsx-style-dynamic-selector:active,button.__jsx-style-dynamic-selector:focus{outline:none;}button.default.__jsx-style-dynamic-selector{background-color:' + backgroundColor + ';color:' + _styles2.default.colors.white + ';outline:none;}button.default.__jsx-style-dynamic-selector:hover{box-shadow:0 2px 6px rgba(0,0,0,0.3);}button.default.__jsx-style-dynamic-selector:active,button.default.__jsx-style-dynamic-selector:focus{box-shadow:0 2px 4px rgba(0,0,0,0.3);}button.outline.__jsx-style-dynamic-selector{background-color:' + _styles2.default.colors.transparent + ';border:solid 1px ' + _styles2.default.colors.primary + ';color:' + _styles2.default.colors.primary + ';}button.outline.__jsx-style-dynamic-selector:hover{opacity:0.8;}',
      dynamic: [backgroundColor, _styles2.default.colors.white, _styles2.default.colors.transparent, _styles2.default.colors.primary, _styles2.default.colors.primary]
    }),
    _react2.default.createElement(
      'button',
      { type: 'button', className: _style2.default.dynamic([['2640058647', [backgroundColor, _styles2.default.colors.white, _styles2.default.colors.transparent, _styles2.default.colors.primary, _styles2.default.colors.primary]]]) + ' ' + (buttonClassName || '')
      },
      text
    )
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;