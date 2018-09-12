import React from 'react';
import { string } from 'prop-types';
import css from 'styled-jsx/css';
import { faMedkit, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import Avatar from '../Avatar/Avatar';
import Card from '../Card/Card';
import { H3, H4, Text } from '../Typography';
import Icon from '../Icon/Icon';
import media from '../../utils/media';
import theme from '../../styles';

const propTypes = {
  avatar: string.isRequired,
  name: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  location: string.isRequired,
  specialty: string.isRequired,
  action: string.isRequired,
  actionText: string,
};

const defaultProps = {
  actionText: '',
};

const style = css`
  div {
    display: flex;
  }
  .mainWrapper {
    flex: 1;
    flex-direction: column;
    padding: 10px;
  }
  .innerWrapper {
    flex: 1;
    flex-direction: row;
  }
  .infoWrapper {
    flex: 6;
    flex-direction: column;
    padding-left: 30px;
  }
  .textWrapper {
    align-items: center;
    padding-bottom: 5px;
  }
  .iconWrapper {
    align-items: baseline;
  }
  .actionNameWrapper {
    display: ${media.isMobile() || media.isTablet() ? 'none' : 'flex'};
    align-items: center;
    justify-content: flex-end;
    padding-top: 10px;
  }
`;

const customStyles = {
  name: {
    fontSize: '22px',
  },
  comma: {
    fontSize: '22px',
    fontWeight: 400,
    paddingRight: '5px',
  },
  title: {
    fontSize: '22px',
    color: theme.colors.textSecondary,
    fontWeight: 400,
  },
  h4Title: {
    fontSize: '16px',
    color: theme.colors.textSecondary,
    fontWeight: 400,
    paddingRight: 5,
    paddingLeft: 5,
  },
  h4: {
    fontSize: '16px',
    color: theme.colors.textSecondary,
  },
  text: {
    fontSize: 14,
  },
  actionText: {
    color: theme.colors.primary,
  },
};

const ProviderListItem = ({
  avatar,
  name,
  title,
  specialty,
  location,
  description,
  action,
  actionText,
}) => (
  <Card onPress={action}>
    <style jsx>{style}</style>
    <div className="mainWrapper">
      <div className="innerWrapper">
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
            <Icon icon={faMedkit} size="sm" color={theme.colors.textSecondary} />
            <H4 text="Specialty:" styles={customStyles.h4Title} />
            <H4 text={specialty} styles={customStyles.h4} />
          </div>
          <div className="iconWrapper">
            <Icon icon={faMapMarkerAlt} size="sm" color={theme.colors.textSecondary} />
            <H4 text="Location:" styles={customStyles.h4Title} />
            <H4 text={location} styles={customStyles.h4} />
          </div>
          <Text text={description} styles={customStyles.text} />
        </div>
      </div>
      <div className="actionNameWrapper">
        <Text text={actionText} styles={customStyles.actionText} />
      </div>
    </div>
  </Card>
);

ProviderListItem.propTypes = propTypes;
ProviderListItem.defaultProps = defaultProps;

export default ProviderListItem;
