import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '../../theme';


const propTypes = {
  text: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  theme: PropTypes.shape({}).isRequired,
};

const defaultProps = {
  outline: false,
};

const Button = ({
  text,
  outline,
  theme,
}) => {
  let buttonClassName = 'default';
  if (outline) {
    buttonClassName = 'outline';
  }
  return (
    <div>
      <style jsx>{`
        button {
          text-align: ${theme.button.textAlign};
          padding: ${theme.button.padding};
          font-size: ${theme.button.fontSize}px;
          cursor: ${theme.button.cursor};
        }
        button.default {
          background-color: ${theme.colors.buttonPrimaryBackground};
          color: ${theme.colors.buttonPrimaryColor};
        }
        button.outline {
          background-color: '${theme.colors.transparent}';
          border: solid 1px ${theme.colors.buttonPrimaryBackground};
          color: ${theme.colors.buttonPrimaryBackground};
        }
      `}
      </style>
      <button className={buttonClassName}>{text}</button>
    </div>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withTheme(Button);
