import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src';

export default () => {
  storiesOf('Button', module).add('Default', () => <Button text="Default" />);
  storiesOf('Button', module).add('Secondary', () => <Button text="Secondary" type="secondary" />);
  storiesOf('Button', module).add('Success', () => <Button text="Success" type="success" />);
  storiesOf('Button', module).add('Warning', () => <Button text="Warning" type="warning" />);
  storiesOf('Button', module).add('Danger', () => <Button text="Danger" type="danger" />);
  storiesOf('Button', module).add('Outline', () => <Button text="Outline" outline />);
};
