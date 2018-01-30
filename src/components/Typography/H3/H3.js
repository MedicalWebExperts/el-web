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

const H3 = ({
  text,
  theme,
  color,
  secondary,
}) => (
  <h3>
    <style jsx>{`
      h3 {
        color: ${theme.colors[color]}
        font-family: ${secondary ? theme.font.secondary : theme.font.primary}
      }
    `}
    </style>
    {text}
  </h3>
);

H3.propTypes = propTypes;
H3.defaultProps = defaultProps;

export default withTheme(H3);
