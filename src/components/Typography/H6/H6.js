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

const H6 = ({
  text,
  theme,
  color,
  secondary,
}) => (
  <h6>
    <style jsx>{`
      h6 {
        color: ${theme.colors[color]}
        font-family: ${secondary ? theme.font.secondary : theme.font.primary}
      }
    `}
    </style>
    {text}
  </h6>
);

H6.propTypes = propTypes;
H6.defaultProps = defaultProps;

export default withTheme(H6);
