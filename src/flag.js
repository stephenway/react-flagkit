import React from 'react';
import PropTypes from 'prop-types';

export default function Flag(props) {
  const { content, role, size, ...otherProps } = props;
  return (
    <img
      src={`./src/SVG/${content}.svg`}
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
