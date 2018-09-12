import React from 'react';
import { string, shape } from 'prop-types';
import css from 'styled-jsx/css';

import theme from '../../../styles';

const propTypes = {
  text: string.isRequired,
  styles: shape({}),
};

const defaultProps = {
  styles: {},
};

const style = css`
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
`;

const InformationListItem = ({ text, styles }) => (
  <li style={styles}>
    <style jsx>{style}</style>
    {text}
  </li>
);

InformationListItem.propTypes = propTypes;
InformationListItem.defaultProps = defaultProps;
export default InformationListItem;
