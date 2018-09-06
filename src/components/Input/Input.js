import React, { Component } from 'react';
import {
  string, oneOf, func, shape,
} from 'prop-types';

import theme from '../../styles';
import media from '../../utils/media';

class Input extends Component {
  static propTypes = {
    name: string.isRequired,
    type: oneOf(['text', 'email', 'tel']).isRequired,
    placeholder: string,
    onChange: func.isRequired,
    styles: shape({}),
  };

  static defaultProps = {
    placeholder: 'Placeholder',
    styles: {},
  };

  state = {
    value: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ value });
    this.props.onChange({ [name]: value });
  };

  render() {
    const {
      type, name, placeholder, styles,
    } = this.props;
    const { value } = this.state;
    return (
      <div>
        {
          <style jsx>
            {`
              input {
                padding: 10px;
                font-size: 14px;
                border-radius: 4px;
                border-width: 1px;
                border-style: solid;
                background-color: ${theme.colors.white};
                color: ${theme.colors.textTertiary};
                border-color: ${theme.colors.textTertiary};
                outline: none;
                width: ${media.isMobile() ? '100%' : 'auto'};
              }
              input:active,
              input:focus {
                outline: none;
              }
              input::placeholder {
                color: ${theme.colors.textTertiary};
                font-style: italic;
              }
            `}
          </style>
        }
        <input
          style={styles}
          type={type}
          name={name}
          value={value}
          onChange={this.handleChange}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default Input;
