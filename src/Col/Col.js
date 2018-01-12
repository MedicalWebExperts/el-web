import React from 'react';

const Col = ({ children, xs, sm, md, lg, xl }) => {
  
  const val = (md / 12) * 100;
  return (
    <div className="col-md">
        <style jsx>{`
        .col-md {
            -webkit-flex-basis: 50%;
            -moz-flex-basis: 50%;
            -ms-flex-preferred-size: 50%;
            flex-basis: ${val}%;
            max-width: ${val}%; 
        }
        @media(max-width: 992px) {
            .col-md {
                flex-basis: 100%;
                max-width: 100%;
            }
        }
        `}
        </style>
        {children}
    </div>
  );
};

export default Col;
