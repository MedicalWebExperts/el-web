import React from 'react';
import renderer from 'react-test-renderer';
import ProviderData from './ProviderData';

const defaultProps = {
  image: 'https://placehold.it/350x350',
  name: 'John Doe',
  title: 'MD',
  specialty: 'Family Medicine',
  location: 'Mansfield Clinic',
  description: 'This is a description, like a subtitle.',
};

describe('Component ProviderData Snapshot', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => ({ matches: false })),
    });
  });

  it('without arguments, take the default values', () => {
    const tree = renderer.create(<ProviderData {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
