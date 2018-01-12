import React from 'react';

const Grid = ({ children }) => (
  <div className="container">
    <style jsx>{`
      .container {
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: stretch;
      }
        @media (min-width: 768px) {
          .container {
            max-width: auto; } }
        @media (min-width: 992px) {
          .container {
            max-width: 992px; } }
        @media (min-width: 1200px) {
          .container {
            max-width: 1200px; } }
        @media (max-width: 1200px) {
          .container {
            padding: 0 15px; } }
    `}
    </style>
    {children}
  </div>
);

export default Grid;
