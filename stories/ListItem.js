import React from 'react';
import { storiesOf } from '@storybook/react';

import { ListItem } from '../src';

const provider = {
  type: 'provider',
  image: 'https://placehold.it/350x350',
  name: 'John Doe',
  title: 'MD',
  specialty: 'Family Medicine',
  location: 'Mansfield Clinic',
  description: 'This is a description, like a subtitle.',
  action: '',
  actionText: 'View Profile',
};

const location = {
  type: 'location',
  image: 'https://placehold.it/350x350',
  name: 'Albuquerque Urgent Care',
  address: 'Street 1',
  city: 'Albuquerque',
  state: 'New Mexico',
  action: '',
  actionText: 'View Location',
};

export default () => {
  storiesOf('ListItem', module).add('ProviderListItem', () => (
    <ListItem
      type={provider.type}
      avatar={provider.image}
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
      avatar={location.image}
      name={location.name}
      address={location.address}
      city={location.city}
      state={location.state}
      action={location.action}
      actionText={location.actionText}
    />
  ));
};
