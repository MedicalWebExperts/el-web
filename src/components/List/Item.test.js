import React from 'react';
import renderer from 'react-test-renderer';
import Item from './Item';

const defaultProps = {
  text: 'Item test',
};

const customStyles = {
  styles: { padding: 20 },
};

describe('Component Item Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer.create(<Item {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('using custom styles', () => {
    const tree = renderer
      .create(<Item {...Object.assign({}, defaultProps, customStyles)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
