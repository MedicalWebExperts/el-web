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
    fontSize: theme.fonts.baseSize * 2,
    color: props => theme.colors[props.color],
  },
});

const H2 = ({ classes, text }) => (
  <h2 className={classes.headline}>{text}</h2>
);

H2.propTypes = propTypes;
H2.defaultProps = defaultProps;

export default injectSheet(styles)(H2);
