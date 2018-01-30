"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function Grid(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "div",
    {
      className: "jsx-1678993032" + " " + "container"
    },
    _react2.default.createElement(_style2.default, {
      styleId: "1678993032",
      css: ".container.jsx-1678993032{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}@media (min-width:768px){.container.jsx-1678993032{max-width:auto;}}@media (min-width:992px){.container.jsx-1678993032{max-width:992px;}}@media (min-width:1200px){.container.jsx-1678993032{max-width:1200px;}}@media (max-width:1200px){.container.jsx-1678993032{padding:0 15px;}}"
    }),
    children
  );
};

exports.default = Grid;