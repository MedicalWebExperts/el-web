import React from 'react';
import renderer from 'react-test-renderer';

import ListItem from './ListItem';
import { basicProvider } from '../../../mocks/providers';
import { basicLocation } from '../../../mocks/locations';

const providerProps = {
  ...basicProvider,
  action: '',
  actionText: 'View Profile',
};

const locationProps = {
  ...basicLocation,
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
