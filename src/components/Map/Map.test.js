import React from 'react';
import renderer from 'react-test-renderer';
import Map from './Map';

const defaultProps = {
  url:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13138.598992769137!2d-58.430499!3d-34.587728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x910a40368a2b8c66!2sChori!5e0!3m2!1sen!2sar!4v1536682900333',
};

const customProps = {
  title: 'Map test',
};

const customStyles = {
  border: '1px solid red',
};

describe('Component Map Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer.create(<Map {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('diferent iframe title', () => {
    const tree = renderer
      .create(<Map {...Object.assign({}, defaultProps, customProps)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('using custom styles', () => {
    const tree = renderer.create(<Map {...defaultProps} styles={customStyles} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
