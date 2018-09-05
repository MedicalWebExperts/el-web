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

const H2 = ({
  text, color, secondary, styles,
}) => (
  <h2 style={styles}>
    <style jsx>
      {`
        h2 {
          color: ${theme.colors[color]};
          font-family: ${secondary ? theme.font.secondary : theme.font.primary};
          font-size: ${theme.font.size * 2.5}px;
          line-height: ${theme.font.size / 10};
          margin-top: 0;
          margin-bottom: ${theme.spacing * 1.6}px;
        }
      `}
    </style>
    {text}
  </h2>
);

H2.propTypes = propTypes;
H2.defaultProps = defaultProps;

export default H2;
