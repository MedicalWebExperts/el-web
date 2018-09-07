import React from 'react';
import { storiesOf } from '@storybook/react';

import { ListItem } from '../src';

const item = {
  image: 'https://placehold.it/350x350',
  title: 'John Doe',
  description: 'This is a description, like a subtitle.',
  secondaryDescription: 'This is extra text, may be a lot.',
};

export default () => {
  storiesOf('ListItem', module).add('Default', () => (
    <ListItem
      avatar={item.image}
      title={item.title}
      description={item.description}
      secondaryDescription={item.secondaryDescription}
      action={() => null}
    />
  ));
};
