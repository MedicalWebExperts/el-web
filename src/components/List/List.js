import React, { Component } from 'react';
import { shape, string, arrayOf } from 'prop-types';
import css from 'styled-jsx/css';
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons';

import { H2, Text } from '../Typography';
import Icon from '../Icon/Icon';

const style = css`
  div {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 4px;
  }
  a {
    text-decoration: none;
  }
`;

class List extends Component {
  state = {};

  static propTypes = {
    styles: shape({}),
    title: string,
    items: arrayOf(shape({})).isRequired,
  };

  static defaultProps = {
    styles: {},
    title: 'Doctors',
  };

  render() {
    const { styles, title, items } = this.props;
    return (
      <div style={styles}>
        <style jsx>{style}</style>
        <div>
          <H2 text={title} />
          <div>
            <Text text="Change View" />
            <Icon icon={faGripHorizontal} />
            <Icon icon={faGripHorizontal} />
          </div>
        </div>
        {items.map((item, key) => (
          <div key={key}>{item}</div>
        ))}
      </div>
    );
  }
}

export default List;
