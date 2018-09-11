import React from 'react';
import { string, shape } from 'prop-types';
import css from 'styled-jsx/css';

const propTypes = {
  title: string,
  url: string.isRequired,
  styles: shape({}),
};

const defaultProps = {
  title: 'Map',
  styles: {},
};

const style = css`
  border: 0;
`;

const customStyle = { height: '100%', width: '100%' };

const Map = ({ title, url, styles }) => (
  <iframe
    title={title}
    src={url}
    height={customStyle.height}
    width={customStyle.width}
    frameBorder="0"
    allowFullScreen
    style={styles}
  >
    <style jsx>{style}</style>
  </iframe>
);

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;
export default Map;
