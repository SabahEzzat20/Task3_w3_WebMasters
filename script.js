//Exercise 1: Filtering an Array
const evenNumbers = (array) => {
    return Array.isArray(array) ? array.filter(number => number % 2 === 0) : 'Please enter an array to be filtered!';
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]));

//Exercise 2: Find the largest number
const largestNumber = (array) => {
    return Array.isArray(array) ? array.reduce((acc,cur) => Math.max(acc,cur)) : 'Please enter a valid array!';
}
console.log(largestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]));

//Exercise 3: Reverse String
const reverseString = (str) => {
    return typeof str === 'string' ?  [...str].reverse().join('') : 'Please enter a valid string!';
}
console.log(reverseString('hello world'));

//Exercise 4: Remove Duplicates
const removeDuplicates = (arr) => {
    return Array.isArray(arr) ?  [...new Set(arr)] : 'Please enter a valid array!';
}
console.log(removeDuplicates([1,9,2,3,2,3,6,7,9,8,8]));
