import React, { FC, HTMLAttributes } from 'react';
import countryCodes from './countryCodes';

export interface Props extends HTMLAttributes<HTMLImageElement> {
  country?: string;
  role?: string;
  size?: number;
  alt?: string;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
const Flag: FC<Props> = ({
  country = 'US',
  role = 'img',
  size = 24,
  alt,
  ...props
}) => {
  if (country) {
    const countryCode = country.toUpperCase();
    if (countryCodes.find(el => el === country) !== undefined) {
      const jsDelivr =
        'https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.2/Assets/SVG';
      const flagSrc = `${jsDelivr}/${countryCode}.svg`;
      return (
        <img
          src={flagSrc}
          role={role}
          alt={alt ?? `${countryCode} Flag`}
          height={size}
          width={size}
          {...props}
        />
      );
    }
    return <span>{countryCode}</span>;
  }
  return null;
};

export default Flag;
