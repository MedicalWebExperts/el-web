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

var _Avatar = require('../Avatar/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Typography = require('../Typography');

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _styles = require('../../styles');

var _styles2 = _interopRequireDefault(_styles);

var _media = require('../../utils/media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  state: _propTypes.string
};

var defaultProps = {
  title: '',
  description: '',
  location: '',
  specialty: '',
  address: '',
  city: '',
  state: ''
};

var style = new String('div.jsx-104758423{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.innerWrapper.jsx-104758423{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:' + (_media2.default.isMobile() ? 'column' : 'row') + ';-ms-flex-direction:' + (_media2.default.isMobile() ? 'column' : 'row') + ';flex-direction:' + (_media2.default.isMobile() ? 'column' : 'row') + ';-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.avatarWrapper.jsx-104758423{margin-bottom:' + (_media2.default.isMobile() ? '20px' : '0') + ';}.infoWrapper.jsx-104758423{-webkit-flex:6;-ms-flex:6;flex:6;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-left:20px;margin-top:-5px;-webkit-align-items:' + (_media2.default.isMobile() ? 'center' : 'flex-start') + ';-webkit-box-align:' + (_media2.default.isMobile() ? 'center' : 'flex-start') + ';-ms-flex-align:' + (_media2.default.isMobile() ? 'center' : 'flex-start') + ';align-items:' + (_media2.default.isMobile() ? 'center' : 'flex-start') + ';}.textWrapper.jsx-104758423{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:5px;}.iconWrapper.jsx-104758423{-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}');

style.__hash = '104758423';
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

var Data = function Data(_ref) {
  var type = _ref.type,
      avatar = _ref.avatar,
      name = _ref.name,
      title = _ref.title,
      specialty = _ref.specialty,
      location = _ref.location,
      description = _ref.description,
      address = _ref.address,
      city = _ref.city,
      state = _ref.state;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-' + style.__hash + ' ' + 'innerWrapper'
    },
    _react2.default.createElement(_style2.default, {
      styleId: style.__hash,
      css: style
    }),
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-' + style.__hash + ' ' + 'avatarWrapper'
      },
      _react2.default.createElement(_Avatar2.default, { image: avatar, alt: 'Provider\'s image' })
    ),
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-' + style.__hash + ' ' + 'infoWrapper'
      },
      _react2.default.createElement(
        'div',
        {
          className: 'jsx-' + style.__hash + ' ' + 'textWrapper'
        },
        _react2.default.createElement(_Typography.H3, { text: name, styles: customStyles.name }),
        type !== 'location' && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(_Typography.H3, { text: ',', styles: customStyles.comma }),
          _react2.default.createElement(_Typography.H3, { text: title, styles: customStyles.title })
        )
      ),
      type !== 'location' ? _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + style.__hash + ' ' + 'iconWrapper'
          },
          _react2.default.createElement(_Icon2.default, {
            icon: _freeSolidSvgIcons.faMedkit,
            size: 'sm',
            color: _styles2.default.colors.textSecondary,
            height: '14px',
            width: '14px'
          }),
          _react2.default.createElement(_Typography.H4, { text: 'Specialty:', styles: customStyles.h4Title }),
          _react2.default.createElement(_Typography.H4, { text: specialty, styles: customStyles.h4 })
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + style.__hash + ' ' + 'iconWrapper'
          },
          _react2.default.createElement(_Icon2.default, {
            icon: _freeSolidSvgIcons.faMapMarkerAlt,
            size: 'sm',
            color: _styles2.default.colors.textSecondary,
            height: '14px',
            width: '14px'
          }),
          _react2.default.createElement(_Typography.H4, { text: 'Location:', styles: customStyles.h4Title }),
          _react2.default.createElement(_Typography.H4, { text: location, styles: customStyles.h4 })
        )
      ) : _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-' + style.__hash + ' ' + 'iconWrapper'
          },
          _react2.default.createElement(_Icon2.default, {
            icon: _freeSolidSvgIcons.faMapMarkerAlt,
            size: 'sm',
            color: _styles2.default.colors.textSecondary,
            height: '14px',
            width: '14px'
          }),
          _react2.default.createElement(_Typography.H4, { text: 'Address:', styles: customStyles.h4Title }),
          _react2.default.createElement(_Typography.H4, { text: address + ', ' + city + ', ' + state, styles: customStyles.h4 })
        )
      ),
      type !== 'location' && _react2.default.createElement(_Typography.Text, { text: description, styles: customStyles.text })
    )
  );
};

Data.propTypes = propTypes;
Data.defaultProps = defaultProps;

exports.default = Data;