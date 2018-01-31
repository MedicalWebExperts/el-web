import React from 'react';
import renderer from 'react-test-renderer';

import H3 from './H3';
import { ThemeProvider } from '../../../theme';

describe('Component H3 Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer
      .create(<ThemeProvider><H3 text="Heading 3" /></ThemeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('primary color of the theme', () => {
    const tree = renderer
      .create(<ThemeProvider><H3 text="Heading 3" color="primary" /></ThemeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('secondary font-family of the theme', () => {
    const tree = renderer
      .create(<ThemeProvider><H3 text="Heading 3" secondary /></ThemeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('added optional style inline prop', () => {
    const myStyles = {
      marginTop: 30,
      lineHeight: 2,
    };
    const tree = renderer
      .create(<ThemeProvider><H3 text="Heading 1" styles={myStyles} /></ThemeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
