/* eslint-disable react/require-default-props */
/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  buttonName, color, wide, handleClick,
}) {
  return (
    <div className={wide ? 'zerobtn-style' : 'button-style'}>
      <button type="button" className="name-buttons" style={{ backgroundColor: color }} onClick={() => handleClick(buttonName)}>{ buttonName }</button>
    </div>
  );
}

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};
