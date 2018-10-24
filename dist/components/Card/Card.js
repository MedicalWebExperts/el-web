'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  styles: (0, _propTypes.shape)({}),
  children: _propTypes.node.isRequired,
  onPress: _propTypes.string
};

var defaultProps = {
  styles: {},
  onPress: function onPress() {
    return null;
  }
};

var style = new String('.card.jsx-1841502917{box-shadow:0 2px 4px rgba(0,0,0,0.2);padding:10px;border-radius:4px;}a.jsx-1841502917{-webkit-text-decoration:none;text-decoration:none;}');

style.__hash = '1841502917';
var Card = function Card(_ref) {
  var styles = _ref.styles,
      children = _ref.children,
      onPress = _ref.onPress;
  return _react2.default.createElement(
    'div',
    { style: styles, className: 'jsx-' + style.__hash + ' ' + 'card'
    },
    _react2.default.createElement(_style2.default, {
      styleId: style.__hash,
      css: style
    }),
    _react2.default.createElement(
      'a',
      { href: onPress, className: 'jsx-' + style.__hash
      },
      children
    )
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

exports.default = Card;