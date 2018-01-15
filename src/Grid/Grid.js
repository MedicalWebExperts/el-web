import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  isFluid: PropTypes.bool,
};

const defaultProps = {
  children: '',
  isFluid: false,
};

const Grid = ({ children, isFluid }) => {
  const containerClass = isFluid ? 'container-fluid' : 'container';

  return (
    <div className={containerClass}>
      <style jsx>{`
        .container {
          display: flex;
          margin: 0 auto;
          flex-direction: column;
          flex-wrap: wrap;
          align-items: stretch;
        }
        .container-fluid {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          align-items: stretch;
          width: 100%;
        }
        @media (min-width: 768px) {
          .container {
            max-width: auto;
          }
        }
        @media (min-width: 992px) {
          .container {
            max-width: 992px;
          }
        }
        @media (min-width: 1200px) {
          .container {
            max-width: 1200px;
          }
        }
        @media (max-width: 1200px) {
          .container {
            padding: 0 15px;
          }
        }
      `}
      </style>
      {children}
    </div>
  );
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
