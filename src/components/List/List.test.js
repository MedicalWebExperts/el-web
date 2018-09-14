import React from 'react';
import renderer from 'react-test-renderer';

import List from './List';

const defaultProps = {
  title: 'List',
  items: [<div />, <div />],
};

describe('Component List Snapshot', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => ({ matches: false })),
    });
  });

  it('without arguments, take the default values', () => {
    const tree = renderer.create(<List {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
