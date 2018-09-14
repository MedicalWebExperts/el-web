import React from 'react';
import renderer from 'react-test-renderer';
import ProviderProfile from './ProviderProfile';

const defaultProps = {
  provider: {
    avatar: 'https://placehold.it/350x350',
    name: 'John Doe',
    title: 'MD',
    specialty: 'Family Medicine',
    location: 'Mansfield Clinic',
    description: 'This is a description, like a subtitle.',
    information: [
      {
        title: 'Year Joined',
        description: '1999',
      },
      {
        title: 'Medical School',
        description: 'University of Texas Medical Branch, Galveston, TX., 1996',
      },
      {
        title: 'Residency',
        description: 'John Peter Smith Hospital, Fort Worth, TX',
      },
      {
        title: 'Board Certification',
        description: 'American Board of Family Medicine',
      },
    ],
    map:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13138.598992769137!2d-58.430499!3d-34.587728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x910a40368a2b8c66!2sChori!5e0!3m2!1sen!2sar!4v1536682900333',
  },
};

describe('Component ProviderProfile Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer.create(<ProviderProfile {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
