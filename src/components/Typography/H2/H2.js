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
          margin: 0;
        }
      `}
    </style>
    {text}
  </h2>
);

H2.propTypes = propTypes;
H2.defaultProps = defaultProps;

export default H2;
