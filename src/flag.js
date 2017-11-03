import React from 'react';
import PropTypes from 'prop-types';
/**
 * Displays an SVG `img` tag with a country flag.
 * @public
 * @param       {string} country
 * @param       {string} role
 * @param       {number} size
 * @returns     {object}
 * @constructor
 */
export default function Flag(props) {
  const { country, role, size, ...otherProps } = props;
  const flagSrc = require(`./img/SVG/${country}.svg`);
  return (
    <img
      src={flagSrc}
      role={role}
      alt={`${country} Flag`}
      height={size}
      width={size}
      {...otherProps}
    />
  );
}

Flag.propTypes = {
  /** The country code for the image path */
  country: PropTypes.string.isRequired,
  /** The a11y role type for the `<img />` tag */
  role: PropTypes.string,
  /** The size of the image */
  size: PropTypes.number,
};

Flag.defaultProps = {
  role: 'img',
  size: 24,
};
