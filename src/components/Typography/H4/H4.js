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

const H4 = ({
  text,
  theme,
  color,
  secondary,
  styles,
}) => (
  <h4 style={styles}>
    <style jsx>{`
      h4 {
        color: ${theme.colors[color]}
        font-family: ${secondary ? theme.font.secondary : theme.font.primary}
        font-size: ${theme.font.size * theme.typography.h4.fontSize}px
        line-height: ${theme.font.size / 10}
        margin-top: 0
        margin-bottom: ${theme.spacing * theme.typography.h4.marginBottom}px
      }
    `}
    </style>
    {text}
  </h4>
);

H4.propTypes = propTypes;
H4.defaultProps = defaultProps;

export default withTheme(H4);
