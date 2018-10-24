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

var _Input = require('../Input/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Select = require('../Select/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _media = require('../../utils/media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchForm = function (_Component) {
  _inherits(SearchForm, _Component);

  function SearchForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchForm.__proto__ || Object.getPrototypeOf(SearchForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      searchValues: [],
      advancedSearch: false
    }, _this.handleChange = function (selectedItem) {
      var name = selectedItem.name,
          value = selectedItem.value;

      _this.setState(function (prevState) {
        return {
          searchValues: Object.assign({}, prevState.searchValues, _defineProperty({}, name, value))
        };
      });
    }, _this.handleSearch = function () {
      _this.props.onSearch(_this.state.searchValues);
    }, _this.showAdvancedSearch = function () {
      _this.setState(function (prevState) {
        return { advancedSearch: !prevState.advancedSearch };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchForm, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fields = _props.fields,
          buttonText = _props.buttonText,
          styles = _props.styles;
      var advancedSearch = this.state.advancedSearch;


      return _react2.default.createElement(
        'div',
        { style: styles, className: _style2.default.dynamic([['2408485596', [_media2.default.isMobile() || _media2.default.isTablet() ? 'column' : 'row']]])
        },
        _react2.default.createElement(_style2.default, {
          styleId: '2408485596',
          css: 'div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:' + (_media2.default.isMobile() || _media2.default.isTablet() ? 'column' : 'row') + ';-ms-flex-direction:' + (_media2.default.isMobile() || _media2.default.isTablet() ? 'column' : 'row') + ';flex-direction:' + (_media2.default.isMobile() || _media2.default.isTablet() ? 'column' : 'row') + ';-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;width:100%;}',
          dynamic: [_media2.default.isMobile() || _media2.default.isTablet() ? 'column' : 'row']
        }),
        fields.map(function (field, key) {
          if (field.type === 'input') {
            return _react2.default.createElement(_Input2.default, {
              key: key,
              style: field.styles,
              type: 'text',
              name: field.name,
              value: field.value,
              onChange: _this2.handleChange,
              placeholder: field.placeholder
            });
          }
          return ((_media2.default.isMobile() || _media2.default.isTablet()) && advancedSearch || (_media2.default.isTabletLanscape() || _media2.default.isFullScreen()) && !advancedSearch) && _react2.default.createElement(_Select2.default, {
            key: key,
            options: field.options,
            onChange: _this2.handleChange,
            styles: field.styles,
            placeholder: field.placeholder
          });
        }),
        (_media2.default.isMobile() || _media2.default.isTablet()) && _react2.default.createElement(_Button2.default, {
          outline: true,
          onClick: this.showAdvancedSearch,
          text: advancedSearch ? 'Close Advanced Search' : 'Advanced Search'
        }),
        _react2.default.createElement(_Button2.default, { onClick: this.handleSearch, text: buttonText })
      );
    }
  }]);

  return SearchForm;
}(_react.Component);

SearchForm.propTypes = {
  fields: (0, _propTypes.arrayOf)((0, _propTypes.shape)({})).isRequired,
  onSearch: _propTypes.func.isRequired,
  styles: (0, _propTypes.shape)({}),
  buttonText: _propTypes.string
};
SearchForm.defaultProps = {
  styles: {},
  buttonText: 'Search'
};
exports.default = SearchForm;