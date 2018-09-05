import React from 'react';
import { shape, node } from 'prop-types';

const propTypes = {
  styles: shape({}),
  children: node.isRequired,
};

const defaultProps = {
  styles: {},
};

const Card = ({
  styles, children,
}) => (
  <div style={styles}>
    <style jsx>
      {`
        div{
          box-shadow: 0 2px 4px rgba(0,0,0,.2);
          padding: 10px;
          border-radius: 4px;
        }
      `}
    </style>
    {children}
  </div>
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
