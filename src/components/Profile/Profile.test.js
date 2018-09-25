import React from 'react';
import renderer from 'react-test-renderer';
import Profile from './Profile';

import { fullProvider } from '../../../mocks/providers';
import { fullLocation } from '../../../mocks/locations';

describe('Component Profile Snapshot', () => {
  it('without arguments, take the provider values', () => {
    const tree = renderer.create(<Profile data={fullProvider} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('without arguments, take the location values', () => {
    const tree = renderer.create(<Profile data={fullLocation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
