//                            ==============================================
//                              Function Challenges: A Hands-on Assignment
//                            ==============================================

// Question no. 1:
// Write a function `isEven` that takes a number as an argument and returns true if the number is even and
// false if it is odd.
// Answer:
// let enterNumber = +prompt("Enter your number");
// const isEven = (integer) => {
//    let num = integer % 2 === 0;
//    return num;
// }

// let result = isEven(enterNumber);
// console.log(`Your number is ${result}`);


// =============================================
// Question no. 2:
// 2. Create a function `countVowels` that takes a string and returns the number of vowels in that string.
// Answer:
// let yourString = prompt("Enter your string");
// const  countVowels = (str) =>{
//     let count = 0;
//     for(let char of str.toLowerCase()){
//        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//          count++;
//        }
// }
//     console.log(count);
//    }
//   countVowels(yourString);


// =============================================
// Question no. 3:
// 3. Write a function `reverseString` that takes a string and returns it reversed (e.g., "hello" becomes "olleh").
// Answer:
// let string = prompt("Enter a string?");
// const reverseString = (revStr) => {
//    let reverseStr = "";
//    for (let i = revStr.length - 1; i >= 0; i--) {
//          reverseStr += revStr[i];
//        }
//        return reverseStr;
// }
// console.log(`Your reverse string is ${reverseString(string)}`);


// =============================================
// Question no. 4:
// 4. Create a function `findMax` that takes an array of numbers and returns the largest number.
// Answer:
// let numbers = [100, 200, 300, 400, 500, 600, 700, 1000, 2000];

// const findMax = (num) => {
//    let largestNum = num[0];
//    for (let i = 0; i <= num.length; i++){
//      if(num[i] > largestNum){
//       largestNum = num[i]
//      }
//    }
//    return largestNum;
// }
// let result = findMax(numbers);
// console.log(`The largest number is ${result}`);


// =============================================
// Question no. 5:
// 5. Write a function `isPalindrome` that checks if a given string is a palindrome (reads the same backward
// as forward).
// Answer:
// const isPalindrome = (str) => {
//    let opposite = str.split('').reverse().join('');
//    return opposite === str;
// }
// console.log(isPalindrome('hello'));
// console.log(isPalindrome('noon'));
// console.log(isPalindrome('world'));
// console.log(isPalindrome('wow'));


// =============================================
// // Question no. 6:
// 6. Create a function `fibonacci` that returns the nth Fibonacci number.
// Answer:
// const fibonacci = (nth) => {
//    let a = 0;
//    let b = 1;
//    let c;
//    for(let i = 0; i < nth; i++){
//       c = a + b;
//       a = b;
//       b = c;
//    }
//   return a;
// }
// console.log(fibonacci(8));

// =============================================
// Question no. 7:
// 7. Write a function `factorial` that calculates the factorial of a given number.
// Answer:
// let userNum = +prompt("Enter a number?");
// const factorial = (num) => {
//    let fac = 1;
//    for(num; num > 1; num--){
//             fac = fac * num;
//             console.log(fac);
//          }

// }
// factorial(userNum);



// =============================================
// Question no. 8:
// 8. Create a function `removeDuplicates` that takes an array and returns a new array without duplicates.
// Answer:
// let arr = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,8,8];
// const removeDuplicates = (num) => {
//     return [...new Set(num)];
// }
// console.log(removeDuplicates(arr));


// =============================================
// Question no. 9:
// 9. Write a function `sumArray` that takes an array of numbers and returns the sum.
// Answer:
// 1st way
// let num = [4, 14, 44, 444, 4444];
// function sumArray(numbersArray){
//    let sum = 0;
//    for (let number of numbersArray){
//       sum += number;
//    }
//    return sum;
// }
// console.log("The sum of array is " + sumArray(num) + ".");

// // 2nd way
// let num = [4, 14, 44, 444, 4444];
// const sumArray = (...arr) => {
//     let sum = 0;
//     for(let i of arr){
//       sum += i;
//     }
//     return sum;
// }

// console.log("The sum of array is " + sumArray(...num) + ".");

// const sumArray = (arr) => {
//     return arr.reduce((a, b) => a + b);
// }
// console.log("The sum of array is " + sumArray(num) + ".");


// =============================================
// Question no. 10:
// 10. Create a function `sortArray` that takes an array of numbers and returns it sorted in ascending order.
// Answer:
// Asending order
// let number = [4, 6, 3, 2, 1, 5];
// const sortArray = (arr) => {
//   return [...arr].sort((a,b) => a - b);
//   }
// console.log(sortArray(number));


// =============================================
// Question no. 11:
// 11. Write a function `stringLength` that returns the length of a given string.
// Answer:
// let userString = prompt("Enter your string to get length?");
// const stringLength = (str) => {
//    return str.length;
// }
// console.log( "Your string length is :" + stringLength(userString));



