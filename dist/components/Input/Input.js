'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styles = require('../../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: _this.props.value
    }, _this.handleChange = function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      _this.setState({ value: value });
      _this.props.onChange(_defineProperty({}, name, value));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          name = _props.name,
          placeholder = _props.placeholder;
      var value = this.state.value;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'style',
          { jsx: true },
          '\n              input,\n              select {\n                padding: 10px;\n                font-size: 14px;\n                border-radius: 4px;\n                border-width: 1px;\n                border-style: solid;\n                background-color: ' + _styles2.default.colors.white + ';\n                color: ' + _styles2.default.colors.textTertiary + ';\n                border-color: ' + _styles2.default.colors.textTertiary + ';\n                outline: none;\n              }\n              input:active,\n              input:focus {\n                outline: none;\n              }\n              input::placeholder {\n                color: ' + _styles2.default.colors.textTertiary + ';\n                font-style: italic;\n              }\n            '
        ),
        type !== 'select' ? _react2.default.createElement('input', {
          type: type,
          name: name,
          value: value,
          onChange: this.handleChange,
          placeholder: placeholder
        }) : _react2.default.createElement('select', { type: type, name: name, value: value, onChange: this.handleChange })
      );
    }
  }]);

  return Input;
}(_react.Component);

Input.propTypes = {
  value: _propTypes.string,
  name: _propTypes.string.isRequired,
  type: (0, _propTypes.oneOf)(['text', 'email', 'tel', 'select']).isRequired,
  placeholder: _propTypes.string,
  onChange: _propTypes.func.isRequired
};
Input.defaultProps = {
  value: '',
  placeholder: 'Placeholder'
};
exports.default = Input;