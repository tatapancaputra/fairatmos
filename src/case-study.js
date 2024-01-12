export function addStrings(num1, num2) {
  // Do not proceed if either param is not a string
  if (typeof num1 !== 'string' || typeof num2 !== 'string')
    return 'Input must be strings.';

  // Do not proceed if either param is not a valid number format
  if (isNaN(num1) || isNaN(num2)) return 'Input must be a valid number format.';

  // If we use parseInt, it will proceed without any decimal value
  // To be consistent, all the return type should be string
  return (+num1 + +num2).toString();
}
