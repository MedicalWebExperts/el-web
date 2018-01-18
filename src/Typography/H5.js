import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
};

const defaultProps = {
  color: 'primary',
};

const styles = theme => ({
  headline: {
    fontSize: theme.fonts.baseSize,
    color: props => theme.colors[props.color],
  },
});

const H5 = ({ classes, text }) => (
  <h5 className={classes.headline}>{text}</h5>
);

H5.propTypes = propTypes;
H5.defaultProps = defaultProps;

export default injectSheet(styles)(H5);
