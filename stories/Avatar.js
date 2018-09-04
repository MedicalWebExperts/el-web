import React from 'react';
import { storiesOf } from '@storybook/react';

import { Avatar } from '../src';

export default () => {
  storiesOf('Avatar', module).add('Avatar Normal size', () => (
    <Avatar image="https://placehold.it/350x350" alt="Image alt" />
  ));

  storiesOf('Avatar', module).add('Avatar Small size', () => (
    <Avatar image="https://placehold.it/350x350" alt="Image alt" size="small" />
  ));

  storiesOf('Avatar', module).add('Avatar Large size', () => (
    <Avatar image="https://placehold.it/350x350" alt="Image alt" size="large" />
  ));
};