// =============================================
// Question no. 12:
// 12. Create a function `toUpperCase` that takes a string and returns it in uppercase.
// Answer:
// let userString = prompt("Enter your string to convert uppercase?");
// const toUpperCase = (str) => {
//    return str.toUpperCase();
// }
// console.log("Your string change to uppercase: " + toUpperCase(userString));



// =============================================
// Question no. 13:
// 13. Write a function `capitalizeFirstLetter` that capitalizes the first letter of each word in a string.
// Answer:
// let userString = prompt("Enter your string to capitalized first letter");
// const capitalizeFirstLetter = (str) =>{
//    return str.split(" ").map(letter => letter[0].toUpperCase() + letter.slice(1)).join(" ");
// }

// console.log("Capitalizes the first letter of each word in this string: " + capitalizeFirstLetter (userString));

// let userString = prompt("Enter your string to capitalized first letter");
// const capitalizeFirstLetter = (str) => {
//    let word = str.split(' ');
//    for(let i = 0; i < word.length; i++){
//     word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
//    }
//    return word.join(" ");
// }
// console.log(capitalizeFirstLetter(userString));


// =============================================
// Question no. 14:
// 14. Create a function `mergeArrays` that takes two arrays and merges them into one.
// Answer:
// 1st way
// let fruits = ["🍌", "🍉", "🍑","🍋"];
// let animals =["😺", "🐴", "🐪", "🐍"];
// function mergeArrays(arr1, arr2){
//   return [...arr1, ...arr2];
// }
// console.log(fruits);
// console.log(animals);
// console.log("Merge our arrays " + mergeArrays(fruits, animals));

// let fruits = ["🍌", "🍉", "🍑","🍋"];
// let animals =["😺", "🐴", "🐪", "🐍"];
// function mergeArrays(arr1, arr2){
//   return [...arr1, ...arr2];
// }
// console.log(fruits);
// console.log(animals);
// console.log("Merge our arrays " + mergeArrays(fruits, animals));

// 2nd way
// let fruits = ["🍌", "🍉", "🍑","🍋"];
// let animals =["😺", "🐴", "🐪", "🐍"];
// const mergeArrays = (...arrays) => {
//    return arrays.flat();
// }
// console.log(mergeArrays(fruits, animals));


// =============================================
// Question no. 15:
// 15. Write a function `isPrime` that checks if a number is prime.
// Answer:
// const number = parseInt(prompt('Enter a positive number'));
// const isPrime = () => {
//     let PrimeNum = true;
//     if(number === 1){
//         console.log('1 is neither prime nor compositenumber')
//     } else if( number > 1){
//         for(let i = 2; i < number; i++){
//             if(number % 1 == 0){
//                 PrimeNum = false;
//                 break;
//             }
//         }
//         if(PrimeNum) {
//             console.log(`${number} is a prime number`);
//         } else {
//             console.log(`${number} is not a prime number`);
//         }
//     } else {
//         console.log('The number is negative that way is not a prime number')
//     }
// }
// isPrime();




// =============================================
// Question no. 16:
// 16. Create a function `countWords` that counts the number of words in a string.
// Answer:
// let userString = prompt("Enter your string?");
// const countWords = (str) => {
//    return str.split(" ").length;
// }
// console.log("In your string number of words is  : " + countWords(userString));


// =============================================
// Question no. 17:
// 17. Write a function `arrayContains` that checks if an array contains a specific value.
// // Answer:
// let fruits = ["🍌", "🍉", "🍑","🍋"];
// const arrayContains = (str) => {
//    return fruits.includes(str);

// }
// console.log( arrayContains("🍌"));
// console.log( arrayContains("🍎"));



// =============================================
// Question no. 18:
// 18. Create a function `uniqueElements` that returns an array of unique elements from a given array.
// Answer:
// let numbers = [2, 3, 3, 4, 5, 7, 7, 8, 8, 8];
// const uniqueElements = (arr) => {
//    return [...new Set(arr)]
// }
// console.log( uniqueElements(numbers));



// =============================================
// Question no. 19:
// 19. Write a function `flattenArray` that flattens a nested array.
// Answer:
// let nestedArray = [1, [2, 3], [4, 5], [6, 7, 8, 9], [10]];
// const flattenArray = (arr) => {
//    return arr.flat();
// }
// console.log(flattenArray(nestedArray));



// =============================================
// Question no. 20:
// 20. Create a function `repeatString` that takes a string and a number, and returns the string repeated that many times.
// Answer:
// const repeatString = (str, n) => {
//    let repeatedStr = '';
//    for(let i = 0; i < n; i++){
//       repeatedStr += str
//    }
// return repeatedStr;
// }
// console.log(repeatString("hello ", 7));



