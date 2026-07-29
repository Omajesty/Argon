/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  // TODO: return the number of tallest candles

  const talletCandle = Math.max(...candles);
    return candles.filter(candleHeight => candleHeight === talletCandle).length;
}

module.exports = birthdayCakeCandles;
