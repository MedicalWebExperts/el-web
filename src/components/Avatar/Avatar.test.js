import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from './Avatar';

const defaultProps = {
  image: 'https://placehold.it/350x350',
  alt: 'Avatar Test',
};

const customProps = {
  image: 'https://placehold.it/350x350',
  alt: 'Avatar Test',
  size: 'large',
};

const customStyles = {
  borderRadius: '20px',
  padding: '0',
};

describe('Component Avatar Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer.create(<Avatar {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('diferent avatar size', () => {
    const tree = renderer.create(<Avatar {...customProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('using custom styles', () => {
    const tree = renderer.create(<Avatar {...defaultProps} styles={customStyles} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
