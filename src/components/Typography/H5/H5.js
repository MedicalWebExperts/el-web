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

const H5 = ({
  text,
  theme,
  color,
  secondary,
}) => (
  <h5>
    <style jsx>{`
      h5 {
        color: ${theme.colors[color]}
        font-family: ${secondary ? theme.font.secondary : theme.font.primary}
      }
    `}
    </style>
    {text}
  </h5>
);

H5.propTypes = propTypes;
H5.defaultProps = defaultProps;

export default withTheme(H5);
