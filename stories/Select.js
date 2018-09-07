import React from 'react';
import { storiesOf } from '@storybook/react';

import { Select } from '../src';

const options = [
  { name: 'Tiger', value: 'tiger' },
  { name: 'Cheetah', value: 'cheetah' },
  { name: 'Giraffe', value: 'giraffe' },
  { name: 'Monkey', value: 'monkey' },
  { name: 'Wolf', value: 'wolf' },
  { name: 'Duck', value: 'duck' },
];

export default () => {
  storiesOf('Select', module).add('Default', () => (
    <Select onChange={() => null} options={options} placeholder="Animals" />
  ));
};
