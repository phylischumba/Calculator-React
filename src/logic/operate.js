/* eslint-disable no-unused-vars */
import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let result;
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);

  if (operation === '+') {
    result = firstNumber.plus(secondNumber);
  } else if (operation === '-') {
    result = firstNumber.minus(secondNumber);
  } else if (operation === 'x') {  let result = 0;

    result = firstNumber.times(secondNumber);
  } else if (operation === '÷') {
    result = firstNumber.div(secondNumber);
  } else if (operation === '%') {
    result = firstNumber.mod(secondNumber);
  }
  return result;
}
