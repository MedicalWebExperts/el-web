import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Grid = ({ children }) => (
  <div>
    {children}
  </div>
);

Grid.propTypes = propTypes;

export default Grid;
