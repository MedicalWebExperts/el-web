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
  height: string,
  width: string,
};

const defaultProps = {
  styles: {},
  size: 'xs',
  color: theme.colors.textPrimary,
  className: '',
  height: '18px',
  width: '18px',
};

const customStyles = {
  height: '100%',
  width: '100%',
};

const Icon = props => (
  <div className="icon">
    <style jsx>
      {`
        div {
          height: ${props.height};
          width: ${props.width};
        }
      `}
    </style>

    <FontAwesomeIcon
      icon={props.icon}
      size={props.size}
      {...props}
      color={props.color}
      style={{ ...customStyles, ...props.styles }}
    />
  </div>
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
