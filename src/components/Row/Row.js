import React from 'react';
import { node } from 'prop-types';

const propTypes = {
  children: node.isRequired,
};

const Row = ({ children }) => <div>{children}</div>;

Row.propTypes = propTypes;

export default Row;
