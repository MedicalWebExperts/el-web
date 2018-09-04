import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src';

export default () => {
  storiesOf('Button', module).add('Default', () => <Button text="Default" />);

  storiesOf('Button', module).add('Secondary', () => <Button text="Secondary" type="secondary" />);

  storiesOf('Button', module).add('Outline', () => (
    <Button text="Outline" outline type="warning" />
  ));
};
