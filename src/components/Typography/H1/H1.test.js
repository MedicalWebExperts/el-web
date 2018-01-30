import React from 'react';
import renderer from 'react-test-renderer';

import H1 from './H1';
import { ThemeProvider } from '../../../theme';

describe('Component H1 Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer
      .create(<ThemeProvider><H1 text="Heading 1" /></ThemeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('primary color of the theme', () => {
    const tree = renderer
      .create(<ThemeProvider><H1 text="Heading 1" color="primary" /></ThemeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('secondary font-family of the theme', () => {
    const tree = renderer
      .create(<ThemeProvider><H1 text="Heading 1" secondary /></ThemeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
