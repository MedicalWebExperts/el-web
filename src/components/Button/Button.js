import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '../../theme';

const propTypes = {
  text: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
  theme: PropTypes.shape({}).isRequired,
};

const defaultProps = {
  outline: false,
  type: 'primary',
};


const Button = ({
  text, outline, type, theme,
}) => {
  const { colors, button } = theme;
  // check type
  let buttonClassName = 'default';
  if (outline) {
    buttonClassName = 'outline';
  }
  // check colors
  let backgroundColor = null;
  let textColor = null;
  switch (type) {
    case 'secondary':
      backgroundColor = colors.secondary;
      textColor = colors.buttonSecondaryText;
      break;
    case 'success':
      backgroundColor = colors.success;
      textColor = colors.buttonSuccessText;
      break;
    case 'warning':
      backgroundColor = colors.warning;
      textColor = colors.buttonWarningText;
      break;
    case 'danger':
      backgroundColor = colors.danger;
      textColor = colors.buttonDangerText;
      break;
    default:
      backgroundColor = colors.primary;
      textColor = colors.buttonPrimaryText;
      break;
  }

  return (
    <div>
      <style jsx>
        {`
          button {
            text-align: ${button.textAlign};
            padding: ${button.padding};
            font-size: ${button.fontSize};
            cursor: ${button.cursor};
            font-weight: ${button.fontWeight};
            border-radius: ${button.borderRadius};
            border: ${button.border};
          }
          button:active,
          button:focus{
            outline: ${button.ouline};
          }
          button.default {
            background-color: ${backgroundColor};
            color: ${textColor};
          }
          button.default:hover{
            box-shadow: 0 2px 6px rgba(0,0,0,.3);
          }
          button.default:active,
          button.default:focus{
            box-shadow: 0 2px 4px rgba(0,0,0,.3);
          }
          button.outline {
            background-color: ${colors.transparent};
            border: solid 1px ${colors.primary};
            color: ${colors.primary};
          }
          button.outline:hover{
            opacity: .8;
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

export default withTheme(Button);
