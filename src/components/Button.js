import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name }) {
  return (
    <div>
      {name}
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
