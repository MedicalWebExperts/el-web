'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styles = require('../../styles');

var _styles2 = _interopRequireDefault(_styles);

var _media = require('../../utils/media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      value: ''
    }, _this.handleChange = function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      _this.setState({ value: value });
      _this.props.onChange({ name: name, value: value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          name = _props.name,
          placeholder = _props.placeholder,
          styles = _props.styles;
      var value = this.state.value;

      return _react2.default.createElement(
        'div',
        {
          className: _style2.default.dynamic([['2805580973', [_media2.default.isMobile() || _media2.default.isTablet() ? '20px' : '0', _styles2.default.colors.white, _styles2.default.colors.textTertiary, _styles2.default.colors.textTertiary, _styles2.default.colors.textTertiary]]])
        },
        _react2.default.createElement(_style2.default, {
          styleId: '2805580973',
          css: 'div.__jsx-style-dynamic-selector{margin-bottom:' + (_media2.default.isMobile() || _media2.default.isTablet() ? '20px' : '0') + ';display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}input.__jsx-style-dynamic-selector{padding:10px;font-size:14px;border-radius:4px;border-width:1px;border-style:solid;background-color:' + _styles2.default.colors.white + ';color:' + _styles2.default.colors.textTertiary + ';border-color:' + _styles2.default.colors.textTertiary + ';outline:none;-webkit-flex:1;-ms-flex:1;flex:1;}input.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:' + _styles2.default.colors.textTertiary + ';font-style:italic;}input.__jsx-style-dynamic-selector::-moz-placeholder{color:' + _styles2.default.colors.textTertiary + ';font-style:italic;}input.__jsx-style-dynamic-selector:-ms-input-placeholder{color:' + _styles2.default.colors.textTertiary + ';font-style:italic;}input.__jsx-style-dynamic-selector::placeholder{color:' + _styles2.default.colors.textTertiary + ';font-style:italic;}',
          dynamic: [_media2.default.isMobile() || _media2.default.isTablet() ? '20px' : '0', _styles2.default.colors.white, _styles2.default.colors.textTertiary, _styles2.default.colors.textTertiary, _styles2.default.colors.textTertiary]
        }),
        _react2.default.createElement('input', {
          style: styles,
          type: type,
          name: name,
          value: value,
          onChange: this.handleChange,
          placeholder: placeholder,
          className: _style2.default.dynamic([['2805580973', [_media2.default.isMobile() || _media2.default.isTablet() ? '20px' : '0', _styles2.default.colors.white, _styles2.default.colors.textTertiary, _styles2.default.colors.textTertiary, _styles2.default.colors.textTertiary]]])
        })
      );
    }
  }]);

  return Input;
}(_react.Component);

Input.propTypes = {
  name: _propTypes.string.isRequired,
  type: (0, _propTypes.oneOf)(['text', 'email', 'tel']).isRequired,
  placeholder: _propTypes.string,
  onChange: _propTypes.func.isRequired,
  styles: (0, _propTypes.shape)({})
};
Input.defaultProps = {
  placeholder: 'Placeholder',
  styles: {}
};
exports.default = Input;