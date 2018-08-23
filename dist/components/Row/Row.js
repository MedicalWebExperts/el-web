'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  children: _propTypes2.default.node.isRequired
};

var Row = function Row(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    children
  );
};

Row.propTypes = propTypes;

exports.default = Row;