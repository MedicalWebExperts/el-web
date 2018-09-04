import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from '../src';

export default () => {
  storiesOf('Input', module).add('Default', () => (
    <Input value="Default" handleChange={() => null} />
  ));

  // storiesOf('Input', module).add('Outline Secondary', () => (
  // <Input text="Outline" outline color="secondary" />
  // ));
};
