import React from 'react';
import { node } from 'prop-types';

const propTypes = {
  children: node.isRequired,
};

const Grid = ({ children }) => <div>{children}</div>;

Grid.propTypes = propTypes;

export default Grid;
