import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../styles';

const propTypes = {
  text: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
};

const defaultProps = {
  outline: false,
  color: 'primary',
};

const Button = ({ text, outline, color }) => {
  // check type
  let buttonClassName = 'default';
  if (outline) {
    buttonClassName = 'outline';
  }
  // check colors
  let backgroundColor = null;
  let textColor = null;
  switch (color) {
    case 'secondary':
      backgroundColor = theme.colors.secondary;
      textColor = theme.colors.buttonSecondaryText;
      break;
    case 'success':
      backgroundColor = theme.colors.success;
      textColor = theme.colors.buttonSuccessText;
      break;
    case 'warning':
      backgroundColor = theme.colors.warning;
      textColor = theme.colors.buttonWarningText;
      break;
    case 'danger':
      backgroundColor = theme.colors.danger;
      textColor = theme.colors.buttonDangerText;
      break;
    default:
      backgroundColor = theme.colors.primary;
      textColor = theme.colors.buttonPrimaryText;
      break;
  }

  return (
    <div>
      <style jsx>
        {`
          button {
            text-align: center;
            padding: 15px 30px;
            font-size: 16px;
            cursor: 'pointer';
          }
          button.default {
            background-color: ${backgroundColor};
            color: ${textColor};
            outline: none;
          }
          button.outline {
            background-color: ${theme.colors.transparent};
            border: solid 1px ${backgroundColor};
            color: ${backgroundColor};
            outline: none;
          }
        `}
      </style>
      <button type="button" className={buttonClassName}>
        {text}
      </button>
    </div>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
