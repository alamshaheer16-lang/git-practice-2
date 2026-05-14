// JavaScript practice examples

// 1. Simple function to add two numbers
function add(a, b) {
  return a + b;
}

// 2. Function to capitalize each word in a sentence
function titleCase(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// 3. Function to filter even numbers from an array
function getEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

// 4. Function to check if a string is a palindrome
function isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return normalized === normalized.split('').reverse().join('');
}

// Example usage
console.log('add(3, 5) =>', add(3, 5));
console.log("titleCase('javascript practice file') =>", titleCase('javascript practice file'));
console.log('getEvenNumbers([1, 2, 3, 4, 5, 6]) =>', getEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log("isPalindrome('Race car') =>", isPalindrome('Race car'));