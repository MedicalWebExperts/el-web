import React from 'react';
import {
  string, bool, oneOf, shape, func,
} from 'prop-types';
import theme from '../../styles';
import media from '../../utils/media';

const propTypes = {
  text: string.isRequired,
  outline: bool,
  type: oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
  styles: shape({}),
  onClick: func.isRequired,
};

const defaultProps = {
  outline: false,
  type: 'primary',
  styles: {},
};

const Button = ({
  text, outline, type, styles, onClick,
}) => {
  // check type
  let buttonClassName = 'default';
  if (outline) {
    buttonClassName = 'outline';
  }
  // check colors
  let backgroundColor = null;
  switch (type) {
    case 'secondary':
      backgroundColor = theme.colors.secondary;
      break;
    case 'success':
      backgroundColor = theme.colors.success;
      break;
    case 'warning':
      backgroundColor = theme.colors.warning;
      break;
    case 'danger':
      backgroundColor = theme.colors.danger;
      break;
    default:
      backgroundColor = theme.colors.primary;
      break;
  }

  return (
    <div>
      <style jsx>
        {`
          div {
            margin-bottom: ${media.isMobile() || media.isTablet() ? '20px' : '0'};
            display: flex;
          }
          button {
            text-align: center;
            padding: 11px 30px;
            font-size: 14px;
            cursor: pointer;
            font-weight: bold;
            border-radius: 4px;
            border: none;
            outline: none;
            width: 100%;
            min-width: 160px;
          }
          button.default {
            background-color: ${backgroundColor};
            color: ${theme.colors.white};
          }
          button.default:hover {
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          }
          button.default:active,
          button.default:focus {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          }
          button.outline {
            background-color: ${theme.colors.transparent};
            border: solid 1px ${theme.colors.primary};
            color: ${theme.colors.primary};
          }
          button.outline:hover {
            opacity: 0.8;
          }
        `}
      </style>
      <button type="button" className={buttonClassName} style={styles} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
