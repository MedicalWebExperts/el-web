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

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

var _Typography = require('../Typography');

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _styles = require('../../styles');

var _styles2 = _interopRequireDefault(_styles);

var _media = require('../../utils/media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var customStyle = {
  title: {
    fontSize: 22,
    fontWeight: 400
  },
  titleNumber: {
    fontSize: 22,
    marginRight: 10
  },
  text: {
    color: _styles2.default.colors.textSecondary
  }
};

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isGrid: !(_media2.default.isMobile() || _media2.default.isTablet())
    }, _this.handleClickGrid = function () {
      return _this.setState({ isGrid: true });
    }, _this.handleClickRow = function () {
      return _this.setState({ isGrid: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          styles = _props.styles,
          title = _props.title,
          items = _props.items;

      return _react2.default.createElement(
        'div',
        { style: styles, className: _style2.default.dynamic([['1121327944', [_media2.default.isMobile() || _media2.default.isTablet() ? 'none' : 'flex', _this2.state.isGrid && (!_media2.default.isMobile() || !_media2.default.isTablet()) ? '32%' : '100%', _styles2.default.colors.textSecondary, _styles2.default.colors.primary]]])
        },
        _react2.default.createElement(_style2.default, {
          styleId: '1121327944',
          css: '.headerWrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px;}.titleWrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.changeViewWrapper.__jsx-style-dynamic-selector{display:' + (_media2.default.isMobile() || _media2.default.isTablet() ? 'none' : 'flex') + ';-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.itemsWrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.itemWrapper.__jsx-style-dynamic-selector{margin-bottom:10px;margin-left:10px;width:' + (this.state.isGrid && (!_media2.default.isMobile() || !_media2.default.isTablet()) ? '32%' : '100%') + ';}.item-wrapper.__jsx-style-dynamic-selector:last-child{-webkit-box-pack:left;-webkit-justify-content:flex-left;-ms-flex-pack:left;justify-content:flex-left;}.centerIcon.__jsx-style-dynamic-selector{margin-left:10px;}.icon.__jsx-style-dynamic-selector{border:none;outline:none;color:' + _styles2.default.colors.textSecondary + ';}.icon.__jsx-style-dynamic-selector::active{color:' + _styles2.default.colors.primary + ';}',
          dynamic: [_media2.default.isMobile() || _media2.default.isTablet() ? 'none' : 'flex', _this2.state.isGrid && (!_media2.default.isMobile() || !_media2.default.isTablet()) ? '32%' : '100%', _styles2.default.colors.textSecondary, _styles2.default.colors.primary]
        }),
        _react2.default.createElement(
          'div',
          {
            className: _style2.default.dynamic([['1121327944', [_media2.default.isMobile() || _media2.default.isTablet() ? 'none' : 'flex', _this2.state.isGrid && (!_media2.default.isMobile() || !_media2.default.isTablet()) ? '32%' : '100%', _styles2.default.colors.textSecondary, _styles2.default.colors.primary]]]) + ' ' + 'headerWrapper'
          },
          _react2.default.createElement(
            'div',
            {
              className: _style2.default.dynamic([['1121327944', [_media2.default.isMobile() || _media2.default.isTablet() ? 'none' : 'flex', _this2.state.isGrid && (!_media2.default.isMobile() || !_media2.default.isTablet()) ? '32%' : '100%', _styles2.default.colors.textSecondary, _styles2.default.colors.primary]]]) + ' ' + 'titleWrapper'
            },
            _react2.default.createElement(_Typography.H2, { text: items.length.toString(), styles: customStyle.titleNumber }),
            _react2.default.createElement(_Typography.H2, { text: title, styles: customStyle.title })
          ),
          _react2.default.createElement(
            'div',
            {
              className: _style2.default.dynamic([['1121327944', [_media2.default.isMobile() || _media2.default.isTablet() ? 'none' : 'flex', _this2.state.isGrid && (!_media2.default.isMobile() || !_media2.default.isTablet()) ? '32%' : '100%', _styles2.default.colors.textSecondary, _styles2.default.colors.primary]]]) + ' ' + 'changeViewWrapper'
            },
            _react2.default.createElement(_Typography.Text, { text: 'Change View', styles: customStyle.text }),
            _react2.default.createElement(
              'button',
              { type: 'button', onClick: this.handleClickRow, className: _style2.default.dynamic([['1121327944', [_media2.default.isMobile() || _media2.default.isTablet() ? 'none' : 'flex', _this2.state.isGrid && (!_media2.default.isMobile() || !_media2.default.isTablet()) ? '32%' : '100%', _styles2.default.colors.textSecondary, _styles2.default.colors.primary]]]) + ' ' + 'icon centerIcon'
              },
              _react2.default.createElement(_Icon2.default, {
                icon: _freeSolidSvgIcons.faSlidersH,
                size: '2x',
                color: this.state.isGrid ? _styles2.default.colors.textSecondary : _styles2.default.colors.primary
              })
            ),
            _react2.default.createElement(
              'button',
              { type: 'button', onClick: this.handleClickGrid, className: _style2.default.dynamic([['1121327944', [_media2.default.isMobile() || _media2.default.isTablet() ? 'none' : 'flex', _this2.state.isGrid && (!_media2.default.isMobile() || !_media2.default.isTablet()) ? '32%' : '100%', _styles2.default.colors.textSecondary, _styles2.default.colors.primary]]]) + ' ' + 'icon'
              },
              _react2.default.createElement(_Icon2.default, {
                icon: _freeSolidSvgIcons.faGripHorizontal,
                size: '2x',
                color: this.state.isGrid ? _styles2.default.colors.primary : _styles2.default.colors.textSecondary
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          {
            className: _style2.default.dynamic([['1121327944', [_media2.default.isMobile() || _media2.default.isTablet() ? 'none' : 'flex', _this2.state.isGrid && (!_media2.default.isMobile() || !_media2.default.isTablet()) ? '32%' : '100%', _styles2.default.colors.textSecondary, _styles2.default.colors.primary]]]) + ' ' + 'itemsWrapper'
          },
          items.map(function (item, key) {
            return _react2.default.createElement(
              'div',
              { key: key, className: _style2.default.dynamic([['1121327944', [_media2.default.isMobile() || _media2.default.isTablet() ? 'none' : 'flex', _this2.state.isGrid && (!_media2.default.isMobile() || !_media2.default.isTablet()) ? '32%' : '100%', _styles2.default.colors.textSecondary, _styles2.default.colors.primary]]]) + ' ' + 'itemWrapper'
              },
              item
            );
          })
        )
      );
    }
  }]);

  return List;
}(_react.Component);

List.propTypes = {
  styles: (0, _propTypes.shape)({}),
  title: _propTypes.string,
  items: (0, _propTypes.arrayOf)((0, _propTypes.shape)({})).isRequired
};
List.defaultProps = {
  styles: {},
  title: 'Doctors'
};
exports.default = List;