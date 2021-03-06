import React from 'react';
import renderer from 'react-test-renderer';

import List from './List';

const defaultProps = {
  title: 'List',
  items: [<div />, <div />],
};

describe('Component List Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer.create(<List {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
