import React from 'react';
import {
  node, string, bool, oneOf, shape,
} from 'prop-types';

import theme from '../../../styles';

const propTypes = {
  children: node,
  text: string,
  color: oneOf(['primary', 'secondary', 'default']),
  align: oneOf(['left', 'right', 'center', 'inherit', 'justify']),
  noWrap: bool,
  secondary: bool,
  styles: shape({}),
};

const defaultProps = {
  children: '',
  text: '',
  color: 'default',
  align: 'inherit',
  noWrap: false,
  secondary: false,
  styles: {},
};

const Text = ({
  children, text, color, align, noWrap, secondary, styles,
}) => (
  <p style={styles}>
    <style jsx>
      {`
        p {
          color: ${theme.colors[color]};
          text-align: ${align};
          font-family: ${secondary ? theme.font.secondary : theme.font.primary};
          white-space: ${noWrap ? 'nowrap' : 'normal'};
          font-size: ${theme.font.size}px;
          line-height: ${theme.font.size / 10};
          margin: 0;
        }
      `}
    </style>
    {text || children}
  </p>
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
export default Text;
