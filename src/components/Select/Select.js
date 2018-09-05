import React, { Component } from 'react';
import { arrayOf, shape, func } from 'prop-types';

import theme from '../../styles';

class Select extends Component {
  static propTypes = {
    options: arrayOf(shape({})).isRequired,
    onChange: func.isRequired,
  };

  state = {
    selectedValue: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ selectedValue: value });
    this.props.onChange({ [name]: value });
  };

  render() {
    const { options } = this.props;
    const { selectedValue } = this.state;
    return (
      <div>
        {
          <style jsx>
            {`
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
                min-width: 160px;
              }
              option {
                color: ${theme.colors.textTertiary};
              }
            `}
          </style>
        }
        <select value={selectedValue} onChange={this.handleChange}>
          {options.map(({ id, name, value }) => (
            <option value={value} key={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Select;
