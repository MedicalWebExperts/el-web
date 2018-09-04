import React, { Component } from 'react';
import { string, oneOf, func } from 'prop-types';

class Input extends Component {
  static propTypes = {
    value: string,
    color: oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
    handleChange: func.isRequired,
  };

  static defaultProps = {
    value: null,
    color: 'primary',
  };

  state = {
    value: null,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ value });
    this.props.onChange({ [name]: value });
  };

  render() {
    const {
      title, type, name, required, theme,
    } = this.props;
    const { colors, button } = theme;
    const backgroundColor = 'white';
    const textColor = 'black';

    return (
      // <div>
      //   {title !== '' && <label>{title}</label>}
      //   {type !== 'textarea' ? (
      //     <input
      //       type={type}
      //       name={name}
      //       value={this.state.value}
      //       onChange={this.handleChange}
      //       required={required}
      //       className={`form-control ${css.formControl}`}
      //     />
      //   ) : (
      //       <textarea
      //         type={type}
      //         name={name}
      //         defaultValue={this.state.value}
      //         onChange={this.handleChange}
      //         required={required}
      //         className={`form-control ${css.formControl}`}
      //       />
      //     )}
      //   {required && <div className={css.withErrors} role="alert" />}
      // </div>
      <div>
        <style jsx>
          {`
            button {
              text-align: ${button.textAlign};
              padding: ${button.padding};
              font-size: ${button.fontSize};
              cursor: ${button.cursor};
            }
            button.default {
              background-color: ${backgroundColor};
              color: ${textColor};
            }
            button.outline {
              background-color: ${colors.transparent};
              border: solid 1px ${backgroundColor};
              color: ${backgroundColor};
            }
          `}
        </style>
        <input type="text" value={value} onChange={handleChange} className={inputClassName} />
      </div>
    );
  }
}

export default Input;
