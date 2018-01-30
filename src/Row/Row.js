import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Row = ({ children }) => (
  <div>
    {children}
  </div>
);

Row.propTypes = propTypes;

export default Row;
