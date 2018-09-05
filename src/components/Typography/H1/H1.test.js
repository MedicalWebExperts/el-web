import React from 'react';
import renderer from 'react-test-renderer';

import H1 from './H1';

describe('Component H1 Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer.create(<H1 text="Heading 1" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('primary color of the theme', () => {
    const tree = renderer.create(<H1 text="Heading 1" color="primary" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('secondary font-family of the theme', () => {
    const tree = renderer.create(<H1 text="Heading 1" secondary />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('added optional style inline prop', () => {
    const myStyles = {
      marginTop: 30,
      lineHeight: 2,
    };
    const tree = renderer.create(<H1 text="Heading 1" styles={myStyles} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
