import React from 'react';
import Flag, { Props } from '../src';
import countryCodes from '../src/countryCodes';

export default {
  title: 'react-flagkit',
  component: Flag,
  parameters: {
    country: {
      values: [
        { name: 'Japan', value: 'JP' },
        { name: 'Arizona', value: 'AR' },
      ],
    },
  },
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = (props?: Partial<Props>) => <Flag {...props} />;

export const Switzerland = () => <Flag country="CH" />;

export const Canada = () => <Flag country="CA" />;

export const France = () => <Flag country="FR" />;

export const USCanada = () => <Flag country="US-CA" />;

export const Large = () => <Flag size={100} />;

export const ButtonRole = () => <Flag role="button" />;

export const AllFlags = () => {
  return countryCodes.map(flag => {
    return <Flag country={flag} />;
  });
};
