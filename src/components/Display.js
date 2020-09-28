import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ result, operation, next }) {
  return (
    <div className="result">
      {result}
      {' '}
      {operation}
      {' '}
      {next}
    </div>
  );
}

Display.defaultProps = {
  result: '0',
  operation: null,
  next: '',
};

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};
