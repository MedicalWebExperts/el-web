import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '../../../theme';

const propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  theme: PropTypes.shape({}).isRequired,
};

const defaultProps = {
  color: 'default',
  secondary: false,
};

const H1 = ({
  text,
  theme,
  color,
  secondary,
}) => (
  <h1>
    <style jsx>{`
      h1 {
        color: ${theme.colors[color]}
        font-family: ${secondary ? theme.font.secondary : theme.font.primary}
      }
    `}
    </style>
    {text}
  </h1>
);

H1.propTypes = propTypes;
H1.defaultProps = defaultProps;

export default withTheme(H1);
