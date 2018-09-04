import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider, Button } from '../src';

export default () => {

  storiesOf('Button', module).add('Default', () => (
    <ThemeProvider>
      <Button text="Default" />
    </ThemeProvider>
  ));

  storiesOf('Button', module).add('Secondary', () => (
    <ThemeProvider>
      <Button text="Secondary" type="secondary" />
    </ThemeProvider>
  ));

  storiesOf('Button', module).add('Outline', () => (
    <ThemeProvider>
      <Button text="Outline" outline type="warning" />
    </ThemeProvider>
  ));
}
