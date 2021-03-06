import React from 'react';
import renderer from 'react-test-renderer';

import Text from './Text';

describe('Component Text Snapshot', () => {
  it('without arguments, take the default values, use childreen prop', () => {
    const tree = renderer.create(<Text>This is a component Text!</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('use align prop with value right', () => {
    const tree = renderer.create(<Text align="right">This is a component Text!</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('secondary font-family of the theme', () => {
    const tree = renderer.create(<Text secondary>This is a component Text!</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('primary color of the theme', () => {
    const tree = renderer.create(<Text color="primary">This is a component Text!</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('use gutterBottom prop', () => {
    const tree = renderer
      /* eslint-disable */
      .create(<Text gutterBottom={20}>This is a component Text!</Text>)
      /* eslint-enable */
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('use gutterBottom prop and secondary color', () => {
    const tree = renderer
      .create(
        <Text gutterBottom={20} color="secondary">
          This is a component Text!
        </Text>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('use gutterBottom prop and secondary font', () => {
    const tree = renderer
      /* eslint-disable */
      .create(
        <Text gutterBottom={20} secondary>
          This is a component Text!
        </Text>,
      )
      /* eslint-enable */
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('use gutterBottom prop, secondary font and align', () => {
    const tree = renderer
      .create(
        <Text gutterBottom={20} secondary align="right">
          This is a component Text!
        </Text>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('added optional style inline prop', () => {
    const myStyles = {
      marginTop: 30,
      lineHeight: 2,
    };
    const tree = renderer
      /* eslint-disable */
      .create(<Text styles={myStyles}>This is a component Text!</Text>)
      /* eslint-enable */
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