// =============================================
// Question no. 21:
// 21. Write a function `getRandomInt` that returns a random integer between two numbers.
// Answer:
// const getRandomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(getRandomInt(2, 6));
// console.log(getRandomInt(4, 8));



// =============================================
// Question no. 22:
// 22. Create a function `average` that calculates the average of an array of numbers.
// Answer:
// let number = [2, 6, 8, 10, 14]
// const average = (array) => {
//     let total = 0;
//     for(let i = 0; i < array.length; i++){
//          total += array[i];
//     }
//     return total / array.length;
// }
// console.log("The average of array is " + average(number));



// =============================================
// Question no. 23:
// 23. Write a function `removeSpaces` that removes all spaces from a string.
// Answer:
// let string = "My name is Rubab Ansari";
// const removeSpaces = (str) => {
//    return str.split(" ").join("");
// }
// console.log("Remove all spaces in a string " + removeSpaces(string) + ".");



// =============================================
// Question no. 24:
// 24. Create a function `difference` that returns the difference between the largest and smallest numbers in an array.
// Answer:
// const numbers = [2, 22, 222, 2222];
// const difference = (nums) => {
//    let largestNum = nums[0];
//    let smallesttNum = nums[0];
//    for (let i = 0; i < nums.length; i++) {
//       if (largestNum < nums[i]) {
//          largestNum = nums[i]
//       }
//       if (smallesttNum > nums[i]) {
//          smallesttNum = nums[i]
//       }
//    }
//    console.log(`The largest number is: ${largestNum}`);
//    console.log(`The smallest number is: ${smallesttNum}`);
//    return largestNum - smallesttNum
// }
// console.log(difference(numbers));



// =============================================
// Question no. 25:
// 25. Write a function `shuffledArray` that takes an array and returns it shuffled randomly.
// Answer:
// let array = [1, 2, 3, 4, 5, 6, 7];
// const shuffledArray = (num) => {
//    let first;
//    for(let second = 0; second < num.length; second++){
//       first = Math.floor(Math.random() * 6);
//       [num[first], num[second]] = [num[second], num[first]];
//       return num;
//    }

// }
// console.log(shuffledArray (array));


// =============================================
// Question no. 26:
// 26. Create a function `longestWord` that returns the longest word in a string.
// Answer:
// let string = "I love javascript";
// const longestWord = (str) => {
//    let longestString = "";
//    let word = str.split(' ');
//    for (let i = 0; i < word.length; i++){
//       if(word[i].length > longestString.length){
//          longestString = word[i]
//       }
//    }
//    return longestString;
// }
// console.log("This is the longest string in the string is : " + longestWord(string));



// =============================================
// Question no. 27:
// 27. Write a function `countDown` that takes a number and counts down to zero, logging each number.
// Answer:
// let userNumber = parseInt(prompt("Enter a number"));
// const countDown = (num) => {
//    for(let i = num; i >= 0; i--){
//       console.log(i);
//    }
// }
// console.log(countDown(userNumber));



// =============================================
// Question no. 28:
// 28. Create a function `firstNonRepeatingChar` that finds the first non-repeating character in a string.
// // Answer:
// let userString = prompt("Enter a String");
// const firstNonRepeatingChar = (str) => {
//    for (let i = 0; i < str.length; i++){
//          if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
//              console.log(str[i]);
//              return str;
//          }
//       }
// }
// console.log(firstNonRepeatingChar(userString));



// =============================================
// Question no. 29:
// 29. Write a function `toTitleCase` that converts a string to title case.
// Answer:
// let userString = prompt("Enter your string to converts the title case?");
// const toTitleCase = (str) => {
//    return str.split(" ").map(letter => letter[0].toUpperCase() + letter.slice(1)).join(" ");
// }

// console.log("Converts the title case in this string: " + toTitleCase (userString) + ".");

// let userString = prompt("Enter your string to capitalized first letter");
// const capitalizeFirstLetter = (str) => {
//    let word = str.split(' ');
//    for(let i = 0; i < word.length; i++){
//     word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
//    }
//    return word.join(" ");
// }
// console.log(capitalizeFirstLetter(userString));



// =============================================
// Question no. 30:
// 30. Create a function `removeElement` that removes a specified element from an array.
// Answer:
// let fruits = ["🍎", "🍉", "🍊", "🦄", "🍌"];
// const removeElement = (element) => {
//    return element.splice(3, 1);
// }
// console.log("This is orignal " + fruits);
// console.log("Removes a specified element from an array " + removeElement(fruits));
// console.log("Result " + fruits);



