import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
};

const defaultProps = {
  color: 'default',
};

const styles = theme => ({
  headline: {
    fontSize: theme.fonts.baseSize * 3,
    color: props => theme.colors[props.color],
  },
});

const H1 = ({ classes, text }) => (
  <h1 className={classes.headline}>{text}</h1>
);

H1.propTypes = propTypes;
H1.defaultProps = defaultProps;

export default injectSheet(styles)(H1);
