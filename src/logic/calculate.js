/* eslint-disable no-restricted-globals */
import operate from './operate';

const calculate = (data, buttonName) => {
  const operations = ['+', '-', 'X', '÷'];
  let { result, next, operation } = data;

  if (buttonName === '+/-') {
    if (next) {
      next = (+next * -1).toString();
    }
    if (result && result !== 'NaN' && !next) {
      result = (+result * -1).toString();
    }
  }

  if (buttonName === '%') {
    if (next) {
      next = operate(null, next, buttonName);
    } else if (!isNaN(result)) {
      result = operate(result, null, buttonName);
    }
  }

  if (buttonName === '=') {
    if (result === 'NaN' && next && operation) {
      return { result: 'NaN', next: null, operation: null };
    }

    if (next) {
      result = operate(result, next, operation);
      next = null;
      operation = null;
    }
  }

  if (operations.includes(buttonName)) {
    if (result === 'NaN' && next && operation) {
      return { result: 'NaN', next: null, operation: buttonName };
    }

    if (result && next && operation) {
      result = operate(result, next, operation);
      next = null;
    }
    operation = buttonName;
  }

  if (buttonName === '.') {
    if (result && !isNaN(result) && !result.split('').includes('.')) {
      result = `${result}.`;
    }
    if (next && !next.split('').includes('.')) {
      next = `${next}.`;
    }
    if (!next && operation && result !== 'NaN') {
      next = '0.';
    }
  }

  if (buttonName === 'AC') {
    result = '0';
    next = null;
    operation = null;
  }

  if (!isNaN(Number(buttonName)) && (result !== '0' && result !== 'NaN') && !operation) {
    result += buttonName;
  }

  if (!isNaN(Number(buttonName)) && result === '0' && !operation) {
    result = buttonName;
  }

  if (!isNaN(Number(buttonName)) && operation && next !== null) {
    next += buttonName;
  }

  if (!isNaN(Number(buttonName)) && operation && next === null) {
    next = buttonName;
  }

  if (result === 'NaN' && !isNaN(buttonName) && !operation) {
    result = buttonName;
  }

  return { result, next, operation };
};

export default calculate;
