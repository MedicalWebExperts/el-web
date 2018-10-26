import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card, Avatar } from '..';

export default () => {
  storiesOf('Card', module).add('Card Default', () => (
    <Card>
      <Avatar image="https://placehold.it/350x350" alt="Image alt" />
    </Card>
  ));
};
