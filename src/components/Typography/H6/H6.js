import React from 'react';
import {
  string, bool, oneOf, shape,
} from 'prop-types';

import theme from '../../../styles';

const propTypes = {
  text: string.isRequired,
  secondary: bool,
  color: oneOf(['primary', 'secondary', 'default']),
  styles: shape({}),
};

const defaultProps = {
  color: 'default',
  secondary: false,
  styles: {},
};

const H6 = ({
  text, color, secondary, styles,
}) => (
  <h6 style={styles}>
    <style jsx>
      {`
        h6 {
          color: ${theme.colors[color]};
          font-family: ${secondary ? theme.font.secondary : theme.font.primary};
          font-size: ${theme.font.size}px;
          line-height: ${theme.font.size / 10};
          margin: 0;
        }
      `}
    </style>
    {text}
  </h6>
);

H6.propTypes = propTypes;
H6.defaultProps = defaultProps;

export default H6;