// =============================================
// Question no. 31:
// 31. Write a function `swap` that swaps the values of two variables.
// Answer:
// let arr1 = ["🍉", "🍊", "🍑", "🍌"];
// let arr2 = [10, 20, 30, 40];
// const swap = (a, b) => {
//    return [a, b] = [b, a];
// }
// console.log(arr1);
// console.log(arr2);
// console.log(swap(arr1,arr2));



// =============================================
// Question no. 32:
// 32. Create a function `countOccurrences` that counts how many times a specific value appears in an array.
// Answer:
// let array = [10, 20, 20, 30, 30, 30, 40, 40, 50, 50, 50, 50];
// const countOccurrences = (arr) => {
//    count = {};
//    for(let i = 0; i < arr.length; i++){
//       let num = arr[i];
//       count[num] = count[num] ? count[num] + 1 : 1;
//    }
//    return count;
// }
// console.log(countOccurrences(array));



// =============================================
// Question no. 33:
// 33. Write a function `mostFrequent` that finds the most frequently occurring element in an array.
// Answer:
// let array = [10, 10, 20, 30, 10, 20, 20];
// const mostFrequent = (arr) => {
//    let count = {};
//    for (const i of arr) {
//       count[i] = count[i] ? count[i] + 1 : 1;
//    }
//    return count;
// }
// console.log(mostFrequent(array));



// =============================================
// Question no. 34:
// 34. Create a function `combineStrings` that concatenates two strings with a space in between.
// Answer:
// let userString1 = prompt("Enter a string");
// let userString2 = prompt("Enter another string");
// const combineStrings = (str1, str2) => {
//   return str1 + " " + str2;
// }
// console.log(combineStrings(userString1, userString2));



// =============================================
// Question no. 35:
// 35. Write a function `randomColor` that generates and returns a random RGB color.
// Answer:
// hexColor Random Color
// const randomColor = () => {
//     document.body.style.backgroundColor = `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`
// }
// randomColor();

// rgb Random Color
// const randomColor = () => {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// }
// randomColor();



// =============================================
// Question no. 36:
// 36. Create a function `sumOfDigits` that returns the sum of the digits of a number.
// Answer:
// let userDigits = +prompt("Enter digits");
// const sumOfDigits = (num) => {
//   let sum = 0;
//   while(num !== 0){
//     sum += num % 10;
//    num = parseInt(num / 10);
// }
// return sum;
// }
// console.log("This is the sum of your digits " + sumOfDigits(userDigits));



// =============================================
// Question no. 37:
// 37. Write a function `findIndex` that returns the index of a specific value in an array.
// Answer:
// let fruits = ["Watermellon 🍉", "Lemon 🍋", "Banana 🍌", "Peach 🍑", "Grapes 🍇"];
// let findIndex = fruits.findIndex(item => {
//     return item === "Banana 🍌";
// })
// console.log(`🍌 index number is ${findIndex}`);



// =============================================
// Question no. 38:
// 38. Create a function `shuffleString` that shuffles the characters of a string randomly.
// Answer:
// let string = 'javascript';
// const shuffleString = (element) => {
//     let index;
//     let stringArray = string.split('');
//     for(let i = 0; i < stringArray.length; i++){
//         index = Math.floor(Math.random() * i)
//         let temp;
//         temp = stringArray[i];
//         stringArray[i] = stringArray[index]
//         stringArray[index] = temp;
//     }
//     let shuffledString = stringArray.join('');
//     return shuffledString;
// }
// console.log("Here is the shuffles the characters of a string randomly " + shuffleString(string));



// =============================================
// Question no. 39:
// 39. Write a function `secondLargest` that finds the second largest number in an array.
// Answer:
// let arr = [1, 2, 3, 4, 5, 6];
// const secondLargest = (newNum) => {
//    newNum.sort((a, b) => a - b);
//    return newNum[newNum.length - 2];
// }
// console.log(secondLargest(arr));



// =============================================
// Question no. 40:
// 40. Create a function `stringToArray` that converts a string to an array of words.
// Answer:
// let userString = prompt('Enter a string');
// // 1st way
// const stringToArray = (str) => {
//     return str.split('');
// }
// console.log(stringToArray(userString));

// 2nt way
// const stringToArray = (str) => {
//    return Array.from(str);
// }
// console.log(stringToArray(userString));

// 3rd way
// const stringToArray = (str) => {
//    str = [...str];
//    return str;
// }
// console.log(stringToArray(userString));



// =============================================
// Question no. 41:
// 41. Write a function `mergeSortedArrays` that merges two sorted arrays into one sorted array.
// Answer:
// let a = [2, 4, 6, 8, 10, 12, 14];
// let b = [1, 3, 5, 7, 9, 11, 13];

