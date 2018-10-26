import React from 'react';
import { storiesOf } from '@storybook/react';
import { faCoffee, faFutbol } from '@fortawesome/free-solid-svg-icons';

import { Icon } from '..';

const customProps = {
  spin: true,
  transform: 'shrink-6 left-4',
  color: 'red',
};

const wrapper = {
  textAlign: 'center',
  marginTop: 100,
};

export default () => {
  storiesOf('Icon', module).add('Icon Default', () => (
    <div style={wrapper}>
      <Icon icon={faCoffee} size="4x" />
    </div>
  ));
  storiesOf('Icon', module).add('Icon Custom Props', () => (
    <div style={wrapper}>
      <Icon icon={faFutbol} size="6x" {...customProps} />
    </div>
  ));
};
