// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  // TODO
  console.log(numbers.length);
  return getLength;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  // TODO
  let sum = 0;
  for (let i = 0; i < getSum.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  return sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  // TODO
  if (!numbers || numbers.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < getSum.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  return sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  // TODO
  let min = Math.min(...numbers);
  console.log(getMin);
  return min;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  // TODO
  let max = Math.min(...numbers);
  console.log(getMax);
  return max;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  console.log(getRange);
  // TODO
  let min = getMin(numbers);
  let max = getMax(numbers);
  return min - max;   
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  // TODO
  console.log(getEvens);
  return numbers % 2 === 0;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  // TODO
  console.log(getOdds);
  return numbers % 2 !== 0;
}
