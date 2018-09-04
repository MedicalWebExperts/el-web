import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider, Avatar } from '../src';

export default () => {
  storiesOf('Avatar', module).add('Avatar Normal size', () => (
    <ThemeProvider>
      <Avatar image="https://placehold.it/350x350" alt="Image alt" />
    </ThemeProvider>
  ));

  storiesOf('Avatar', module).add('Avatar Small size', () => (
    <ThemeProvider>
      <Avatar image="https://placehold.it/350x350" alt="Image alt" size="small" />
    </ThemeProvider>
  ));

  storiesOf('Avatar', module).add('Avatar Large size', () => (
    <ThemeProvider>
      <Avatar image="https://placehold.it/350x350" alt="Image alt" size="large" />
    </ThemeProvider>
  ));

}
