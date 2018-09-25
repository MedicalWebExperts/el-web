import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from './ListItem';

const providerProps = {
  type: 'provider',
  avatar: 'https://placehold.it/350x350',
  name: 'John Doe',
  title: 'MD',
  specialty: 'Family Medicine',
  location: 'Mansfield Clinic',
  description: 'This is a description, like a subtitle.',
  action: '',
  actionText: 'View Profile',
};

const locationProps = {
  type: 'location',
  avatar: 'https://placehold.it/350x350',
  name: 'Albuquerque Urgent Care',
  address: 'Street 1',
  city: 'Albuquerque',
  state: 'New Mexico',
  action: '',
  actionText: 'View Location',
};

describe('Component ListItem Snapshot', () => {
  it('without arguments, take the provider values', () => {
    const tree = renderer.create(<ListItem {...providerProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('without arguments, take the location values', () => {
    const tree = renderer.create(<ListItem {...locationProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
