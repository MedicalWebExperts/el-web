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

var _theme = require('../../theme');

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
      value: null
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
          title = _props.title,
          type = _props.type,
          name = _props.name,
          required = _props.required,
          theme = _props.theme;
      var colors = theme.colors,
          button = theme.button;

      var backgroundColor = 'white';
      var textColor = 'black';

      return (
        // <div>
        //   {title !== '' && <label>{title}</label>}
        //   {type !== 'textarea' ? (
        //     <input
        //       type={type}
        //       name={name}
        //       value={this.state.value}
        //       onChange={this.handleChange}
        //       required={required}
        //       className={`form-control ${css.formControl}`}
        //     />
        //   ) : (
        //       <textarea
        //         type={type}
        //         name={name}
        //         defaultValue={this.state.value}
        //         onChange={this.handleChange}
        //         required={required}
        //         className={`form-control ${css.formControl}`}
        //       />
        //     )}
        //   {required && <div className={css.withErrors} role="alert" />}
        // </div>
        _react2.default.createElement(
          'div',
          {
            className: _style2.default.dynamic([['3443850342', [button.textAlign, button.padding, button.fontSize, button.cursor, backgroundColor, textColor, colors.transparent, backgroundColor, backgroundColor]]])
          },
          _react2.default.createElement(_style2.default, {
            styleId: '3443850342',
            css: 'button.__jsx-style-dynamic-selector{text-align:' + button.textAlign + ';padding:' + button.padding + ';font-size:' + button.fontSize + ';cursor:' + button.cursor + ';}button.default.__jsx-style-dynamic-selector{background-color:' + backgroundColor + ';color:' + textColor + ';}button.outline.__jsx-style-dynamic-selector{background-color:' + colors.transparent + ';border:solid 1px ' + backgroundColor + ';color:' + backgroundColor + ';}',
            dynamic: [button.textAlign, button.padding, button.fontSize, button.cursor, backgroundColor, textColor, colors.transparent, backgroundColor, backgroundColor]
          }),
          _react2.default.createElement('input', { type: 'text', value: value, onChange: handleChange, className: _style2.default.dynamic([['3443850342', [button.textAlign, button.padding, button.fontSize, button.cursor, backgroundColor, textColor, colors.transparent, backgroundColor, backgroundColor]]]) + ' ' + (inputClassName || '')
          })
        )
      );
    }
  }]);

  return Input;
}(_react.Component);

Input.propTypes = {
  value: _propTypes.string,
  color: (0, _propTypes.oneOf)(['primary', 'secondary', 'success', 'warning', 'danger']),
  theme: (0, _propTypes.shape)({}).isRequired,
  handleChange: _propTypes.func.isRequired
};
Input.defaultProps = {
  value: null,
  color: 'primary'
};
exports.default = (0, _theme.withTheme)(Input);