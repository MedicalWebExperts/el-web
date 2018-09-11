import React from 'react';
import { storiesOf } from '@storybook/react';

import { Map } from '../src';

export default () => {
  storiesOf('Map', module).add('Default', () => (
    <Map
      url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13138.598992769137!2d-58.430499!3d-34.587728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x910a40368a2b8c66!2sChori!5e0!3m2!1sen!2sar!4v1536682900333"
      styles={{ height: '600px' }}
    />
  ));
};
