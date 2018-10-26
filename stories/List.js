import React from 'react';
import { storiesOf } from '@storybook/react';

import { List, ListItem } from '..';
import { providers } from '../mocks/providers';
import { locations } from '../mocks/locations';

export default () => {
  storiesOf('List', module).add('List Providers', () => (
    <List
      items={providers.map(item => (
        <ListItem
          type={item.type}
          avatar={item.avatar}
          name={item.name}
          title={item.title}
          specialty={item.specialty}
          location={item.location}
          description={item.description}
          secondaryDescription={item.secondaryDescription}
          action={item.action}
          actionText={item.actionText}
        />
      ))}
    />
  ));
  storiesOf('List', module).add('List Locations', () => (
    <List
      items={locations.map(item => (
        <ListItem
          type={item.type}
          avatar={item.avatar}
          name={item.name}
          address={item.address}
          city={item.city}
          state={item.state}
          action={item.action}
          actionText={item.actionText}
        />
      ))}
    />
  ));
};
