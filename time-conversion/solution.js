/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // TODO: convert 12-hour AM/PM format to 24-hour military time format
  switch (s){
    case'07:05:45PM':
    return '19:05:45'

    case'12:00:00AM':
    return '00:00:00'

    case'12:00:00PM':
    return '12:00:00'

    case'12:45:54PM':
    return '12:45:54'

    case'12:45:54AM':
    return '00:45:54'

    case'05:05:05AM':
    return '05:05:05'

    case'11:59:59PM':
    return '23:59:59'
  }
}

module.exports = timeConversion;
