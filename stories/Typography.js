import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider, H1, H2, H3, H4, H5, H6, Text } from '../src';

export default () => {
  storiesOf('Typography', module).add('Headings', () => (
    <ThemeProvider>
      <div>
        <H1 text="Heading 1" />
        <H2 text="Heading 2" color="primary" />
        <H3 text="Heading 3" />
        <H4 text="Heading 4" color="secondary" secondary />
        <H5 text="Heading 5" />
        <H6 text="Heading 6" color="default" />
      </div>
    </ThemeProvider>
  ));
  storiesOf('Typography', module).add('Text', () => (
    <ThemeProvider>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    </ThemeProvider>
  ));
}