// const mergeSortedArrays = (arr1, arr2) => {
//    return [...arr1, ...arr2].sort((a, b) => a - b)
// }
// console.log(mergeSortedArrays(a, b));



// =============================================
// Question no. 42:
// 42. Create a function `sumPositiveNumbers` that sums all positive numbers in an array.
// Answer:
// let numbers = [2, 4, 6, 10, -1, -8, -9, 3];
// const sumPositiveNumbers = (arr) => {
//     return arr.filter(item => item > 0).reduce((a, b) => a + b);
// }
// console.log("The sums all positive numbers in an array " + sumPositiveNumbers(numbers));



// =============================================
// Question no. 43:
// 43. Write a function `extractDomain` that extracts the domain from a URL.
// Answer:
// let exmpleUrl = "https://www.youtube.com"
// const extractDomain = (url) => {
//     url = url.replace("http://", "");
//     url = url.replace("https://", "");
//     url = url.replace("www.", "");

//     return url.split(" ")[0]
// }
// console.log(extractDomain(exmpleUrl));



// =============================================
// Question no. 44:
// 44. Create a function `sumEvenNumbers` that sums all even numbers in an array.
// Answer:
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sumEvenNumbers = (arr) => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             sum += arr[i];
//         }
//     }
//     return sum
// }
// console.log("The sums all even numbers in an array " + sumEvenNumbers(numbers));



// =============================================
// Question no. 45:
// 45: Write a function `getDayOfWeek` that returns the day of the week for a given date.
// Answer:
// let days = ["Monday", "Tuesday", "Wednesday", "thursday", "Friday", "Saturday", "Sunday",]
// const getDayOfWeek = (day) => {
//     let dayName = new Date();
//     return day[dayName.getDay()]
// }
// console.log("Today is " + getDayOfWeek (days));



// =============================================
// Question no. 46:
// 46. Create a function `largestEvenNumber` that finds the largest even number in an array.
// Answer:
// let enenNumbers = [2, 4, 6, 8, 10, 12];
// const largestEvenNumber = () => {
//     let largestEven = 0;
//     for(let i = 0; i < enenNumbers.length; i++){
//         if(enenNumbers[i] % 2 === 0 &&  enenNumbers[i] > largestEven){
//             largestEven = enenNumbers[i];
//         }
//     }
//     return largestEven;
// }
// console.log("The largest even number in an array is " + largestEvenNumber());



// =============================================
// Question no. 47:
// 47. Write a function `mergeObjects` that merges two objects into one.
// Answer:
// let person = {
//     fullName : "Rubab Ansari",
//     gender : "Female"
// }
// let identity = {
//     phone : 1234,
//     subject : "Javascript"
// }
// const mergeObjects = (obj1, obj2) => {
//     return {...obj1, ...obj2};

// }
// console.log(mergeObjects(person, identity));

// const mergeObjects = (obj1, obj2) => {
//     return Object.assign(obj1, obj2);

// }
// console.log(mergeObjects(person, identity));



// =============================================
// Question no. 48:
// 48. Create a function `capitalizeFirstLetter` that capitalizes the first letter of each word in a string.
// Answer:
// let userString = prompt("Enter your string to capitalized first letter");
// const capitalizeFirstLetter = (str) => {
//    let word = str.split(' ');
//    for(let i = 0; i < word.length; i++){
//     word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
//    }
//    return word.join(" ");
// }
// console.log(capitalizeFirstLetter(userString));

// let userString = prompt("Enter your string to capitalized first letter");
// const capitalizeFirstLetter = (str) =>{
//    return str.split(" ").map(letter => letter[0].toUpperCase() + letter.slice(1)).join(" ");
// }

// console.log("Capitalizes the first letter of each word in this string: " + capitalizeFirstLetter (userString));



// =============================================
// Question no. 49:
// 49. Write a function `randomInteger` that generates a random integer between two given values.
// Answer:
// const getRandomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log("Generates a random integer between two given values " + getRandomInt(2, 6));
// console.log("Generates a random integer between two given values " + getRandomInt(4, 8));



// =============================================
// Question no. 50:
// 50. Create a function `uniqueArray` that returns an array with duplicate values removed..
// Answer:
// let names = ["Rubab", "Rabia", "Aiman", "Rubab", "Rabia"];

// const uniqueArray = (arr) => {
//     return [...new Set(arr)]
   
// }
// console.log(names)
// console.log(uniqueArray(names));



// =============================================
// Question no. 51:
// 51. Write a function `isAnagram` that checks if two strings are anagrams of each other (e.g., "listen" and "silent").
// Answer:
// let firstWord = "listen";
// let secondWord = "silent";

// const isAnagram = (str1, str2) => {
//   let a = str1.toLowerCase();
//   let b = str2.toLowerCase();

