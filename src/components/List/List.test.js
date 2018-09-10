import React from 'react';
import renderer from 'react-test-renderer';
import List from './List';

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

describe('Component List Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer.create(<List {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('using custom styles', () => {
    const tree = renderer
      .create(<List {...Object.assign({}, defaultProps, customStyles)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
