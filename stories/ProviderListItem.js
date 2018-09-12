import React from 'react';
import { storiesOf } from '@storybook/react';

import { ProviderListItem } from '../src';

const item = {
  image: 'https://placehold.it/350x350',
  name: 'John Doe',
  title: 'MD',
  specialty: 'Family Medicine',
  location: 'Mansfield Clinic',
  description: 'This is a description, like a subtitle.',
  action: '',
  actionText: 'View Profile',
};

export default () => {
  storiesOf('ProviderListItem', module).add('Default', () => (
    <ProviderListItem
      avatar={item.image}
      name={item.name}
      title={item.title}
      specialty={item.specialty}
      location={item.location}
      description={item.description}
      secondaryDescription={item.secondaryDescription}
      action={item.action}
      actionText={item.actionText}
    />
  ));
};
