import React from 'react';
import { storiesOf } from '@storybook/react';

import { Select } from '../src';

const options = [
  { id: 1, name: 'Tiger', value: 'tiger' },
  { id: 2, name: 'Cheetah', value: 'cheetah' },
  { id: 3, name: 'Giraffe', value: 'giraffe' },
  { id: 4, name: 'Monkey', value: 'monkey' },
  { id: 5, name: 'Wolf', value: 'wolf' },
  { id: 6, name: 'Duck', value: 'duck' },
];

export default () => {
  storiesOf('Select', module).add('Default', () => (
    <Select onChange={() => null} options={options} />
  ));
};
