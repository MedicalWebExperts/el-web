import React from 'react';
import renderer from 'react-test-renderer';
import ProviderListItem from './ProviderListItem';

const defaultProps = {
  image: 'https://placehold.it/350x350',
  name: 'John Doe',
  title: 'MD',
  specialty: 'Family Medicine',
  location: 'Mansfield Clinic',
  description: 'This is a description, like a subtitle.',
  action: '',
  actionText: 'View Profile',
};

describe('Component ProviderListItem Snapshot', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => ({ matches: false })),
    });
  });

  it('without arguments, take the default values', () => {
    const tree = renderer.create(<ProviderListItem {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
