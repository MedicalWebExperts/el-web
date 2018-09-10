import React from 'react';
import { arrayOf, shape } from 'prop-types';
import List from '../List/List';
import { Text } from '../Typography';

const propTypes = {
  data: arrayOf(shape({})).isRequired,
};

const Information = ({ data }) => (
  <div className="information">
    <style jsx>
      {`
        .information-item {
          padding: 10px 0;
          border-bottom: 1px solid #979797;
        }

        .information-item:last-child {
          border-style: none;
        }
      `}
    </style>

    {data.map(({ title, description, list }) => (
      <div className="information-item">
        <Text align="left" color="default">
          <strong>{title}</strong>
        </Text>
        {description && (
          <Text align="left" color="default">
            {description}
          </Text>
        )}
        {list && <List data={list} />}
      </div>
    ))}
  </div>
);

Information.propTypes = propTypes;
export default Information;
