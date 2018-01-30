import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const H4 = ({ text }) => (
  <h1>{text}</h1>
);

H4.propTypes = propTypes;

export default H4;
