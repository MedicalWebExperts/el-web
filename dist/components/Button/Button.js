'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styles = require('../../styles');

var _styles2 = _interopRequireDefault(_styles);

var _media = require('../../utils/media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  text: _propTypes.string.isRequired,
  outline: _propTypes.bool,
  type: (0, _propTypes.oneOf)(['primary', 'secondary', 'success', 'warning', 'danger']),
  styles: (0, _propTypes.shape)({}),
  onClick: _propTypes.func.isRequired
};

var defaultProps = {
  outline: false,
  type: 'primary',
  styles: {}
};

var Button = function Button(_ref) {
  var text = _ref.text,
      outline = _ref.outline,
      type = _ref.type,
      styles = _ref.styles,
      onClick = _ref.onClick;

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
      className: _style2.default.dynamic([['3340394992', [_media2.default.isMobile() || _media2.default.isTablet() ? '20px' : '0', backgroundColor, _styles2.default.colors.white, _styles2.default.colors.transparent, _styles2.default.colors.primary, _styles2.default.colors.primary]]])
    },
    _react2.default.createElement(_style2.default, {
      styleId: '3340394992',
      css: 'div.__jsx-style-dynamic-selector{margin-bottom:' + (_media2.default.isMobile() || _media2.default.isTablet() ? '20px' : '0') + ';display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}button.__jsx-style-dynamic-selector{text-align:center;padding:11px 30px;font-size:14px;cursor:pointer;font-weight:bold;border-radius:4px;border:none;outline:none;width:100%;min-width:160px;}button.default.__jsx-style-dynamic-selector{background-color:' + backgroundColor + ';color:' + _styles2.default.colors.white + ';}button.default.__jsx-style-dynamic-selector:hover{box-shadow:0 2px 6px rgba(0,0,0,0.3);}button.default.__jsx-style-dynamic-selector:active,button.default.__jsx-style-dynamic-selector:focus{box-shadow:0 2px 4px rgba(0,0,0,0.3);}button.outline.__jsx-style-dynamic-selector{background-color:' + _styles2.default.colors.transparent + ';border:solid 1px ' + _styles2.default.colors.primary + ';color:' + _styles2.default.colors.primary + ';}button.outline.__jsx-style-dynamic-selector:hover{opacity:0.8;}',
      dynamic: [_media2.default.isMobile() || _media2.default.isTablet() ? '20px' : '0', backgroundColor, _styles2.default.colors.white, _styles2.default.colors.transparent, _styles2.default.colors.primary, _styles2.default.colors.primary]
    }),
    _react2.default.createElement(
      'button',
      { type: 'button', style: styles, onClick: onClick, className: _style2.default.dynamic([['3340394992', [_media2.default.isMobile() || _media2.default.isTablet() ? '20px' : '0', backgroundColor, _styles2.default.colors.white, _styles2.default.colors.transparent, _styles2.default.colors.primary, _styles2.default.colors.primary]]]) + ' ' + (buttonClassName || '')
      },
      text
    )
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;