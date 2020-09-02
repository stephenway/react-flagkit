import React from 'react';
import Flag, { Props } from '../src';

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

export const USCanada = () => <Flag country="US-CAp" />;

export const Large = () => <Flag size={100} />;

export const ButtonRole = () => <Flag role="button" />;
