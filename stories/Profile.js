import React from 'react';
import { storiesOf } from '@storybook/react';

import { Profile } from '../src';
import { fullProvider } from '../mocks/providers';
import { fullLocation } from '../mocks/locations';

export default () => {
  storiesOf('Profile', module).add('ProviderProfile', () => <Profile data={fullProvider} />);
  storiesOf('Profile', module).add('LocationProfile', () => <Profile data={fullLocation} />);
};
