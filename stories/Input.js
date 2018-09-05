import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from '../src';

export default () => {
  storiesOf('Input', module).add('Input', () => <Input onChange={() => null} placeholder="Name" />);

  storiesOf('Select', module).add('Select', () => (
    <Input type="select" value="Select" onChange={() => null} placeholder="Name" />
  ));
};
