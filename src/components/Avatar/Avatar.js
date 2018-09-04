import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '../../theme';

const propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
};

const defaultProps = {
  size: 'normal',
};

const Avatar = ({
  image, alt, size,
}) => {
  // check sizes
  let avatarWidth = null;
  switch (size) {
    case 'small':
      avatarWidth = '60px';
      break;
    case 'normal':
      avatarWidth = '100px';
      break;
    case 'large':
      avatarWidth = '200px';
      break;
  }

  return (
    <div>
      <style jsx>
        {`
          img{
            border-radius: 100%;
            display: block;
            width: ${avatarWidth};
          }
        `}
      </style>
      <img src={image} alt={alt} size={size}/>
    </div>
  );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default withTheme(Avatar);
