import React from 'react';
import { string } from 'prop-types';

import Avatar from '../Avatar/Avatar';
import Card from '../Card/Card';
import { H1, H2, Text } from '../Typography';

const propTypes = {
  avatar: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  secondaryDescription: string.isRequired,
  action: string.isRequired,
};

const defaultProps = {};

const ListItem = ({
  avatar, title, description, secondaryDescription, action,
}) => (
  <div>
    <style jsx>
      {`
        div {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          padding: 10px;
          border-radius: 4px;
        }
      `}
    </style>
    <Card>
      <div>
        <Avatar />
      </div>
      <div>
        <H1 />
        <H2 />
        <Text />
      </div>
    </Card>
  </div>
);

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
