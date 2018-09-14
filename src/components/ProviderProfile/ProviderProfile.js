import React from 'react';
import { shape, string } from 'prop-types';
import css from 'styled-jsx/css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import ProviderData from '../ProviderData/ProviderData';
import Information from '../Information/Information';
import Map from '../Map/Map';
import Icon from '../Icon/Icon';

const propTypes = {
  styles: shape({}),
  provider: shape({}).isRequired,
  onPress: string,
};

const defaultProps = {
  styles: {},
  onPress: '',
};

const style = css`
  .wrapper {
    display: flex;
    flex-direction: row;
  }
  .arrowWrapper {
    flex: 1;
    align-items: center;
  }
  .arrow {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  .providerWrapper {
    flex: 4;
  }
  .informationWrapper {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const ProviderProfile = ({ styles, provider, onPress }) => (
  <div style={styles} className="wrapper">
    <style jsx>{style}</style>
    <div className="arrowWrapper">
      <a href={onPress} className="arrow">
        <Icon icon={faArrowLeft} size="8x" />
      </a>
    </div>
    <div className="providerWrapper">
      <ProviderData
        avatar={provider.avatar}
        name={provider.name}
        title={provider.title}
        description={provider.description}
        location={provider.location}
        specialty={provider.specialty}
      />
      <div className="informationWrapper">
        <Information data={provider.information} />
      </div>
      <Map url={provider.map} />
    </div>
    <div className="arrowWrapper" />
  </div>
);

ProviderProfile.propTypes = propTypes;
ProviderProfile.defaultProps = defaultProps;

export default ProviderProfile;
