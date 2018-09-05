import React from 'react';
import { string, oneOf, shape } from 'prop-types';

const propTypes = {
  image: string.isRequired,
  alt: string.isRequired,
  size: oneOf(['small', 'normal', 'large']),
  styles: shape({}),
};

const defaultProps = {
  size: 'normal',
  styles: {},
};

const Avatar = ({
  image, alt, size, styles,
}) => {
  // check sizes
  let avatarWidth = null;
  switch (size) {
    case 'small':
      avatarWidth = '60px';
      break;
    case 'large':
      avatarWidth = '200px';
      break;
    default:
      avatarWidth = '100px';
      break;
  }

  return (
    <div>
      <style jsx>
        {`
          img {
            border-radius: 100%;
            display: block;
            width: ${avatarWidth};
          }
        `}
      </style>
      <img src={image} alt={alt} style={styles} />
    </div>
  );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
