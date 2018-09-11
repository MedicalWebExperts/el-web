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

const H1 = ({
  text, color, secondary, styles,
}) => (
  <h1 style={styles}>
    <style jsx>
      {`
        h1 {
          color: ${theme.colors[color]};
          font-family: ${secondary ? theme.font.secondary : theme.font.primary};
          font-size: ${theme.font.size * 3}px;
          line-height: ${theme.font.size / 10};
          margin: 0;
        }
      `}
    </style>
    {text}
  </h1>
);

H1.propTypes = propTypes;
H1.defaultProps = defaultProps;

export default H1;
