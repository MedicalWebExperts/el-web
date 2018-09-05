import React from 'react';
import { node } from 'prop-types';

const propTypes = {
  children: node.isRequired,
};

const Col = ({ children }) => <div>{children}</div>;

Col.propTypes = propTypes;

export default Col;
