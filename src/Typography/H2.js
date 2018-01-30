import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const H2 = ({ text }) => (
  <h1>{text}</h1>
);

H2.propTypes = propTypes;

export default H2;
