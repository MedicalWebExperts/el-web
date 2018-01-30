import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '../../../theme';

const propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  gutterBottom: PropTypes.number,
  align: PropTypes.oneOf(['left', 'right', 'center', 'inherit', 'justify']),
  noWrap: PropTypes.bool,
  secondary: PropTypes.bool,
  theme: PropTypes.shape({}).isRequired,
};

const defaultProps = {
  children: '',
  text: '',
  color: 'default',
  align: 'inherit',
  gutterBottom: 0,
  noWrap: false,
  secondary: false,
};

const Text = ({
  children,
  text,
  color,
  gutterBottom,
  align,
  noWrap,
  secondary,
  theme,
}) => (
  <p>
    <style jsx>{`
      p {
        color: ${theme.colors[color]}
        text-align: ${align}
        font-family: ${secondary ? theme.font.secondary : theme.font.primary}
        white-space: ${noWrap ? 'nowrap' : 'normal'}
        line-height: ${gutterBottom}
      }
    `}
    </style>
    {text || children}
  </p>
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
export default withTheme(Text);
