import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider, Button } from '../src';

export default () => {
  storiesOf('Button', module).add('Default Primary', () => (
    <ThemeProvider>
      <Button text="Default" />
    </ThemeProvider>
  ));

  storiesOf('Button', module).add('Outline Secondary', () => (
    <ThemeProvider>
      <Button text="Outline" outline color="secondary" />
    </ThemeProvider>
  ));
}