'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  image: _propTypes2.default.string.isRequired,
  alt: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.oneOf(['small', 'normal', 'large'])
};

var defaultProps = {
  size: 'normal'
};

var Avatar = function Avatar(_ref) {
  var image = _ref.image,
      alt = _ref.alt,
      size = _ref.size;

  // check sizes
  var avatarWidth = null;
  switch (size) {
    case 'small':
      avatarWidth = '60px';
      break;
    case 'large':
      avatarWidth = '200px';
      break;
    default:
      avatarWidth = '100px';
      break;
  }

  return _react2.default.createElement(
    'div',
    {
      className: _style2.default.dynamic([['1524354918', [avatarWidth]]])
    },
    _react2.default.createElement(_style2.default, {
      styleId: '1524354918',
      css: 'img.__jsx-style-dynamic-selector{border-radius:100%;display:block;width:' + avatarWidth + ';}',
      dynamic: [avatarWidth]
    }),
    _react2.default.createElement('img', { src: image, alt: alt, size: size, className: _style2.default.dynamic([['1524354918', [avatarWidth]]])
    })
  );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

exports.default = Avatar;