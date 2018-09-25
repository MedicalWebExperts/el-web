import React from 'react';
import { shape, string } from 'prop-types';
import css from 'styled-jsx/css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Data from '../Data/Data';
import Information from '../Information/Information';
import Map from '../Map/Map';
import Icon from '../Icon/Icon';
import media from '../../utils/media';

const propTypes = {
  styles: shape({}),
  data: shape({}).isRequired,
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

const Profile = ({ styles, data, onPress }) => (
  <div style={styles} className="wrapper">
    <style jsx>{style}</style>
    <div className="providerWrapper">
      <div className="arrow">
        <a href={onPress}>
          <Icon icon={faArrowLeft} size="8x" />
        </a>
      </div>
      <div className="providerData">
        <Data {...data} />
      </div>
    </div>
    <div className="informationWrapper">
      <Information data={data.information} />
      <Map url={data.map} />
    </div>
  </div>
);

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;
