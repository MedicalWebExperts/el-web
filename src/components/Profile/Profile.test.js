import React from 'react';
import renderer from 'react-test-renderer';
import Profile from './Profile';

const providerProps = {
  type: 'provider',
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
};

const locationProps = {
  type: 'location',
  avatar: 'https://placehold.it/350x350',
  name: 'Albuquerque Urgent Care',
  address: 'Street 1',
  city: 'Albuquerque',
  state: 'New Mexico',
  information: [
    {
      title: 'Facility Type',
      description: 'Urgent Care',
    },
    {
      title: 'Insurance Accepted',
      description: 'Aetna, Amerigroup, Amerihealth Caritas DC, Blue Cross/Blue Shield MD',
    },
    {
      title: 'Phone',
      description: '555-9999',
    },
    {
      title: 'Available hours',
      description: 'Noon to Midnight',
    },
  ],
  map:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417918.1817301707!2d-106.95666690318821!3d35.082087678816144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220addd309837b%3A0xc0d3f8ceb8d9f6fd!2sAlbuquerque%2C+NM%2C+USA!5e0!3m2!1sen!2sar!4v1537560414085',
};

describe('Component Profile Snapshot', () => {
  it('without arguments, take the provider values', () => {
    const tree = renderer.create(<Profile data={providerProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('without arguments, take the location values', () => {
    const tree = renderer.create(<Profile data={locationProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
