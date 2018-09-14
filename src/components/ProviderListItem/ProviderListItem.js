import React from 'react';
import { string } from 'prop-types';
import css from 'styled-jsx/css';

import ProviderData from '../ProviderData/ProviderData';
import Card from '../Card/Card';
import { Text } from '../Typography';
import media from '../../utils/media';
import theme from '../../styles';

const propTypes = {
  avatar: string.isRequired,
  name: string.isRequired,
  title: string,
  description: string,
  location: string,
  specialty: string,
  action: string.isRequired,
  actionText: string,
};

const defaultProps = {
  actionText: '',
  title: '',
  description: '',
  location: '',
  specialty: '',
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
  .actionNameWrapper {
    display: ${media.isMobile() || media.isTablet() ? 'none' : 'flex'};
    align-items: center;
    justify-content: flex-end;
    padding-top: 10px;
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
      <ProviderData
        avatar={avatar}
        name={name}
        title={title}
        specialty={specialty}
        location={location}
        description={description}
      />
      <div className="actionNameWrapper">
        <Text text={actionText} styles={customStyles.actionText} />
      </div>
    </div>
  </Card>
);

ProviderListItem.propTypes = propTypes;
ProviderListItem.defaultProps = defaultProps;

export default ProviderListItem;
