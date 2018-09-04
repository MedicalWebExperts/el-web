import React from 'react';
import PropTypes from 'prop-types';

import theme from '../../../styles';

const propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  styles: PropTypes.shape({}),
};

const defaultProps = {
  color: 'default',
  secondary: false,
  styles: {},
};

const H1 = ({
  text, color, secondary, styles,
}) => (
  <h1 style={styles}>
    <style jsx>
      {`
      h1 {
        color: ${theme.colors[color]}
        font-family: ${secondary ? theme.font.secondary : theme.font.primary}
        font-size: ${theme.font.size * 3}px
        line-height: ${theme.font.size / 10}
        margin-top: 0
        margin-bottom: ${theme.spacing * 2}px
      }
    `}
    </style>
    {text}
  </h1>
);

H1.propTypes = propTypes;
H1.defaultProps = defaultProps;

export default H1;
