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
  styles: (0, _propTypes.shape)({})
};

var defaultProps = {
  styles: {}
};

var style = new String('li.jsx-1051720404{padding:0 0 0 20px;position:relative;color:' + _styles2.default.colors.default + ';font-family:' + _styles2.default.font.primary + ';font-size:' + _styles2.default.font.size + 'px;line-height:1.6;}li.jsx-1051720404:before{content:\'\';position:absolute;left:0;top:7px;right:auto;width:8px;height:8px;border-bottom:solid 1px currentColor;border-left:solid 1px currentColor;-webkit-transform:rotate(-135deg);-ms-transform:rotate(-135deg);transform:rotate(-135deg);color:#4a90e2;}');

style.__hash = '1051720404';
var InformationListItem = function InformationListItem(_ref) {
  var text = _ref.text,
      styles = _ref.styles;
  return _react2.default.createElement(
    'li',
    { style: styles, className: 'jsx-' + style.__hash
    },
    _react2.default.createElement(_style2.default, {
      styleId: style.__hash,
      css: style
    }),
    text
  );
};

InformationListItem.propTypes = propTypes;
InformationListItem.defaultProps = defaultProps;
exports.default = InformationListItem;