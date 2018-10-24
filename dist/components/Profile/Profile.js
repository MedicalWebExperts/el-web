'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

var _Data = require('../Data/Data');

var _Data2 = _interopRequireDefault(_Data);

var _Information = require('../Information/Information');

var _Information2 = _interopRequireDefault(_Information);

var _Map = require('../Map/Map');

var _Map2 = _interopRequireDefault(_Map);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _media = require('../../utils/media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  styles: (0, _propTypes.shape)({}),
  data: (0, _propTypes.shape)({}).isRequired,
  onPress: _propTypes.string
};

var defaultProps = {
  styles: {},
  onPress: ''
};

var style = new String('.wrapper.jsx-73113579{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.providerWrapper.jsx-73113579{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:30px;}.arrow.jsx-73113579{-webkit-flex:2;-ms-flex:2;flex:2;text-align:center;}.providerData.jsx-73113579{-webkit-flex:8;-ms-flex:8;flex:8;margin-left:' + (_media2.default.isMobile() ? '-10%' : '0') + ';}.informationWrapper.jsx-73113579{margin-left:' + (_media2.default.isMobile() ? '6%' : '20%') + ';margin-right:' + (_media2.default.isMobile() ? '6%' : '20%') + ';}');

style.__hash = '73113579';
var Profile = function Profile(_ref) {
  var styles = _ref.styles,
      data = _ref.data,
      onPress = _ref.onPress;
  return _react2.default.createElement(
    'div',
    { style: styles, className: 'jsx-' + style.__hash + ' ' + 'wrapper'
    },
    _react2.default.createElement(_style2.default, {
      styleId: style.__hash,
      css: style
    }),
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-' + style.__hash + ' ' + 'providerWrapper'
      },
      _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + style.__hash + ' ' + 'arrow'
        },
        _react2.default.createElement(
          'a',
          { href: onPress, className: 'jsx-' + style.__hash
          },
          _react2.default.createElement(_Icon2.default, { icon: _freeSolidSvgIcons.faArrowLeft, size: '8x' })
        )
      ),
      _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + style.__hash + ' ' + 'providerData'
        },
        _react2.default.createElement(_Data2.default, data)
      )
    ),
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-' + style.__hash + ' ' + 'informationWrapper'
      },
      _react2.default.createElement(_Information2.default, { data: data.information }),
      _react2.default.createElement(_Map2.default, { url: data.map })
    )
  );
};

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

exports.default = Profile;