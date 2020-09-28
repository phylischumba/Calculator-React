import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  const firstNumber = Big(numberOne || '0');
  const secondNumber = Big(numberTwo || '0');

  if (operation === '+') {
    result = firstNumber.plus(secondNumber).toFixed();
  }

  if (operation === '-') {
    result = firstNumber.minus(secondNumber).toFixed();
  }

  if (operation === 'X') {
    result = firstNumber.times(secondNumber).toFixed();
  }

  if (operation === '÷') {
    result = firstNumber.div(secondNumber).toFixed();
  }

  if (operation === '%') {
    result = firstNumber.div(Big(100)).toFixed();
  }

  return result;
};

export default operate;
