import React from 'react';
import renderer from 'react-test-renderer';

import Select from './Select';

const options = [
  { id: 1, name: 'Tiger', value: 'tiger' },
  { id: 2, name: 'Cheetah', value: 'cheetah' },
  { id: 3, name: 'Giraffe', value: 'giraffe' },
  { id: 4, name: 'Monkey', value: 'monkey' },
  { id: 5, name: 'Wolf', value: 'wolf' },
  { id: 6, name: 'Duck', value: 'duck' },
];

const props = {
  name: 'select',
  onChange: () => null,
  options,
};

const customStyles = {
  marginTop: 30,
  lineHeight: 2,
};

describe('Component Select Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer.create(<Select {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('added optional style inline prop', () => {
    const tree = renderer.create(<Select {...props} styles={customStyles} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
