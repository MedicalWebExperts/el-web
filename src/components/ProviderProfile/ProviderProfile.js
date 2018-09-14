import React from 'react';
import { shape, string } from 'prop-types';
import css from 'styled-jsx/css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import ProviderData from '../ProviderData/ProviderData';
import Information from '../Information/Information';
import Map from '../Map/Map';
import Icon from '../Icon/Icon';
import media from '../../utils/media';

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
    flex-direction: column;
  }
  .providerWrapper {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  }
  .arrow {
    flex: 2;
    text-align: center;
  }
  .providerData {
    flex: 8;
    margin-left: ${media.isMobile() ? '-10%' : '0'};
  }
  .informationWrapper {
    margin-left: ${media.isMobile() ? '6%' : '20%'};
    margin-right: ${media.isMobile() ? '6%' : '20%'};
  }
`;

const ProviderProfile = ({ styles, provider, onPress }) => (
  <div style={styles} className="wrapper">
    <style jsx>{style}</style>
    <div className="providerWrapper">
      <div className="arrow">
        <a href={onPress}>
          <Icon icon={faArrowLeft} size="8x" />
        </a>
      </div>
      <div className="providerData">
        <ProviderData
          avatar={provider.avatar}
          name={provider.name}
          title={provider.title}
          description={provider.description}
          location={provider.location}
          specialty={provider.specialty}
        />
      </div>
    </div>
    <div className="informationWrapper">
      <Information data={provider.information} />
      <Map url={provider.map} />
    </div>
  </div>
);

ProviderProfile.propTypes = propTypes;
ProviderProfile.defaultProps = defaultProps;

export default ProviderProfile;
