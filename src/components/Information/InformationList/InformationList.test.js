import React from 'react';
import renderer from 'react-test-renderer';
import InformationList from './InformationList';

const defaultProps = {
  data: [
    'American Medical Association',
    'Texas Medical Association',
    'American Academy of Family Physicians',
  ],
};

const customStyles = {
  styles: { margin: 20 },
};

describe('Component InformationList Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer.create(<InformationList {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('using custom styles', () => {
    const tree = renderer
      .create(<InformationList {...Object.assign({}, defaultProps, customStyles)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
