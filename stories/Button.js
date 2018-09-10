import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src';

export default () => {
  storiesOf('Button', module).add('Default', () => <Button text="Default" onClick={() => null} />);
  storiesOf('Button', module).add('Secondary', () => (
    <Button text="Secondary" type="secondary" onClick={() => null} />
  ));
  storiesOf('Button', module).add('Success', () => (
    <Button text="Success" type="success" onClick={() => null} />
  ));
  storiesOf('Button', module).add('Warning', () => (
    <Button text="Warning" type="warning" onClick={() => null} />
  ));
  storiesOf('Button', module).add('Danger', () => (
    <Button text="Danger" type="danger" onClick={() => null} />
  ));
  storiesOf('Button', module).add('Outline', () => (
    <Button text="Outline" outline onClick={() => null} />
  ));
};
