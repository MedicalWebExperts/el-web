import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '../../../theme';

const propTypes = {
  text: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  theme: PropTypes.shape({}).isRequired,
  styles: PropTypes.shape({}),
};

const defaultProps = {
  color: 'default',
  secondary: false,
  styles: {},
};

const H1 = ({
  text, theme, color, secondary, styles,
}) => (
  <h1 style={styles}>
    <style jsx>
      {`
      h1 {
        color: ${theme.colors[color]}
        font-family: ${secondary ? theme.font.secondary : theme.font.primary}
        font-size: ${theme.font.size * theme.typography.h1.fontSize}px
        line-height: ${theme.font.size / 10}
        margin-top: 0
        margin-bottom: ${theme.spacing * theme.typography.h1.marginBottom}px
      }
    `}
    </style>
    {text}
  </h1>
);

H1.propTypes = propTypes;
H1.defaultProps = defaultProps;

export default withTheme(H1);
