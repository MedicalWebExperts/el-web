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
    fontSize: theme.fonts.baseSize * 1.5,
    color: props => theme.colors[props.color],
  },
});

const H4 = ({ classes, text }) => (
  <h4 className={classes.headline}>{text}</h4>
);

H4.propTypes = propTypes;
H4.defaultProps = defaultProps;

export default injectSheet(styles)(H4);
