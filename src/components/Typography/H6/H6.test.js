import React from 'react';
import renderer from 'react-test-renderer';

import H6 from './H6';
import { ThemeProvider } from '../../../theme';

describe('Component H6 Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer
      .create(<ThemeProvider><H6 text="Heading 6" /></ThemeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('primary color of the theme', () => {
    const tree = renderer
      .create(<ThemeProvider><H6 text="Heading 6" color="primary" /></ThemeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('secondary font-family of the theme', () => {
    const tree = renderer
      .create(<ThemeProvider><H6 text="Heading 6" secondary /></ThemeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('added optional style inline prop', () => {
    const myStyles = {
      marginTop: 30,
      lineHeight: 2,
    };
    const tree = renderer
      .create(<ThemeProvider><H6 text="Heading 1" styles={myStyles} /></ThemeProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
