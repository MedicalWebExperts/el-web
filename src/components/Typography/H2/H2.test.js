import React from 'react';
import renderer from 'react-test-renderer';

import H2 from './H2';

describe('Component H2 Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer.create(<H2 text="Heading 2" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('primary color of the theme', () => {
    const tree = renderer.create(<H2 text="Heading 2" color="primary" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('secondary font-family of the theme', () => {
    const tree = renderer.create(<H2 text="Heading 2" secondary />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('added optional style inline prop', () => {
    const myStyles = {
      marginTop: 30,
      lineHeight: 2,
    };
    const tree = renderer.create(<H2 text="Heading 1" styles={myStyles} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
