import React from 'react';
import renderer from 'react-test-renderer';

import List from './List';

const items = [
  {
    image: 'https://placehold.it/350x350',
    name: 'John Doe',
    title: 'MD',
    specialty: 'Family Medicine',
    location: 'Mansfield Clinic',
    action: '',
    actionText: 'View Profile',
  },
  {
    image: 'https://placehold.it/350x350',
    name: 'John Doe',
    title: 'MD',
    specialty: 'Family Medicine',
    location: 'Mansfield Clinic',
    action: '',
    actionText: 'View Profile',
  },
];

describe('Component List Snapshot', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => ({ matches: false })),
    });
  });

  it('without arguments, take the default values', () => {
    const tree = renderer.create(<List items={items} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
