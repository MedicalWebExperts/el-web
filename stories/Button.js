import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src';

export default () => {
  storiesOf('Button', module).add('Default Primary', () => <Button text="Default" />);

  storiesOf('Button', module).add('Outline Secondary', () => (
    <Button text="Outline" outline color="secondary" />
  ));
};
