import React, { Fragment } from 'react';
import { string, oneOf } from 'prop-types';
import css from 'styled-jsx/css';
import { faMedkit, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import Avatar from '../Avatar/Avatar';
import { H3, H4, Text } from '../Typography';
import Icon from '../Icon/Icon';
import theme from '../../styles';
import media from '../../utils/media';

const propTypes = {
  type: oneOf(['location', 'provider']).isRequired,
  avatar: string.isRequired,
  name: string.isRequired,
  title: string,
  description: string,
  location: string,
  specialty: string,
  address: string,
  city: string,
  state: string,
};

const defaultProps = {
  title: '',
  description: '',
  location: '',
  specialty: '',
  address: '',
  city: '',
  state: '',
};

const style = css`
  div {
    display: flex;
  }
  .innerWrapper {
    flex: 1;
    flex-direction: ${media.isMobile() ? 'column' : 'row'};
    align-items: center;
  }
  .avatarWrapper {
    margin-bottom: ${media.isMobile() ? '20px' : '0'};
  }
  .infoWrapper {
    flex: 6;
    flex-direction: column;
    padding-left: 20px;
    margin-top: -5px;
    align-items: ${media.isMobile() ? 'center' : 'flex-start'};
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

const Data = ({
  type,
  avatar,
  name,
  title,
  specialty,
  location,
  description,
  address,
  city,
  state,
}) => (
  <div className="innerWrapper">
    <style jsx>{style}</style>

    <div className="avatarWrapper">
      <Avatar image={avatar} alt="Provider's image" />
    </div>

    <div className="infoWrapper">
      <div className="textWrapper">
        <H3 text={name} styles={customStyles.name} />
        {type !== 'location' && (
          <Fragment>
            <H3 text="," styles={customStyles.comma} />
            <H3 text={title} styles={customStyles.title} />
          </Fragment>
        )}
      </div>

      {type !== 'location' ? (
        <Fragment>
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
        </Fragment>
      ) : (
        <Fragment>
          <div className="iconWrapper">
            <Icon
              icon={faMapMarkerAlt}
              size="sm"
              color={theme.colors.textSecondary}
              height="14px"
              width="14px"
            />
            <H4 text="Address:" styles={customStyles.h4Title} />
            <H4 text={`${address}, ${city}, ${state}`} styles={customStyles.h4} />
          </div>
        </Fragment>
      )}
      {type !== 'location' && <Text text={description} styles={customStyles.text} />}
    </div>
  </div>
);

Data.propTypes = propTypes;
Data.defaultProps = defaultProps;

export default Data;
