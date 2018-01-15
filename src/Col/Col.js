import React from 'react';

const Col = ({ children, xs, sm, md, lg }) => {
  const xsw = (xs / 12) * 100;
  const smw = (sm / 12) * 100;
  const mdw = (md / 12) * 100;
  const lgw = (lg / 12) * 100;

  return (
    <div className="col">
      <style jsx>{`
      .col {
        flex-basis: 100%;
        max-width: 100%;
      }
      @media(min-width: 480px) {
        .col {
          flex-basis: ${xsw}%;
          max-width: ${xsw}%;
        }
      }
      @media(min-width: 768px) {
        .col {
          flex-basis: ${smw}%;
          max-width: ${smw}%;
        }
      }
      @media(min-width: 992px) {
        .col {
          flex-basis: ${mdw}%;
          max-width: ${mdw}%;
        }
      }
      @media(min-width: 1200px) {
        .col {
          flex-basis: ${lgw}%;
          max-width: ${lgw}%;
        }
      }
      `}
      </style>
      {children}
    </div>
  );
};

export default Col;
