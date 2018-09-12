import React from 'react';
import { arrayOf, shape } from 'prop-types';
import css from 'styled-jsx/css';

import InformationList from './InformationList/InformationList';
import { H4, H5 } from '../Typography';
import theme from '../../styles';

const propTypes = {
  data: arrayOf(shape({})).isRequired,
};

const style = css`
  .information-item {
    padding: 22px 0;
    border-bottom: 1px solid #e4e4e4;
  }

  .information-item:last-child {
    border-style: none;
  }
`;

const customStyle = {
  h4: { fontSize: theme.font.size },
  h5: { fontWeight: 'normal', fontSize: theme.font.size, marginTop: 8 },
  list: { marginTop: 8 },
};

const Information = ({ data }) => (
  <div className="information">
    <style jsx>{style}</style>

    {data.map(({ title, description, list }, index) => (
      <div className="information-item" key={index}>
        <H4 text={title} styles={customStyle.h4} />
        {description && <H5 text={description} styles={customStyle.h5} />}
        {list && <InformationList data={list} styles={customStyle.list} />}
      </div>
    ))}
  </div>
);

Information.propTypes = propTypes;
export default Information;
