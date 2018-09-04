import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '../../theme';

const propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const Avatar = ({
  image, alt,
}) => (
  <div>
    <style jsx>
      {`
        img{
          border-radius: 100%;
          display: block;
          width: 100px;
          height: auto;
        }
      `}
    </style>
    <img src={image} alt={alt}/>
  </div>
);

Avatar.propTypes = propTypes;
export default withTheme(Avatar);
