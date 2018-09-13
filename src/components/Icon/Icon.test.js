import React from 'react';
import renderer from 'react-test-renderer';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Icon from './Icon';

const defaultProps = {
  icon: faCoffee,
  size: 'md',
};

const customProps = {
  spin: true,
  transform: 'shrink-6 left-4',
};

describe('Component Icon Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer.create(<Icon {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('using custom props', () => {
    const tree = renderer
      .create(<Icon {...Object.assign({}, defaultProps, customProps)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
