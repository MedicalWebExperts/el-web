import React, { Component } from 'react';
import { shape, string, arrayOf } from 'prop-types';
import css from 'styled-jsx/css';
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons';

import { H2, Text } from '../Typography';
import Icon from '../Icon/Icon';
import theme from '../../styles';
import media from '../../utils/media';

const style = css`
  .headerWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .titleWrapper {
    display: flex;
    flex: 1;
    align-items: center;
  }
  .changeViewWrapper {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  .itemsWrapper {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .itemWrapper {
    padding-bottom: 10px;
    width: ${media.isMobile() || media.isTablet() ? '100%' : '33%'};
  }
  .centerIcon {
    margin-left: 10px;
  }
  .icon {
    border: none;
    outline: none;
    color: ${theme.colors.textSecondary};
  }
  .icon::active {
    color: ${theme.colors.primary};
  }
`;

const customStyle = {
  title: {
    fontSize: 22,
    fontWeight: 400,
  },
  titleNumber: {
    fontSize: 22,
    marginRight: 10,
  },
  text: {
    color: theme.colors.textSecondary,
  },
};

class List extends Component {
  static propTypes = {
    styles: shape({}),
    title: string,
    items: arrayOf(shape({})).isRequired,
  };

  static defaultProps = {
    styles: {},
    title: 'Doctors',
  };

  state = {
    isGrid: false,
  };

  changeGrid = () => this.setState(prevState => ({ isGrid: !prevState.isGrid }));

  render() {
    const { styles, title, items } = this.props;
    return (
      <div style={styles}>
        <style jsx>{style}</style>
        <div className="headerWrapper">
          <div className="titleWrapper">
            <H2 text={items.length.toString()} styles={customStyle.titleNumber} />
            <H2 text={title} styles={customStyle.title} />
          </div>
          <div className="changeViewWrapper">
            <Text text="Change View" styles={customStyle.text} />
            <button type="button" className="icon centerIcon" onClick={this.changeGrid}>
              <Icon icon={faGripHorizontal} size="2x" color={theme.colors.primary} />
            </button>
            <button type="button" className="icon" onClick={this.changeGrid}>
              <Icon icon={faGripHorizontal} size="2x" color={theme.colors.primary} />
            </button>
          </div>
        </div>
        <div className="itemsWrapper">
          {items.map((item, key) => (
            <div key={key} className="itemWrapper">
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default List;
