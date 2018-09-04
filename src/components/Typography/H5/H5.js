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

const H5 = ({
  text, color, secondary, styles,
}) => (
  <h5 style={styles}>
    <style jsx>
      {`
      h5 {
        color: ${theme.colors[color]}
        font-family: ${secondary ? theme.font.secondary : theme.font.primary}
        font-size: ${theme.font.size * 1.12}px
        line-height: ${theme.font.size / 10}
        margin-top: 0
        margin-bottom: ${theme.spacing * 1.6}px
      }
    `}
    </style>
    {text}
  </h5>
);

H5.propTypes = propTypes;
H5.defaultProps = defaultProps;

export default H5;
