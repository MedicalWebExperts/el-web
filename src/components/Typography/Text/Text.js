import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '../../../theme';

const propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  align: PropTypes.oneOf(['left', 'right', 'center', 'inherit', 'justify']),
  noWrap: PropTypes.bool,
  secondary: PropTypes.bool,
  theme: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
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
  children,
  text,
  color,
  align,
  noWrap,
  secondary,
  theme,
  styles,
}) => (
  <p style={styles}>
    <style jsx>{`
      p {
        color: ${theme.colors[color]}
        text-align: ${align}
        font-family: ${secondary ? theme.font.secondary : theme.font.primary}
        white-space: ${noWrap ? 'nowrap' : 'normal'}
        font-size: ${theme.font.size}px
        line-height: ${theme.font.size / 10}
        margin-top: 0
        margin-bottom: ${theme.spacing}px
      }
    `}
    </style>
    {text || children}
  </p>
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
export default withTheme(Text);