//    a = str1.split("").sort().join("");
//    b = str2.split("").sort().join("");

//    return a === b;
// }
// console.log("This string is Anagram " + isAnagram(firstWord,secondWord));



// let firstWord = "wow";
// let secondWord = "now";

// const isAnagram = (str1, str2) => {
//   let a = str1.toLowerCase();
//   let b = str2.toLowerCase();

//    a = str1.split("").sort().join("");
//    b = str2.split("").sort().join("");

//    return a === b;
// }
// console.log("This string is not Anagram " + isAnagram(firstWord,secondWord));



// =============================================
// Question no. 52:
// 52. Create a function `removeVowels` that takes a string and returns a new string with all vowels removed.
// Answer:
// let userStrng = prompt("Enter a string");
// const removeVowels = (str) => {
//     let vowels = ["a", "e", "i", "o", "u"];
//     let result = "";
//     for(let i = 0; i < str.length; i++){
//         if(!vowels.includes(str[i])){
//             result += str[i]
//         } 
//     }
//     return result;
// }
// console.log("The orignal string is " + userStrng + " and removed vowels the result is " + removeVowels(userStrng));




// =============================================
// Question no. 53:
// 53. Write a function `getAge` that calculates the age of a person based on their birth year.
// Answer:
// let myDteOfBirth = "1992-05-02"
// const getAge = (age) => {
//     let today = new Date();
//     let birthdate = new Date (age);
//     let ageyear = today.getFullYear() - birthdate.getFullYear();
//     let ageMonth = today.getMonth() - birthdate.getMonth();
//     let ageDate = today.getDate() - birthdate.getDate();

//     if(ageMonth < 0 || (ageMonth == 0 && ageDate < 0)){
//         ageyear--;
//     }
//     return ageyear;
// }
// console.log("Your age is " + getAge(myDteOfBirth) + " years old.");




// =============================================
// Question no. 54:
// 54. Create a function `findMissingNumber` that finds the missing number in a given array of consecutive integers.
// Answer:
// let ourArray = [1, 3, 4, 5, 7, 8, 9, 10];
// const findMissingNumber = (arr) => {
//     const arrayLength = arr.length + 1;
//     const missingNumber = [];
//     for(let i = 0; i < arrayLength; i++){
//         if(arr.indexOf(i) === -1){
//            missingNumber.push(i)
//         }
//     }
//     return missingNumber;
// }
// console.log(findMissingNumber(ourArray));



// =============================================
// Question no. 55:
// 55. Write a function `countUppercase` that counts the number of uppercase letters in a string.
// Answer:
// let userString = prompt("Enter a string");
// const countUppercase = (str) => {
//     count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === str[i].toUpperCase()){
//          count++;
//         }
//     }
//     return count;
// }
// console.log("The number of uppercase letters in a string is " + countUppercase(userString));




// =============================================
// Question no. 56:
// 56. Create a function `validateEmail` that checks if a given email address is valid.
// Answer:
// const userEmail = prompt("Please enter your email");

// const validateEmail = (email) => {
//     let isValid = false;
//     for (let i= 0;i < email.length; i++) {
//         if (email[i] === "@") {
//             isValid = true;
//             break;
//         }
// }

//     if (isValid) {
//         console.log("Valid email address")
//     } else {
//         console.log("inValid email address")
//     }
//     return isValid
// }
// console.log(validateEmail(userEmail));



// =============================================
// Question no. 57:
// 57. Write a function `toggleNavbar` that shows or hides a navigation bar when a button is clicked.
// Answer:
// let menueList = document.getElementById("menu_list");
// menueList.style.maxHeight = "0px";
// const toggalMenuBar = () => {
//     if(menueList.style.maxHeight == "0px"){
//         menueList.style.maxHeight = "300px";
//     } else {
//         menueList.style.maxHeight = "0px";
//     }
// };



// =============================================
// Question no. 58:
// 58. Create a function `submitForm` that validates a form and submits it if all fields are filled correctly.
// Answer:
// let form = document.getElementById('form');
// form.addEventListener('submit', function(event){
//   event.preventDefault;
//   let userName = document.getElementById('userName').value.trim();
//   let email = document.getElementById('email').value;

//   if(!userName){
//     alert('Please enter user name');
// } else if(!email){
//     alert('Please enter email');
// } else{
//     alert('Form submitted successfully!');
// } 
// });



// =============================================
// Question no. 59:
// 59. Write a function `addToCart` that adds an item to a shopping cart and updates the cart count.
// Answer:
// let useritem = prompt('Enetr your item');
// let shoppingCart = [];
// let cartCount = 0;
// const addToCart = (item) => {
//     shoppingCart.push(item);
//     cartCount++; 
//     return `Item added: ${item}. Cart Count: ${cartCount}`;
// }
// console.log(addToCart(useritem));

