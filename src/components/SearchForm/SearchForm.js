import React, { Component } from 'react';
import {
  arrayOf, shape, func, string,
} from 'prop-types';

import Input from '../Input/Input';
import Select from '../Select/Select';
import Button from '../Button/Button';
import media from '../../utils/media';

class SearchForm extends Component {
  static propTypes = {
    fields: arrayOf(shape({})).isRequired,
    onSearch: func.isRequired,
    styles: shape({}),
    buttonText: string,
  };

  static defaultProps = {
    styles: {},
    buttonText: 'Search',
  };

  state = {
    searchValues: [],
    advancedSearch: false,
  };

  handleChange = (selectedItem) => {
    const { name, value } = selectedItem;
    this.setState(prevState => ({
      searchValues: Object.assign({}, prevState.searchValues, { [name]: value }),
    }));
  };

  handleSearch = () => {
    this.props.onSearch(this.state.searchValues);
  };

  showAdvancedSearch = () => {
    this.setState(prevState => ({ advancedSearch: !prevState.advancedSearch }));
  };

  render() {
    const { fields, buttonText, styles } = this.props;
    const { advancedSearch } = this.state;

    return (
      <div style={styles}>
        <style jsx>
          {`
            div {
              display: flex;
              flex-direction: ${media.isMobile() || media.isTablet() ? 'column' : 'row'};
              justify-content: space-evenly;
              width: 100%;
            }
          `}
        </style>
        {fields.map((field, key) => {
          if (field.type === 'input') {
            return (
              <Input
                key={key}
                style={field.styles}
                type="text"
                name={field.name}
                value={field.value}
                onChange={this.handleChange}
                placeholder={field.placeholder}
              />
            );
          }
          return (
            (((media.isMobile() || media.isTablet()) && advancedSearch)
              || ((media.isTabletLanscape() || media.isFullScreen()) && !advancedSearch)) && (
              <Select
                key={key}
                options={field.options}
                onChange={this.handleChange}
                styles={field.styles}
                placeholder={field.placeholder}
              />
            )
          );
        })}
        {(media.isMobile() || media.isTablet()) && (
          <Button outline onClick={this.showAdvancedSearch} text="Advanced Search" />
        )}
        <Button onClick={this.handleSearch} text={buttonText} />
      </div>
    );
  }
}

export default SearchForm;
