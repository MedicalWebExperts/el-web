import React from 'react';
import { arrayOf, shape } from 'prop-types';
import List from '../List/List';
import { H4, H5 } from '../Typography';

import theme from '../../styles';

const propTypes = {
  data: arrayOf(shape({})).isRequired,
};

const Information = ({ data }) => (
  <div className="information">
    <style jsx>
      {`
        .information-item {
          padding: 22px 0;
          border-bottom: 1px solid #e4e4e4;
        }

        .information-item:last-child {
          border-style: none;
        }
      `}
    </style>

    {data.map(({ title, description, list }, index) => (
      <div className="information-item" key={index}>
        <H4 text={title} styles={{ fontSize: theme.font.size }} />
        {description && (
          <H5
            text={description}
            styles={{ fontWeight: 'normal', fontSize: theme.font.size, marginTop: 8 }}
          />
        )}
        {list && <List data={list} styles={{ marginTop: 8 }} />}
      </div>
    ))}
  </div>
);

Information.propTypes = propTypes;
export default Information;
