import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src';

const customStyle = {
  maxWidth: 200,
};

export default () => {
  storiesOf('Button', module).add('Default', () => (
    <Button text="Default" onClick={() => null} styles={customStyle} />
  ));
  storiesOf('Button', module).add('Secondary', () => (
    <Button text="Secondary" type="secondary" onClick={() => null} styles={customStyle} />
  ));
  storiesOf('Button', module).add('Success', () => (
    <Button text="Success" type="success" onClick={() => null} styles={customStyle} />
  ));
  storiesOf('Button', module).add('Warning', () => (
    <Button text="Warning" type="warning" onClick={() => null} styles={customStyle} />
  ));
  storiesOf('Button', module).add('Danger', () => (
    <Button text="Danger" type="danger" onClick={() => null} styles={customStyle} />
  ));
  storiesOf('Button', module).add('Outline', () => (
    <Button text="Outline" outline onClick={() => null} styles={customStyle} />
  ));
};
