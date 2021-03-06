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

const H5 = ({
  text, color, secondary, styles,
}) => (
  <h5 style={styles}>
    <style jsx>
      {`
        h5 {
          color: ${theme.colors[color]};
          font-family: ${secondary ? theme.font.secondary : theme.font.primary};
          font-size: ${theme.font.size * 1.12}px;
          line-height: ${theme.font.size / 10};
          margin: 0;
        }
      `}
    </style>
    {text}
  </h5>
);

H5.propTypes = propTypes;
H5.defaultProps = defaultProps;

export default H5;
