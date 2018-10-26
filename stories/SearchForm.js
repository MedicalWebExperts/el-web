import React from 'react';
import { storiesOf } from '@storybook/react';

import { SearchForm } from '..';

const fields = [
  {
    type: 'input',
    styles: {},
    name: 'name',
    placeholder: 'name',
  },
  {
    type: 'select',
    placeholder: 'animals',
    options: [
      { name: 'Tiger', value: 'tiger' },
      { name: 'Lion', value: 'lion' },
      { name: 'Panther', value: 'panther' },
      { name: 'Jaguar', value: 'jaguar' },
    ],
  },
  {
    type: 'select',
    placeholder: 'vehicles',
    options: [
      { name: 'Car', value: 'car' },
      { name: 'Plane', value: 'plane' },
      { name: 'Bus', value: 'bus' },
      { name: 'Bycicle', value: 'bycicle' },
    ],
  },
  {
    type: 'select',
    placeholder: 'cities',
    options: [
      { name: 'London', value: 'london' },
      { name: 'Cardiff', value: 'cardiff' },
      { name: 'Iowa', value: 'iowa' },
      { name: 'Bogota', value: 'bogota' },
    ],
  },
  {
    type: 'select',
    placeholder: 'gender',
    options: [{ name: 'Male', value: 'male' }, { name: 'Female', value: 'female' }],
  },
];

export default () => {
  storiesOf('SearchForm', module).add('Default', () => (
    <SearchForm
      onSearch={values => console.log('Search Form values: ', values)}
      fields={fields}
      buttonText="Find Doctor"
    />
  ));
};
