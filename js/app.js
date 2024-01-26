// (completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

// Define a function, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.


function maxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a
  } else if (b >= a && b >= c) {
    return b
  } else if (c >= a && c >= b) {
    return c
  }
}
console.log(maxOfThree(5,5,2))

// Define a function, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

let letter = 'a'
function isCharAVowel(char) {
  let vowels = 'euioaEUIOA'

  if (vowels.includes(char)) {
    return true
  }
  return false
}
console.log(isCharAVowel(letter))

// Define a function, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

let numbers1 = [1,2,3,4,5]
function sumArray(array) {
  let sum = 0;
  array.forEach(function(num) {
    sum+=num
  })
  return sum
}
console.log(sumArray(numbers1))

// Define a function, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

let numbers2 = [1,2,3,4]
function multiplyArray(array) {
  let product = 1;
  array.forEach(function(num) {
    product *= num
  })
  return product
}
console.log(multiplyArray(numbers2))

// Define a function, numArgs that returns the number of arguments passed to the function when called.

function numArgs() {
  return arguments.length
}
console.log(numArgs("s", "b", "l", 1, 2, true, false, null, undefined)) //returns 9

// Define a function,, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

let wordExample = 'sofiia'
function reverseString(str) {
  const reverseWord = str.split('').reverse().join('')
  return reverseWord
}
console.log(reverseString(wordExample))

// Define a function, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

let stringArray = ['abc', 'abcd', 'e']
function longestStringInArray(array2) {
  let longest = '';
  array2.forEach(function(str) {
    if (str.length > longest.length) {
      longest = str
    }
  })

  return longest.length
}
console.log(longestStringInArray(stringArray))

// Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"]


let lengthNumber = 4;
let strings = ['hello', 'bye', 'what', 'are', 'you', 'doing']
function stringsLongerThan(array3, number3) {
  let newArr = []
  array3.forEach(function(word) {
    if (word.length > lengthNumber) {
      newArr.push(word)
    }
  })
  return newArr
}

console.log(stringsLongerThan(strings, lengthNumber))