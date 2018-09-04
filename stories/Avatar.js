import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider, Avatar } from '../src';

export default () => {
  storiesOf('Avatar', module).add('Avatar', () => (
    <ThemeProvider>
      <Avatar image="https://placehold.it/350x350" alt="Image alt" />
    </ThemeProvider>
  ));
}
