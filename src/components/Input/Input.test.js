import React from 'react';
import renderer from 'react-test-renderer';

import Input from './Input';

const props = {
  name: 'input',
  type: 'text',
  placeholder: 'Input',
  onChange: () => null,
};

const customStyles = {
  marginTop: 30,
  lineHeight: 2,
};

describe('Component Input Snapshot', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => ({ matches: true })),
    });
  });

  it('without arguments, take the default values', () => {
    const tree = renderer.create(<Input {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('added optional style inline prop', () => {
    const tree = renderer.create(<Input {...props} styles={customStyles} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
