"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Col = function Col(_ref) {
    var children = _ref.children,
        xs = _ref.xs,
        sm = _ref.sm,
        md = _ref.md,
        lg = _ref.lg,
        xl = _ref.xl;


    var val = md / 12 * 100;
    return _react2.default.createElement(
        "div",
        {
            className: _style2.default.dynamic([["2926885796", [val, val]]]) + " " + "col-md"
        },
        _react2.default.createElement(_style2.default, {
            styleId: "2926885796",
            css: ".col-md.__jsx-style-dynamic-selector{-webkit-flex-basis:50%;-moz-flex-basis:50%;-ms-flex-preferred-size:50%;-webkit-flex-basis:" + val + "%;-ms-flex-preferred-size:" + val + "%;flex-basis:" + val + "%;max-width:" + val + "%;}@media(max-width:992px){.col-md.__jsx-style-dynamic-selector{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%;}}",
            dynamic: [val, val]
        }),
        children
    );
};

exports.default = Col;