// =============================================
// Question no. 60:
// 60. Create a function `searchProducts` that searches for products in an array and returns matching results.
// Answer:
// let tablets = [
//     {name: 'panadol',  description: 'usually use for fever'},
//     {name: 'coldrex',  description: 'use for cold and caugh'},
//     {name: 'panadol Extra',  description: 'use for fever and pain'},
//     {name: 'Brofen',  description: 'for all over body pain'}
// ];

// const searchProducts = (item, search) => {
//     const lowerCase = search.toLowerCase();

//     return item.filter(item => 
//        item.name.toLowerCase().includes(lowerCase)
//     );
// }

// const searchResults = searchProducts(tablets, 'panadol');
// console.log(searchResults);



// =============================================
// Question no. 61:
// 61. Write a function `sortByPrice` that sorts an array of products by their price.
// Answer:
// let fruitsAndPrice = [
//     {friut: 'Apple', price: 100},
//     {friut: 'Mango', price: 250},
//     {friut: 'Banana', price: 100},
//     {friut: 'Orange', price: 300},
//     {friut: 'Grapes', price: 400}
// ];

// const sortByPrice = (fruits) => {
//     return fruits.sort((a, b) => a.price - b.price);
// }
// const sortedfruitsAndtheirPrice= sortByPrice(fruitsAndPrice);
// console.log(sortedfruitsAndtheirPrice);



// =============================================
// Question no. 62:
// 62. Create a function `highlightText` that highlights specific keywords in a block of text.
// Answer:
// const highlightText = () => {
//     let textToSearch = document.getElementById("text-to-search").value;
//     let paragraph = document.getElementById("paragraph");
    
//      let escapedCharacter= textToSearch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

//     let patren = new RegExp(escapedCharacter, "gi");
//     paragraph.innerHTML = paragraph.textContent.replace(patren, match => `<mark>${match}</mark>`);
// };



// =============================================
// Question no. 63:
// 63. Write a function `validatePassword` that checks if a password meets certain criteria (length, special characters, etc.).
// Answer:
// const validatePassword = () => {
//     let userPassword = document.getElementById('userPassword').value;
//     let isValid = true;

//     if (userPassword.length < 8) {
//         alert('Password must be at least 8 characters.');
//         isValid = false;
//     }

//     if (!/[!@#$%^&*(),.?":{}|<>]/.test(userPassword)) {
//         alert('Password must contain a special character.');
//         isValid = false;
//     }

//     if (!/\d/.test(userPassword)) {
//         alert('Password must contain at least one number.');
//         isValid = false;
//     }

//     if (isValid) {
//         alert('Correct Password');
//     }
// };


// =============================================
// Question no. 64:
// 64. Create a function `scrollToTop` that scrolls the page to the top smoothly when called.
// Answer:
// const scrollbtn = document.getElementById("scrollbtn");

// scrollbtn.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// });



// =============================================
// Question no. 65:
// 65. Write a function `updateProfilePicture` that allows a user to upload a new profile picture.
// Answer:
// let profilePic = document.getElementById('profile-pic');
// let fileInput = document.getElementById('file-input');

// fileInput.onchange = function (){
//     profilePic.src = URL.createObjectURL(fileInput.files[0]);
// }



// =============================================
// Question no. 66:
// 66. Create a function `validatePhoneNumber` that checks if a phone number is valid based on a specified format.
// Answer:
// const validatePhoneNumber = () => {
//     let Input = document.getElementById('phone');
//     let phoneNumber = Input.value;
//     let cleanedPhoneNumber = phoneNumber.replace(/\0/g, '');

//     if(cleanedPhoneNumber.length !== 11){
//         alert('Please enter a correct phone number');
//         return false;
//     } else {
//         alert('Your phone number is correct');
//     }
//     return true; 
// }



// =============================================
// Question no. 67:
// 67. Write a function `getCurrentDateTime` that returns the current date and time in a specified format.
// Answer:
// const getCurrentDateTime = () => {
//     let now = new Date();
//     let currentDate = document.getElementById('date-time').innerHTML = now;
//     return now
// }
// getCurrentDateTime();



// =============================================
// Question no. 68:
// 68. Create a function `generateRandomPassword` that creates a random password based on user-defined criteria.
// Answer:
// const generateRandomPassword = () => {
//     let password = '';
//     const str = 'ABCDEFGHIJKLMNOPQRSTUVEWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()';
//     for(let i = 1; i <= 8; i++){
//         password += str.charAt(Math.floor(Math.random() * str.length + 1))
//     }
//     return password;
// }
// console.log("This is your new password " + generateRandomPassword());


