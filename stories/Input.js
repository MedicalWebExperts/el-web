import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from '..';

export default () => {
  storiesOf('Input', module).add('Default', () => (
    <Input type="text" onChange={() => null} placeholder="Name" name="Name" />
  ));
};
