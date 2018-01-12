import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const Title = ({ text }) => (<h1>{text}</h1>);

Title.propTypes = propTypes;
export default Title;
