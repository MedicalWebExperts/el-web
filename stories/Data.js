import React from 'react';
import { storiesOf } from '@storybook/react';

import { Data } from '../src';

const provider = {
  type: 'provider',
  image: 'https://placehold.it/350x350',
  name: 'John Doe',
  title: 'MD',
  specialty: 'Family Medicine',
  location: 'Mansfield Clinic',
  description: 'This is a description, like a subtitle.',
};

const location = {
  type: 'location',
  image: 'https://placehold.it/350x350',
  name: 'Albuquerque Urgent Care',
  address: 'Street 1',
  city: 'Albuquerque',
  state: 'New Mexico',
};

export default () => {
  storiesOf('Data', module).add('ProviderData', () => (
    <Data
      type={provider.type}
      avatar={provider.image}
      name={provider.name}
      title={provider.title}
      specialty={provider.specialty}
      location={provider.location}
      description={provider.description}
      secondaryDescription={provider.secondaryDescription}
    />
  ));
  storiesOf('Data', module).add('LocationData', () => (
    <Data
      type={location.type}
      avatar={location.image}
      name={location.name}
      address={location.address}
      city={location.city}
      state={location.state}
    />
  ));
};
