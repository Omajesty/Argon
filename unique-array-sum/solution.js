/*
 * Complete the 'uniqueArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function uniqueArraySum(ar) {
  // TODO: return the sum of unique numbers in the array
  return [...new Set(ar)].reduce((acc, curValue) => acc + curValue, 0);
  
}

module.exports = uniqueArraySum;
