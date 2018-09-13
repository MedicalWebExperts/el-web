import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

const defaultProps = {
  children: <h1>Card Test</h1>,
  onPress: '',
};

const customStyles = {
  borderRadius: '20px',
  padding: '0',
};

describe('Component Card Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer.create(<Card {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('using custom styles', () => {
    const tree = renderer.create(<Card {...defaultProps} styles={customStyles} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
