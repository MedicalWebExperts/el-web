import React from 'react';
import { shape, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import theme from '../../styles';

const propTypes = {
  styles: shape({}),
  icon: shape({}).isRequired,
  size: string,
  color: string,
  className: string,
};

const defaultProps = {
  styles: {},
  size: 'xs',
  color: theme.colors.textPrimary,
  className: '',
};

const Icon = props => (
  <FontAwesomeIcon
    icon={props.icon}
    size={props.size}
    {...props}
    color={props.color}
    className={props.className}
  />
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
