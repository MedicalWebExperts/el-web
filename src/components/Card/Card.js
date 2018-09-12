import React from 'react';
import { shape, node, string } from 'prop-types';
import css from 'styled-jsx/css';

const propTypes = {
  styles: shape({}),
  children: node.isRequired,
  onPress: string,
};

const defaultProps = {
  styles: {},
  onPress: () => null,
};

const style = css`
  .card {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 4px;
  }
  a {
    text-decoration: none;
  }
`;

const Card = ({ styles, children, onPress }) => (
  <div style={styles} className="card">
    <style jsx>{style}</style>
    <a href={onPress}>{children}</a>
  </div>
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
