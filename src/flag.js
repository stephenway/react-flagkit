import React from 'react';
import PropTypes from 'prop-types';

export default function Flag(props) {
  const { content, role, size, ...otherProps } = props;
  const flagSrc = require(`./img/SVG/${content}.svg`);
  return (
    <img
      src={flagSrc}
      role={role}
      alt={`${content} Flag`}
      height={size}
      width={size}
      {...otherProps}
    />
  );
}

Flag.propTypes = {
  content: PropTypes.string,
};

Flag.defaultProps = {
  role: 'img',
  size: 24,
};
