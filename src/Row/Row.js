import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: '',
};

const Row = ({ children }) => (
  <div className="row">
    <style jsx>{`
      .row {
        flex-wrap: wrap;
        flex-direction: row;
        display: flex;
      }
    `}
    </style>
    {children}
  </div>
);

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
