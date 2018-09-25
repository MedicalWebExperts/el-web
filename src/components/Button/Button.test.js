import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

const defaultProps = {
  text: 'Button Test',
  onClick: () => null,
};

const customProps = {
  outline: true,
  type: 'success',
};

const customStyles = {
  color: '#ccc',
  marginTop: '20px',
};

describe('Component Button Snapshot', () => {
  it('using default values', () => {
    const tree = renderer.create(<Button {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('using other type button and style outline', () => {
    const tree = renderer
      .create(<Button {...Object.assign({}, defaultProps, customProps)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('added optional style inline prop', () => {
    const tree = renderer.create(<Button {...defaultProps} styles={customStyles} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
