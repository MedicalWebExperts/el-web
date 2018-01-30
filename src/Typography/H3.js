import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const H3 = ({ text }) => (
  <h1>{text}</h1>
);

H3.propTypes = propTypes;

export default H3;
