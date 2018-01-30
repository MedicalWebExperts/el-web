import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Col = ({ children }) => (
  <div>
    {children}
  </div>
);

Col.propTypes = propTypes;

export default Col;
