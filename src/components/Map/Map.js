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

const customStyle = css`
  border: 0;
`;

const style = { height: '100%', width: '100%' };

const Map = ({ title, url, styles }) => (
  <iframe
    title={title}
    src={url}
    height={style.height}
    width={style.width}
    frameBorder="0"
    allowFullScreen
    style={styles}
  >
    <style jsx>{customStyle}</style>
  </iframe>
);

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;
export default Map;