// =============================================
// Question no. 69:
// 69. Write a function `rotateArray` that rotates an array to the right by a given number of steps.
// Answer:
// const number = [1, 2, 3, 4, 5, 6, 7];
// const k = 10;
// const rotateArray = (arr, numOfShift) => {
//     for(let i = 0; i < numOfShift; i++){ 
//         arr.unshift(arr.pop());
//         console.log(`step ${i + 1}:`, arr);
//     }
// }
// rotateArray(number, k);




// =============================================
// Question no. 70:
// 70. Create a function `comparePasswords` that checks if two password fields match during registration.
// Answer:
// let button = document.getElementById('button');
// button.addEventListener('click', function(){
//     let userName = document.getElementById('userName').value;
//     let password = document.getElementById('password').value;
//     let confirmPassword = document.getElementById('confirmPassword').value;

//     if(password == ""){
//         alert("Flied can not be empty.");
//     } else if (userName == ""){
//         alert("Please input user name.");
//     } else if (password != confirmPassword){
//         alert("Password did't match try again.");
//         return false;
//     } else if (password == confirmPassword){
//         alert("Password match.");
//         return true;
//     }
// }); 



// =============================================
// Question no. 71:
// Write a function `isAdult` that takes an age and returns true if the age is 18 or older, and false otherwise.
// Answer:
// let userAge = prompt('Enter your age?');
// const isAdult = (age) => {
//     if(age >= 18){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isAdult(userAge));



// =============================================
// Question no. 72:
// 72. Create a function `concatStrings` that takes two strings and returns them concatenated together.
// Answer:
// let string1 = 'Hello ';
// let string2 = 'Javascript';
// 1st way
// const concatStrings = (str1, str2) => {
//     return str1 += str2;
   
// }
// console.log(concatStrings(string1, string2));

// 2nd way
// const concatStrings = (str1,str2) => {
//     return str1.concat(' ', str2)
   
// }
// console.log(concatStrings(string1, string2));

// 3rd way
// const concatStrings = (str1,str2) => {
//     return [str1, str2].join('');
   
// }
// console.log(concatStrings(string1, string2));



// =============================================
// Question no. 73:
// 73. Write a function `greetUser` that takes a name and returns a greeting message (e.g., "Hello, [name]!").
// Answer:
// let userName = prompt('Enter your name?');
// const greetUser = () => {
//    return `Hello ${userName}!`;
// }
// console.log(greetUser());



// =============================================
// Question no. 74:
// 74. Create a function `squareNumber` that takes a number and returns its square.
// Answer:





// =============================================
// Question no. 75:
// 75. Write a function `countChars` that counts the number of characters in a string.
// Answer:
// let string = prompt('Enter your string?');
// const countChars = (str) => {
//     let strOfChars = str.split('');
//     count = {};
//     for(let i = 0; i <strOfChars.length; i++){
//         count[strOfChars[i]] = count[strOfChars[i]] ? count[strOfChars[i]] + 1 : 1;
//     }
//     return count;
// }
// console.log(countChars(string));



// =============================================
// Question no. 76:
// 76. Create a function `isString` that checks if a given input is a string and returns true or false.
// Answer:
// console.log(typeof(12345));
// let userInputString = 'Hellow World';
// let userInputNumber = 123456;
// let userInputBoleain = true;
// let userInputIcon = '🍋';

// const isString = (input) => {
//     if(typeof(input) === 'string'){
//         return true
//     }
//     return false
// }
// console.log(isString(userInputString));
// console.log(isString(userInputNumber));
// console.log(isString(userInputBoleain));
// console.log(isString(userInputIcon));




// =============================================
// Question no. 77:
// 77. Write a function `findMin` that takes an array of numbers and returns the smallest number.
// Answer:
// let numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

// function findMin (num){
//    let  smallestNum = num[0];
//    for (let i = 0; i <= num.length; i++){
//      if(num[i] <  smallestNum){
//         smallestNum = num[i]
//      }
//    }
//    return  smallestNum;
// }
// let result = findMin(numbers);
// console.log(`The Smallest number is ${result}`);





// =============================================
// Question no. 78:
// 78. Create a function `splitString` that takes a string and returns an array of its characters.
// Answer:
// 1st way
// let userString = prompt('Enter your string');
// const splitString = (str) => {
//     return str.split(" ");
// }
// console.log(splitString(userString));

// 2nd way
// let userString = prompt('Enter your string');
// console.log(splitString(userString));
// const splitString = (str) => {
//     return [...str];
// }
// console.log(splitString(userString));




// =============================================
// Question no. 79:
// Write a function `removeLastElement` that takes an array and returns a new array with the last element removed.
// Answer:



// =============================================
// Question no. 79:
// 80. Create a function `toggleCase` that takes a string and toggles the case of each character.
// Answer: