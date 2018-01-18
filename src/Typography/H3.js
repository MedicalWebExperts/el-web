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
    fontSize: theme.fonts.baseSize * 1.8,
    color: props => theme.colors[props.color],
  },
});

const H3 = ({ classes, text }) => (
  <h3 className={classes.headline}>{text}</h3>
);

H3.propTypes = propTypes;
H3.defaultProps = defaultProps;

export default injectSheet(styles)(H3);
