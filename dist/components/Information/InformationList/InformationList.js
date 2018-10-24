'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _InformationListItem = require('./InformationListItem');

var _InformationListItem2 = _interopRequireDefault(_InformationListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  data: (0, _propTypes.arrayOf)(_propTypes.string).isRequired,
  styles: (0, _propTypes.shape)({})
};

var defaultProps = {
  styles: {}
};

var style = new String('ul.jsx-3401328911{list-style:none;padding:0;margin:0;}');

style.__hash = '3401328911';
var InformationList = function InformationList(_ref) {
  var data = _ref.data,
      styles = _ref.styles;
  return _react2.default.createElement(
    'ul',
    { style: styles, className: 'jsx-' + style.__hash
    },
    _react2.default.createElement(_style2.default, {
      styleId: style.__hash,
      css: style
    }),
    data.map(function (item, index) {
      return _react2.default.createElement(_InformationListItem2.default, { text: item, key: index });
    })
  );
};

InformationList.propTypes = propTypes;
InformationList.defaultProps = defaultProps;
exports.default = InformationList;