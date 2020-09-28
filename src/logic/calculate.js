import operate from './operate';

const calculate = (data, buttonName) => {
  const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const { result, next, operation } = data;
  const symbols = ['+', '-', 'X', '÷', '%'];

  if (symbols.includes(buttonName) && result && next) {
    return {
      result: operate(result, next, operation).toString(),
      operation: buttonName,
      next: null,
    };
  }

  if (symbols.includes(buttonName) && !next && result) {
    return {
      result,
      operation: buttonName,
      next,
    };
  }

  if (symbols.includes(buttonName) && next && !result) {
    return {
      result: next,
      operation: buttonName,
      next: null,
    };
  }

  if (result === 'ERROR') {
    return {
      result: null,
      operation: null,
      next: null,
    };
  }

  if (buttonName === '+/-' && !next && result && result !== 'ERROR') {
    return {
      result: (result * -1).toString(),
      next,
      operation,
    };
  }

  if (values.includes(buttonName)) {
    return {
      result,
      next: next ? `${next}${buttonName}` : `${buttonName}`,
      operation,
    };
  }

  if (buttonName === '+/-' && next && result !== 'ERROR') {
    return {
      result,
      next: (next * -1).toString(),
      operation,
    };
  }

  if (buttonName === 'AC') {
    return {
      result: null,
      next: null,
      operation: null,
    };
  }

  if (buttonName === '=') {
    return {
      result: operate(result, next, operation),
      next: null,
      operation: null,
    };
  }

  if (buttonName === '.') {
    if (!next) {
      return {
        result,
        next: '0.',
        operation,
      };
    }
    if (next && !next.includes('.')) {
      return {
        result,
        next: `${next}.`,
        operation,
      };
    }
  }

  return [result, next, operation];
};

export default calculate;
