import React from 'react';

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

export default Row;
