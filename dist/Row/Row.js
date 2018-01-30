"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "div",
    {
      className: "jsx-1837918146" + " " + "row"
    },
    _react2.default.createElement(_style2.default, {
      styleId: "1837918146",
      css: ".row.jsx-1837918146{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"
    }),
    children
  );
};

exports.default = Row;