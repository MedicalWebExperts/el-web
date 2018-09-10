import React from 'react';
import { storiesOf } from '@storybook/react';

import { Information } from '../src';

const data = [
  {
    title: 'Year Joined',
    description: '1999',
  },
  {
    title: 'Medical School',
    description: 'University of Texas Medical Branch, Galveston, TX., 1996',
  },
  {
    title: 'Residency',
    description: 'John Peter Smith Hospital, Fort Worth, TX',
  },
  {
    title: 'Board Certification',
    description: 'American Board of Family Medicine',
  },
  {
    title: 'Hospital Affilation',
    list: ['Arlington Memorial Hospital'],
  },
  {
    title: 'Professional Organizations',
    list: [
      'American Medical Association',
      'Texas Medical Association',
      'American Academy of Family Physicians',
    ],
  },
  {
    title: 'Professional Organizations',
    description: 'American Board of Family Medicine',
    list: [
      'American Medical Association',
      'Texas Medical Association',
      'American Academy of Family Physicians',
    ],
  },
];

export default () => {
  storiesOf('Information', module).add('Default', () => <Information data={data} />);
};
