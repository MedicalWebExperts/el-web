import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '../../theme';

const propTypes = {
  text: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
  theme: PropTypes.shape({}).isRequired,
};

const defaultProps = {
  outline: false,
  color: 'primary',
};

const Input = ({
  value, outline, color, theme, handleChange,
}) => {
  const { colors, button } = theme;
  // check type
  let inputClassName = 'default';
  if (outline) {
    inputClassName = 'outline';
  }
  // check colors
  let backgroundColor = null;
  let textColor = null;
  switch (color) {
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
          }
          button.default {
            background-color: ${backgroundColor};
            color: ${textColor};
          }
          button.outline {
            background-color: ${colors.transparent};
            border: solid 1px ${backgroundColor};
            color: ${backgroundColor};
          }
        `}
      </style>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default withTheme(Input);
