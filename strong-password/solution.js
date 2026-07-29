/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an ARRAY OF STRINGS.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
  // TODO: return an array of error messages for each rule the password fails
  const reasons = [];

  if (n < 6) {
    reasons.push("Password must be at least 6 characters");
  }

  if (!/[0-9]/.test(password)) {
    reasons.push("Password must contain at least one digit");
  }

  if (!/[A-Z]/.test(password)) {
    reasons.push("Password must contain at least one uppercase letter");
  }

  if (!/[a-z]/.test(password)) {
    reasons.push("Password must contain at least one lowercase letter");
  }


  if (!/[@!#$%^&*()-+]/.test(password)) {
    reasons.push("Password must contain at least one special character (!@#$%^&*()-+)");
  }

  return reasons;

}

module.exports = minimumNumber;
