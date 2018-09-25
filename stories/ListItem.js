import React from 'react';
import { storiesOf } from '@storybook/react';

import { ListItem } from '../src';
import { basicProvider } from '../mocks/providers';
import { basicLocation } from '../mocks/locations';

const provider = {
  ...basicProvider,
  action: '',
  actionText: 'View Profile',
};

const location = {
  ...basicLocation,
  action: '',
  actionText: 'View Location',
};

export default () => {
  storiesOf('ListItem', module).add('ProviderListItem', () => (
    <ListItem
      type={provider.type}
      avatar={provider.avatar}
      name={provider.name}
      title={provider.title}
      specialty={provider.specialty}
      location={provider.location}
      description={provider.description}
      secondaryDescription={provider.secondaryDescription}
      action={provider.action}
      actionText={provider.actionText}
    />
  ));

  storiesOf('ListItem', module).add('LocationListItem', () => (
    <ListItem
      type={location.type}
      avatar={location.avatar}
      name={location.name}
      address={location.address}
      city={location.city}
      state={location.state}
      action={location.action}
      actionText={location.actionText}
    />
  ));
};
