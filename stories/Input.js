import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from '../src';

export default () => {
  storiesOf('Input', module).add('Default', () => (
    <Input onChange={() => null} placeholder="Name" name="Name" />
  ));
};
