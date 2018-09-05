import React, { Component } from 'react';
import {
  string, oneOf, bool, func,
} from 'prop-types';

import theme from '../../styles';

class Input extends Component {
  static propTypes = {
    label: string,
    value: string,
    name: string.isRequired,
    type: oneOf(['text', 'email', 'tel', 'select']).isRequired,
    required: bool,
    onChange: func.isRequired,
  };

  static defaultProps = {
    label: '',
    value: '',
    required: false,
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
    const {
      label, type, name, required,
    } = this.props;
    const { value } = this.state;
    return (
      <div>
        {
          <style jsx>
            {`
              input {
                text-align: center;
                padding: 15px 30px;
                font-size: 16px;
                cursor: pointer;
                font-weight: bold;
                border-radius: 4px;
                border: none;
                outline: none;
              }
              input:active,
              input:focus {
                outline: none;
              }
              input.default {
                background-color: ${theme.colors.white};
                color: ${theme.colors.textColor};
                outline: none;
              }
              input.default:hover {
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
              }
              input.default:active,
              input.default:focus {
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
              }
              input.outline {
                background-color: ${theme.colors.transparent};
                border: solid 1px ${theme.colors.primary};
                color: ${theme.colors.primary};
              }
              input.outline:hover {
                opacity: 0.8;
              }
            `}
          </style>
        }
        {/* eslint-disable */}
        {label !== '' && <label>{label}</label>}
        {/* eslint-enable */}
        {type !== 'select' ? (
          <input
            type={type}
            name={name}
            value={value}
            onChange={this.handleChange}
            required={required}
            className={inputClassName}
          />
        ) : (
          <select
            type={type}
            name={name}
            defaultValue={value}
            onChange={this.handleChange}
            required={required}
            className={selectClassName}
          />
        )}
      </div>
    );
  }
}

export default Input;
