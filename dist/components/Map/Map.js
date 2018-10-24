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
  title: _propTypes.string,
  url: _propTypes.string.isRequired,
  styles: (0, _propTypes.shape)({})
};

var defaultProps = {
  title: 'Map',
  styles: {}
};

var style = new String('iframe.jsx-237474413{border:0;}');

style.__hash = '237474413';
var customStyle = { height: '100%', width: '100%' };

var Map = function Map(_ref) {
  var title = _ref.title,
      url = _ref.url,
      styles = _ref.styles;
  return _react2.default.createElement(
    'iframe',
    {
      title: title,
      src: url,
      height: customStyle.height,
      width: customStyle.width,
      frameBorder: '0',
      allowFullScreen: true,
      style: styles,
      className: 'jsx-' + style.__hash
    },
    _react2.default.createElement(_style2.default, {
      styleId: style.__hash,
      css: style
    })
  );
};

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;
exports.default = Map;