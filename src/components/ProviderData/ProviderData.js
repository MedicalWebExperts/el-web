import React from 'react';
import { string } from 'prop-types';
import css from 'styled-jsx/css';
import { faMedkit, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import Avatar from '../Avatar/Avatar';
import { H3, H4, Text } from '../Typography';
import Icon from '../Icon/Icon';
import theme from '../../styles';

const propTypes = {
  avatar: string.isRequired,
  name: string.isRequired,
  title: string,
  description: string,
  location: string,
  specialty: string,
};

const defaultProps = {
  title: '',
  description: '',
  location: '',
  specialty: '',
};

const style = css`
  div {
    display: flex;
  }
  .innerWrapper {
    flex: 1;
    flex-direction: row;
    align-items: center;
  }
  .infoWrapper {
    flex: 6;
    flex-direction: column;
    padding-left: 20px;
    margin-top: -5px;
  }
  .textWrapper {
    align-items: center;
    padding-bottom: 5px;
  }
  .iconWrapper {
    align-items: baseline;
  }
`;

const customStyles = {
  name: {
    fontSize: '18px',
  },
  comma: {
    fontSize: '18px',
    fontWeight: 400,
    paddingRight: '5px',
  },
  title: {
    fontSize: '18px',
    color: theme.colors.textSecondary,
    fontWeight: 400,
  },
  h4Title: {
    fontSize: '14px',
    color: theme.colors.textSecondary,
    fontWeight: 400,
    paddingRight: 5,
    paddingLeft: 5,
  },
  h4: {
    fontSize: '14px',
    color: theme.colors.textSecondary,
  },
  text: {
    fontSize: 12,
  },
  actionText: {
    fontSize: 14,
    color: theme.colors.primary,
  },
};

const ProviderData = ({
  avatar, name, title, specialty, location, description,
}) => (
  <div className="innerWrapper">
    <style jsx>{style}</style>
    <div>
      <Avatar image={avatar} alt="Provider's image" />
    </div>
    <div className="infoWrapper">
      <div className="textWrapper">
        <H3 text={name} styles={customStyles.name} />
        <H3 text="," styles={customStyles.comma} />
        <H3 text={title} styles={customStyles.title} />
      </div>

      <div className="iconWrapper">
        <Icon
          icon={faMedkit}
          size="sm"
          color={theme.colors.textSecondary}
          height="14px"
          width="14px"
        />
        <H4 text="Specialty:" styles={customStyles.h4Title} />
        <H4 text={specialty} styles={customStyles.h4} />
      </div>
      <div className="iconWrapper">
        <Icon
          icon={faMapMarkerAlt}
          size="sm"
          color={theme.colors.textSecondary}
          height="14px"
          width="14px"
        />
        <H4 text="Location:" styles={customStyles.h4Title} />
        <H4 text={location} styles={customStyles.h4} />
      </div>
      <Text text={description} styles={customStyles.text} />
    </div>
  </div>
);

ProviderData.propTypes = propTypes;
ProviderData.defaultProps = defaultProps;

export default ProviderData;
