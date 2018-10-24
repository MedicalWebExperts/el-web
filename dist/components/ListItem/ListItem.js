'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _Data = require('../Data/Data');

var _Data2 = _interopRequireDefault(_Data);

var _Card = require('../Card/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Typography = require('../Typography');

var _media = require('../../utils/media');

var _media2 = _interopRequireDefault(_media);

var _styles = require('../../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  type: (0, _propTypes.oneOf)(['location', 'provider']).isRequired,
  avatar: _propTypes.string.isRequired,
  name: _propTypes.string.isRequired,
  title: _propTypes.string,
  description: _propTypes.string,
  location: _propTypes.string,
  specialty: _propTypes.string,
  address: _propTypes.string,
  city: _propTypes.string,
  state: _propTypes.string,
  action: _propTypes.string.isRequired,
  actionText: _propTypes.string
};

var defaultProps = {
  actionText: '',
  title: '',
  description: '',
  location: '',
  specialty: '',
  address: '',
  city: '',
  state: ''
};

var style = new String('div.jsx-2514993779{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.mainWrapper.jsx-2514993779{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:10px;}.innerWrapper.jsx-2514993779{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.infoWrapper.jsx-2514993779{-webkit-flex:6;-ms-flex:6;flex:6;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-left:20px;margin-top:-5px;}.textWrapper.jsx-2514993779{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:5px;}.iconWrapper.jsx-2514993779{-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}.actionNameWrapper.jsx-2514993779{display:' + (_media2.default.isMobile() || _media2.default.isTablet() ? 'none' : 'flex') + ';-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-top:10px;}');

style.__hash = '2514993779';
var customStyles = {
  name: {
    fontSize: '18px'
  },
  comma: {
    fontSize: '18px',
    fontWeight: 400,
    paddingRight: '5px'
  },
  title: {
    fontSize: '18px',
    color: _styles2.default.colors.textSecondary,
    fontWeight: 400
  },
  h4Title: {
    fontSize: '14px',
    color: _styles2.default.colors.textSecondary,
    fontWeight: 400,
    paddingRight: 5,
    paddingLeft: 5
  },
  h4: {
    fontSize: '14px',
    color: _styles2.default.colors.textSecondary
  },
  text: {
    fontSize: 12
  },
  actionText: {
    fontSize: 14,
    color: _styles2.default.colors.primary
  }
};

var ListItem = function ListItem(_ref) {
  var action = _ref.action,
      actionText = _ref.actionText,
      props = _objectWithoutProperties(_ref, ['action', 'actionText']);

  return _react2.default.createElement(
    _Card2.default,
    { onPress: action },
    _react2.default.createElement(_style2.default, {
      styleId: style.__hash,
      css: style
    }),
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-' + style.__hash + ' ' + 'mainWrapper'
      },
      _react2.default.createElement(_Data2.default, props),
      _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + style.__hash + ' ' + 'actionNameWrapper'
        },
        _react2.default.createElement(_Typography.Text, { text: actionText, styles: customStyles.actionText })
      )
    )
  );
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

exports.default = ListItem;