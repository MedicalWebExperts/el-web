import React from 'react';
import renderer from 'react-test-renderer';

import H4 from './H4';

describe('Component H4 Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer.create(<H4 text="Heading 4" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('primary color of the theme', () => {
    const tree = renderer.create(<H4 text="Heading 4" color="primary" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('secondary font-family of the theme', () => {
    const tree = renderer.create(<H4 text="Heading 4" secondary />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('added optional style inline prop', () => {
    const myStyles = {
      marginTop: 30,
      lineHeight: 2,
    };
    const tree = renderer.create(<H4 text="Heading 1" styles={myStyles} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
