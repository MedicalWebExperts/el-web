import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as ThemeProviderBase } from 'theming';
import DefaultTheme from './default';

const propTypes = {
  children: PropTypes.element.isRequired,
  theme: PropTypes.oneOfType([PropTypes.shape({})]),
};

const defaultProps = {
  theme: {},
};

const ThemeProvider = ({ children, theme }) => {
  // check a util funcion for deep clone/merge
  const mergedTheme = Object.keys(theme).length === 0 ? DefaultTheme : theme;

  return (
    <ThemeProviderBase theme={mergedTheme}>
      {children}
    </ThemeProviderBase>
  );
};

ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defaultProps;

export default ThemeProvider;
