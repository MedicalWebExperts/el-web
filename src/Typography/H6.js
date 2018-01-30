import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const H6 = ({ text }) => (
  <h1>{text}</h1>
);

H6.propTypes = propTypes;

export default H6;
