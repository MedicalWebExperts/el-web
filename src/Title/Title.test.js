import React from 'react';
import renderer from 'react-test-renderer';

import Title from './Title';

describe('Snapshots', () => {
  it('should match snapshot of Title', () => {
    const component = renderer.create(<Title text="Hello World" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
