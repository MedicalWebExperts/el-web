'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _theming = require('theming');

var _default = require('./default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  children: _propTypes2.default.element.isRequired,
  theme: _propTypes2.default.oneOfType([_propTypes2.default.shape({})])
};

var defaultProps = {
  theme: {}
};

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
      theme = _ref.theme;

  // check a util funcion for deep clone/merge
  var mergedTheme = Object.keys(theme).length === 0 ? _default2.default : theme;

  return _react2.default.createElement(
    _theming.ThemeProvider,
    { theme: mergedTheme },
    children
  );
};

ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defaultProps;

exports.default = ThemeProvider;