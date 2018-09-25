import React from 'react';
import renderer from 'react-test-renderer';

import Select from './Select';

const options = [
  { name: 'Tiger', value: 'tiger' },
  { name: 'Cheetah', value: 'cheetah' },
  { name: 'Giraffe', value: 'giraffe' },
  { name: 'Monkey', value: 'monkey' },
  { name: 'Wolf', value: 'wolf' },
  { name: 'Duck', value: 'duck' },
];

const props = {
  name: 'select',
  placeholder: 'this is a placeholder',
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
