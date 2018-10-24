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

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedValue: ''
    }, _this.handleChange = function (event) {
      var value = event.target.value;

      _this.setState({ selectedValue: value });
      _this.props.onChange({ name: _this.props.placeholder, value: value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          placeholder = _props.placeholder,
          styles = _props.styles;
      var selectedValue = this.state.selectedValue;


      return _react2.default.createElement(
        'div',
        {
          className: _style2.default.dynamic([['1898192428', [_media2.default.isMobile() || _media2.default.isTablet() ? '20px' : '0', _styles2.default.colors.white, _styles2.default.colors.textTertiary, _styles2.default.colors.textTertiary, _media2.default.isFullScreen() ? '160px' : '100px', _styles2.default.colors.textTertiary]]])
        },
        _react2.default.createElement(_style2.default, {
          styleId: '1898192428',
          css: 'div.__jsx-style-dynamic-selector{margin-bottom:' + (_media2.default.isMobile() || _media2.default.isTablet() ? '20px' : '0') + ';display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}select.__jsx-style-dynamic-selector{padding:10px;font-size:14px;border-radius:4px;border-width:1px;border-style:solid;background-color:' + _styles2.default.colors.white + ';color:' + _styles2.default.colors.textTertiary + ';border-color:' + _styles2.default.colors.textTertiary + ';outline:none;height:40px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:' + (_media2.default.isFullScreen() ? '160px' : '100px') + ';}option.__jsx-style-dynamic-selector{color:' + _styles2.default.colors.textTertiary + ';}option[default].__jsx-style-dynamic-selector{font-style:italic;}',
          dynamic: [_media2.default.isMobile() || _media2.default.isTablet() ? '20px' : '0', _styles2.default.colors.white, _styles2.default.colors.textTertiary, _styles2.default.colors.textTertiary, _media2.default.isFullScreen() ? '160px' : '100px', _styles2.default.colors.textTertiary]
        }),
        _react2.default.createElement(
          'select',
          { value: selectedValue, onChange: this.handleChange, style: styles, className: _style2.default.dynamic([['1898192428', [_media2.default.isMobile() || _media2.default.isTablet() ? '20px' : '0', _styles2.default.colors.white, _styles2.default.colors.textTertiary, _styles2.default.colors.textTertiary, _media2.default.isFullScreen() ? '160px' : '100px', _styles2.default.colors.textTertiary]]])
          },
          _react2.default.createElement(
            'option',
            { value: '', 'default': true, disabled: true, className: _style2.default.dynamic([['1898192428', [_media2.default.isMobile() || _media2.default.isTablet() ? '20px' : '0', _styles2.default.colors.white, _styles2.default.colors.textTertiary, _styles2.default.colors.textTertiary, _media2.default.isFullScreen() ? '160px' : '100px', _styles2.default.colors.textTertiary]]])
            },
            placeholder
          ),
          options.map(function (_ref2, index) {
            var name = _ref2.name,
                value = _ref2.value;
            return _react2.default.createElement(
              'option',
              { value: value, key: index, className: _style2.default.dynamic([['1898192428', [_media2.default.isMobile() || _media2.default.isTablet() ? '20px' : '0', _styles2.default.colors.white, _styles2.default.colors.textTertiary, _styles2.default.colors.textTertiary, _media2.default.isFullScreen() ? '160px' : '100px', _styles2.default.colors.textTertiary]]])
              },
              name
            );
          })
        )
      );
    }
  }]);

  return Select;
}(_react.Component);

Select.propTypes = {
  options: (0, _propTypes.arrayOf)((0, _propTypes.shape)({})).isRequired,
  onChange: _propTypes.func.isRequired,
  placeholder: _propTypes.string.isRequired,
  styles: (0, _propTypes.shape)({})
};
Select.defaultProps = {
  styles: {}
};
exports.default = Select;