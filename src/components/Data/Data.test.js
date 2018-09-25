import React from 'react';
import renderer from 'react-test-renderer';
import Data from './Data';

const providerProps = {
  type: 'provider',
  avatar: 'https://placehold.it/350x350',
  name: 'John Doe',
  title: 'MD',
  specialty: 'Family Medicine',
  location: 'Mansfield Clinic',
  description: 'This is a description, like a subtitle.',
};

const locationProps = {
  type: 'location',
  avatar: 'https://placehold.it/350x350',
  name: 'Albuquerque Urgent Care',
  address: 'Street 1',
  city: 'Albuquerque',
  state: 'New Mexico',
};

describe('Component Data Snapshot', () => {
  it('without arguments, take the provider props', () => {
    const tree = renderer.create(<Data {...providerProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('without arguments, take the location props', () => {
    const tree = renderer.create(<Data {...locationProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
