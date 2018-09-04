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

const H3 = ({
  text, color, secondary, styles,
}) => (
  <h3 style={styles}>
    <style jsx>
      {`
      h3 {
        color: ${theme.colors[color]}
        font-family: ${secondary ? theme.font.secondary : theme.font.primary}
        font-size: ${theme.font.size * 2.1}px
        line-height: ${theme.font.size / 10}
        margin-top: 0
        margin-bottom: ${theme.spacing * 1.6}px
      }
    `}
    </style>
    {text}
  </h3>
);

H3.propTypes = propTypes;
H3.defaultProps = defaultProps;

export default H3;
