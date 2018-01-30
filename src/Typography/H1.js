import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const H1 = ({ text }) => (
  <h1>{text}</h1>
);

H1.propTypes = propTypes;

export default H1;
