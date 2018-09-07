import React, { Component } from 'react';
import {
  arrayOf, shape, func, string,
} from 'prop-types';

import theme from '../../styles';
import media from '../../utils/media';

class Select extends Component {
  static propTypes = {
    options: arrayOf(shape({})).isRequired,
    onChange: func.isRequired,
    placeholder: string.isRequired,
    styles: shape({}),
  };

  static defaultProps = {
    styles: {},
  };

  state = {
    selectedValue: '',
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ selectedValue: value });
    this.props.onChange({ name: this.props.placeholder, value });
  };

  render() {
    const { options, placeholder, styles } = this.props;
    const { selectedValue } = this.state;

    return (
      <div>
        <style jsx>
          {`
            div {
              margin-bottom: ${media.isMobile() || media.isTablet() ? '20px' : '0'};
              display: flex;
            }
            select {
              padding: 10px;
              font-size: 14px;
              border-radius: 4px;
              border-width: 1px;
              border-style: solid;
              background-color: ${theme.colors.white};
              color: ${theme.colors.textTertiary};
              border-color: ${theme.colors.textTertiary};
              outline: none;
              height: 40px;
              flex: 1;
              min-width: ${media.isFullScreen() ? '160px' : '100px'};
            }
            option {
              color: ${theme.colors.textTertiary};
            }
            option[default] {
              font-style: italic;
            }
          `}
        </style>
        <select value={selectedValue} onChange={this.handleChange} style={styles}>
          <option value="" default disabled>
            {placeholder}
          </option>
          {options.map(({ name, value }, index) => (
            <option value={value} key={index}>
              {name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Select;
