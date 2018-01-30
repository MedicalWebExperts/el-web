import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const H5 = ({ text }) => (
  <h1>{text}</h1>
);

H5.propTypes = propTypes;

export default H5;
