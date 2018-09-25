import React from 'react';
import renderer from 'react-test-renderer';

import SearchForm from './SearchForm';

const fields = [
  {
    type: 'input',
    styles: {},
    name: 'name',
    placeholder: 'name',
  },
  {
    type: 'select',
    placeholder: 'animals',
    options: [
      { name: 'Tiger', value: 'tiger' },
      { name: 'Lion', value: 'lion' },
      { name: 'Panther', value: 'panther' },
      { name: 'Jaguar', value: 'jaguar' },
    ],
  },
  {
    type: 'select',
    placeholder: 'gender',
    options: [{ name: 'Male', value: 'male' }, { name: 'Female', value: 'female' }],
  },
];

const props = {
  fields,
  onSearch: jest.fn(),
  buttonText: 'Search',
};

describe('Component SearchForm Snapshot', () => {
  it('Renders a SearchForm', () => {
    const tree = renderer.create(<SearchForm {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
