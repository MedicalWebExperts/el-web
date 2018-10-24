'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _InformationList = require('./InformationList/InformationList');

var _InformationList2 = _interopRequireDefault(_InformationList);

var _Typography = require('../Typography');

var _styles = require('../../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  data: (0, _propTypes.arrayOf)((0, _propTypes.shape)({})).isRequired
};

var style = new String('.information-item.jsx-3215497222{padding:22px 0;border-bottom:1px solid #e4e4e4;}.information-item.jsx-3215497222:last-child{border-style:none;}');

style.__hash = '3215497222';
var customStyle = {
  h4: { fontSize: _styles2.default.font.size },
  h5: { fontWeight: 'normal', fontSize: _styles2.default.font.size, marginTop: 8 },
  list: { marginTop: 8 }
};

var Information = function Information(_ref) {
  var data = _ref.data;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-' + style.__hash + ' ' + 'information'
    },
    _react2.default.createElement(_style2.default, {
      styleId: style.__hash,
      css: style
    }),
    data.map(function (_ref2, index) {
      var title = _ref2.title,
          description = _ref2.description,
          list = _ref2.list;
      return _react2.default.createElement(
        'div',
        { key: index, className: 'jsx-' + style.__hash + ' ' + 'information-item'
        },
        _react2.default.createElement(_Typography.H4, { text: title, styles: customStyle.h4 }),
        description && _react2.default.createElement(_Typography.H5, { text: description, styles: customStyle.h5 }),
        list && _react2.default.createElement(_InformationList2.default, { data: list, styles: customStyle.list })
      );
    })
  );
};

Information.propTypes = propTypes;
exports.default = Information;