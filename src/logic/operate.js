import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  const firstNumber = Big(numberOne || '0');
  const secondNumber = Big(numberTwo || '0');

  if (operation === '+') {
    result = firstNumber.plus(secondNumber);
  }

  if (operation === '-') {
    result = firstNumber.minus(secondNumber);
  }

  if (operation === 'X') {
    result = firstNumber.times(secondNumber);
  }

  if (operation === '÷') {
    // try {
    result = firstNumber.div(secondNumber);
    // } catch (err) {
    //   result = 'ERROR';
    // }
  }

  if (operation === '%') {
    result = firstNumber.mod(secondNumber);
  }

  return result.toString();
};

export default operate;
