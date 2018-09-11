import React from 'react';
import renderer from 'react-test-renderer';
import Information from './Information';

const defaultProps = {
  data: [
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
    {
      title: 'Hospital Affilation',
      list: ['Arlington Memorial Hospital'],
    },
    {
      title: 'Professional Organizations',
      list: [
        'American Medical Association',
        'Texas Medical Association',
        'American Academy of Family Physicians',
      ],
    },
    {
      title: 'Professional Organizations',
      description: 'American Board of Family Medicine',
      list: [
        'American Medical Association',
        'Texas Medical Association',
        'American Academy of Family Physicians',
      ],
    },
  ],
};

describe('Component Information Snapshot', () => {
  it('without arguments, take the default values', () => {
    const tree = renderer.create(<Information {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
