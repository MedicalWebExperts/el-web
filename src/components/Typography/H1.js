import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '../../theme';

const propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  theme: PropTypes.shape({}).isRequired,
};

const defaultProps = {
  color: 'default',
};

const H1 = ({ text, theme, color }) => (
  <h1>
    <style jsx>{`
      h1 {
        color: ${theme.colors[color]}
      }
    `}
    </style>
    {text}
  </h1>
);

H1.propTypes = propTypes;
H1.defaultProps = defaultProps;

export default withTheme(H1);
