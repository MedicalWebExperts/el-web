import React from 'react';
import { arrayOf, shape } from 'prop-types';
import Item from './Item';

const propTypes = {
  data: arrayOf(shape({})).isRequired,
};

const List = ({ data }) => (
  <ul>
    <style jsx>
      {`
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
      `}
    </style>

    {data.map(item => (
      <Item text={item} />
    ))}
  </ul>
);

List.propTypes = propTypes;
export default List;
