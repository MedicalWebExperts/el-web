'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _styles = require('../../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  styles: (0, _propTypes.shape)({}),
  icon: (0, _propTypes.shape)({}).isRequired,
  size: _propTypes.string,
  color: _propTypes.string,
  className: _propTypes.string,
  height: _propTypes.string,
  width: _propTypes.string
};

var defaultProps = {
  styles: {},
  size: 'xs',
  color: _styles2.default.colors.textPrimary,
  className: '',
  height: '18px',
  width: '18px'
};

var customStyles = {
  height: '100%',
  width: '100%'
};

var Icon = function Icon(props) {
  return _react2.default.createElement(
    'div',
    {
      className: _style2.default.dynamic([['1235892748', [props.height, props.width]]]) + ' ' + 'icon'
    },
    _react2.default.createElement(_style2.default, {
      styleId: '1235892748',
      css: 'div.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-flex height:' + props.height + ';display:-ms-flex height:' + props.height + 'box;display:flex height:' + props.height + ';width:' + props.width + ';}',
      dynamic: [props.height, props.width]
    }),
    _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, _extends({
      icon: props.icon,
      size: props.size
    }, props, {
      color: props.color,
      style: _extends({}, customStyles, props.styles)
    }))
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

exports.default = Icon;