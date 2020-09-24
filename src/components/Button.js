import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name, color, wide }) {
  return (
    <div className={wide ? 'zerobtn-style' : 'button-style'}>
      <button type="button" className="name-buttons" style={{ backgroundColor: color }}>{ name }</button>
    </div>
  );
}

Button.defaultProps = {
  color: 'orange',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
};
