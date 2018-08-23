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

const H6 = ({
  text, theme, color, secondary, styles,
}) => (
  <h6 style={styles}>
    <style jsx>
      {`
      h6 {
        color: ${theme.colors[color]}
        font-family: ${secondary ? theme.font.secondary : theme.font.primary}
        font-size: ${theme.font.size * theme.typography.h6.fontSize}px
        line-height: ${theme.font.size / 10}
        margin-top: 0
        margin-bottom: ${theme.spacing * theme.typography.h6.marginBottom}px
      }
    `}
    </style>
    {text}
  </h6>
);

H6.propTypes = propTypes;
H6.defaultProps = defaultProps;

export default withTheme(H6);
