import React from 'react';
import { storiesOf } from '@storybook/react';

import { List, ProviderListItem } from '../src';

const items = [
  {
    image: 'https://placehold.it/350x350',
    name: 'John Doe',
    title: 'MD',
    specialty: 'Family Medicine',
    location: 'Mansfield Clinic',
    description: 'This is a description, like a subtitle.',
    action: '',
    actionText: 'View Profile',
  },
  {
    image: 'https://placehold.it/350x350',
    name: 'John Doe',
    title: 'MD',
    specialty: 'Family Medicine',
    location: 'Mansfield Clinic',
    description: 'This is a description, like a subtitle.',
    action: '',
    actionText: 'View Profile',
  },
  {
    image: 'https://placehold.it/350x350',
    name: 'John Doe',
    title: 'MD',
    specialty: 'Family Medicine',
    location: 'Mansfield Clinic',
    description: 'This is a description, like a subtitle.',
    action: '',
    actionText: 'View Profile',
  },
  {
    image: 'https://placehold.it/350x350',
    name: 'John Doe',
    title: 'MD',
    specialty: 'Family Medicine',
    location: 'Mansfield Clinic',
    description: 'This is a description, like a subtitle.',
    action: '',
    actionText: 'View Profile',
  },
  {
    image: 'https://placehold.it/350x350',
    name: 'John Doe',
    title: 'MD',
    specialty: 'Family Medicine',
    location: 'Mansfield Clinic',
    description: 'This is a description, like a subtitle.',
    action: '',
    actionText: 'View Profile',
  },
];

export default () => {
  storiesOf('List', module).add('List Default', () => (
    <List
      items={items.map(item => (
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
      ))}
    />
  ));
};
