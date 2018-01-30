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

const H2 = ({
  text,
  theme,
  color,
  secondary,
}) => (
  <h2>
    <style jsx>{`
      h2 {
        color: ${theme.colors[color]}
        font-family: ${secondary ? theme.font.secondary : theme.font.primary}
      }
    `}
    </style>
    {text}
  </h2>
);

H2.propTypes = propTypes;
H2.defaultProps = defaultProps;

export default withTheme(H2);
