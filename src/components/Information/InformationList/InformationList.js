import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import css from 'styled-jsx/css';

import InformationListItem from './InformationListItem';

const propTypes = {
  data: arrayOf(string).isRequired,
  styles: shape({}),
};

const defaultProps = {
  styles: {},
};

const style = css`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const InformationList = ({ data, styles }) => (
  <ul style={styles}>
    <style jsx>{style}</style>

    {data.map((item, index) => (
      <InformationListItem text={item} key={index} />
    ))}
  </ul>
);

InformationList.propTypes = propTypes;
InformationList.defaultProps = defaultProps;
export default InformationList;
