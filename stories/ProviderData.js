import React from 'react';
import { storiesOf } from '@storybook/react';

import { ProviderData } from '../src';

const item = {
  image: 'https://placehold.it/350x350',
  name: 'John Doe',
  title: 'MD',
  specialty: 'Family Medicine',
  location: 'Mansfield Clinic',
  description: 'This is a description, like a subtitle.',
};

export default () => {
  storiesOf('ProviderData', module).add('Default', () => (
    <ProviderData
      avatar={item.image}
      name={item.name}
      title={item.title}
      specialty={item.specialty}
      location={item.location}
      description={item.description}
      secondaryDescription={item.secondaryDescription}
    />
  ));
};
