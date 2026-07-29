/*
 * Complete the 'calculate' function below.
 *
 * The function is expected to return a NUMBER.
 * The function accepts following parameters:
 *  1. STRING operation
 *  2. NUMBER a
 *  3. NUMBER b
 */

function calculate(operation, a, b) {
  // TODO: use an object literal to map operations to functions

  if(operation==='add'){
    return a+b;
  } else if (operation ==='subtract'){
    return a-b;
  } else if (operation === 'multiply'){
    return a*b;
  } else if (operation === 'divide'){
    return a/b;
  } else if (operation ==='power'){
    return a**b;
  } else if (operation === 'modulo'){
    return a%b;
  } else {
    return 'Invalid operation';
  }

  }

module.exports = calculate;
