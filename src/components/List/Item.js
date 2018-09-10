import React from 'react';
import { string, shape } from 'prop-types';
import theme from '../../styles';

const propTypes = {
  text: string.isRequired,
  styles: shape({}),
};

const defaultProps = {
  styles: {},
};

const Item = ({ text, styles }) => (
  <li style={styles}>
    <style jsx>
      {`
        li {
          padding: 0 0 0 20px;
          position: relative;
          color: ${theme.colors.default};
          font-family: ${theme.font.primary};
          font-size: ${theme.font.size}px;
          line-height: 1.6;
        }
        li:before {
          content: '';
          position: absolute;
          left: 0;
          top: 7px;
          right: auto;
          width: 8px;
          height: 8px;
          border-bottom: solid 1px currentColor;
          border-left: solid 1px currentColor;
          transform: rotate(-135deg);
          color: #4a90e2;
        }
      `}
    </style>
    {text}
  </li>
);

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
export default Item;
