import React, { Component } from 'react';
import { shape, string, arrayOf } from 'prop-types';
import { faGripHorizontal, faSlidersH } from '@fortawesome/free-solid-svg-icons';

import { H2, Text } from '../Typography';
import Icon from '../Icon/Icon';
import theme from '../../styles';
import media from '../../utils/media';

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
    isGrid: !(media.isMobile() || media.isTablet()),
  };

  handleClickGrid = () => this.setState({ isGrid: true });

  handleClickRow = () => this.setState({ isGrid: false });

  render() {
    const { styles, title, items } = this.props;
    return (
      <div style={styles}>
        <style jsx>
          {`
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
              display: ${media.isMobile() || media.isTablet() ? 'none' : 'flex'};
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
              justify-content: space-between;
            }
            .itemWrapper {
              margin-bottom: 10px;
              margin-left: 10px;
              width: ${this.state.isGrid && (!media.isMobile() || !media.isTablet())
            ? '32%'
            : '100%'};
            }
            .item-wrapper:last-child {
              justify-content: flex-left;
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
          `}
        </style>
        <div className="headerWrapper">
          <div className="titleWrapper">
            <H2 text={items.length.toString()} styles={customStyle.titleNumber} />
            <H2 text={title} styles={customStyle.title} />
          </div>
          <div className="changeViewWrapper">
            <Text text="Change View" styles={customStyle.text} />
            <button type="button" className="icon centerIcon" onClick={this.handleClickRow}>
              <Icon
                icon={faSlidersH}
                size="2x"
                color={this.state.isGrid ? theme.colors.textSecondary : theme.colors.primary}
              />
            </button>
            <button type="button" className="icon" onClick={this.handleClickGrid}>
              <Icon
                icon={faGripHorizontal}
                size="2x"
                color={this.state.isGrid ? theme.colors.primary : theme.colors.textSecondary}
              />
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
