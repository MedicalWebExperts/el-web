import React, { Component } from 'react';
import { string, oneOf, func } from 'prop-types';

import theme from '../../styles';

class Input extends Component {
  static propTypes = {
    value: string,
    name: string.isRequired,
    type: oneOf(['text', 'email', 'tel', 'select']).isRequired,
    placeholder: string,
    onChange: func.isRequired,
  };

  static defaultProps = {
    value: 'Default Value',
    placeholder: 'Placeholder',
  };

  state = {
    value: this.props.value,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ value });
    this.props.onChange({ [name]: value });
  };

  render() {
    const { type, name, placeholder } = this.props;
    const { value } = this.state;
    return (
      <div>
        {
          <style jsx>
            {`
              input,
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
        {type !== 'select' ? (
          <input
            type={type}
            name={name}
            value={value}
            onChange={this.handleChange}
            placeholder={placeholder}
          />
        ) : (
          <select type={type} name={name} value={value} onChange={this.handleChange}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        )}
      </div>
    );
  }
}

export default Input;
