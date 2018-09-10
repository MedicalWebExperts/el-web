import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import Item from './Item';

const propTypes = {
  data: arrayOf(string).isRequired,
  styles: shape({}),
};

const defaultProps = {
  styles: {},
};

const List = ({ data, styles }) => (
  <ul style={styles}>
    <style jsx>
      {`
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
      `}
    </style>

    {data.map((item, index) => (
      <Item text={item} key={index} />
    ))}
  </ul>
);

List.propTypes = propTypes;
List.defaultProps = defaultProps;
export default List;
