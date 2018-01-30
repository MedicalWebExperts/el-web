import React from 'react';
import renderer from 'react-test-renderer';

import H4 from './H4';
import { ThemeProvider } from '../../../theme';

describe('Component H4 Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer
      .create(<ThemeProvider><H4 text="Heading 4" /></ThemeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('primary color of the theme', () => {
    const tree = renderer
      .create(<ThemeProvider><H4 text="Heading 4" color="primary" /></ThemeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('secondary font-family of the theme', () => {
    const tree = renderer
      .create(<ThemeProvider><H4 text="Heading 4" secondary /></ThemeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
