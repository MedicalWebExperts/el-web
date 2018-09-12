import React from 'react';
import renderer from 'react-test-renderer';
import InformationListItem from './InformationListItem';

const defaultProps = {
  text: 'InformationListItem test',
};

const customStyles = {
  styles: { padding: 20 },
};

describe('Component InformationListItem Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer.create(<InformationListItem {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('using custom styles', () => {
    const tree = renderer
      .create(<InformationListItem {...Object.assign({}, defaultProps, customStyles)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
