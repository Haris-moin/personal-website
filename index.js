// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       //   console.log("nums[j]: ", nums[i] + nums[j]);
//       if (nums[i] + nums[j] === target && i !== j) {
//         console.log(`${nums[i]} + ${nums[j]}:`, nums[i] + nums[j]);
//         return [i, j];
//       }
//     }
//   }
// };
// const nums = [6, 5, 4, 11],
//   target = 10;
// const res = twoSum(nums, target);
// console.log("res: ", res);

// const funSunGetIndex = (arr, target) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         console.log("arr[i] + arr[j]: ", arr[i] + arr[j]);
//         return [i, j];
//       }
//     }
//   }
// };

// const nums = [2, 5, 4, 11],
//   target = 15;
// const res = funSunGetIndex(nums, target);
// console.log("res: ", res);

// fabonacy ---------

// const fabonacyNums = (num) => {
//   if (num > 1) {
//     console.log("num: ", num);
//     let n1 = 0;
//     let n2 = 1;
//     let nexNum;
//     const arr = [n1, n2];

//     for (let i = 2; i <= num; i++) {
//       nexNum = n1 + n2;
//       arr.push(nexNum);
//       n1 = n2;
//       n2 = nexNum;
//     }
//     return arr;
//   }
// };
// const res = fabonacyNums(10);
// console.log("res: ", res);

// const maxNum = () => {
//   const obj = {
//     a: 2,
//     b: 1,
//     c: 3,
//     d: 4,
//     e: 1,
//   };

//   let max = 0;
//   let second = Number.NEGATIVE_INFINITY;
//   console.log("second: ", second);
//   let highest;
//   for (let value in obj) {
//     if (obj[value] > max) {
//       second = highest;
//       max = obj[value];
//       highest = value;
//     }
//   }

//   console.log("second: ", obj[second]);

//   console.log("key: ", Object.keys(obj));

//   console.log("obj[value] max", obj[highest]);
// };
// maxNum();

// const isPalindrome = (str) => {
//   const length = str.length;
//   for (let i = 0; i < length / 2; i++) {
//     if (str[i] !== str[length - 1 - i]) {
//       return false;
//     }
//     return true;
//   }
// };
// const str = "madam";

// console.log(isPalindrome(str));

// const convertIntoCamelCase = (str) => {
//   const arr = str.split(" ");

//   const camelCaseArr = arr.map((value, i) => {
//     if (i === 0) {
//       return value.toLowerCase();
//     } else {
//       return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
//     }
//   });

//   const convertedStr = camelCaseArr.join("");
//   console.log("data: ", convertedStr);
// };
// convertIntoCamelCase("Haris moin is SoftWare engineer");

const arr = [1, 45, "#", "$", 3, "%", -1, "#"];

// let revArr = [];
// let spChrIndex = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   const initLength = arr.length - 1 - i;
//   console.log("initLength", initLength);
//   if (arr[i] === "#" || arr[i] === "$" || arr[i] === "%") {
//     spChrIndex.push(i);
//   } else {
//     // console.log("arr[i]",arr[i])
//     revArr[initLength] = arr[i];
//     // console.log("sd", revArr[initLength],arr[i])
//   }
// }

// console.log("sd", spChrIndex);

// for (let i = 0; i < spChrIndex.length; i++) {
//   revArr[spChrIndex[i]] = arr[spChrIndex[i]];
// }

// console.log("revArr", revArr);

// const revesArr = (arr) => {
//   const length = arr.length;
//   // const specialCharIndex = [];
//   let reversArr = [];
//   for (let i = length - 1; i >= 0; i--) {
//     if (arr[i] === "#" || arr[i] === "$" || arr[i] === "%") {
//       // specialCharIndex.push(i);
//     } else {
//       reversArr.push(arr[i]);
//     }
//   }
//   console.log("reversArr: ", reversArr);
//   for (let i = 0; i < length; i++) {
//     if (arr[i] === "#" || arr[i] === "$" || arr[i] === "%") {
//       reversArr.splice(i, 0, arr[i]);
//     }
//   }
//   console.log("reversArr: ", reversArr);
// };

// revesArr(arr);

// function reverseArrayWithoutMethods(arr) {
//   const specialChars = ["#", "$", "%"];
//   const reversedArr = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (!specialChars.includes(arr[i])) {
//       reversedArr.push(arr[i]);
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (specialChars.includes(arr[i])) {
//       reversedArr.splice(i, 0, arr[i]);
//     }
//   }

//   return reversedArr;
// }

// // const arr = [1, 45, "#", "$", 3, "%", -1, "#"];
// const reversedArray = reverseArrayWithoutMethods(arr);

// console.log(reversedArray);

const str = "Haris moin is SoftWare engineer";

// const reverseStr = (str) => {
//   let reverseVal = "";
//   const length = str.length;
//   // const strArr = str.split(" ");
//   const reversArr = [];
//   // console.log("strArr: ", strArr);
//   for (let i = length - 1; i >= 0; i--) {
//     reverseVal += str[i];
//   }
//   console.log("reverseVal: ", reverseVal);

//   const strArr = str.split(" ");
//   for (let i = strArr.length - 1; i >= 0; i--) {
//     reversArr.push(strArr[i]);
//   }
//   console.log("reversArr: ", reversArr);
//   const abc = reversArr.join(" ");
//   let a = "";
//   console.log("abc: ", abc);
//   for (let i = abc.length - 1; i >= 0; i--) {
//     a += abc[i];
//   }
//   console.log("a  : ", a);
// };
// reverseStr(str);

// const splitIntoArr = (srt) => {
//   let word = "";
//   const arr = [];
//   console.log("srt.length: ", srt.length);

//   for (let i = 0; i < srt.length; i++) {
//     if (srt[i] === " ") {
//       arr.push(word);
//       word = "";
//     } else if (i === str.length - 1) {
//       word += srt[i];
//       arr.push(word);
//     } else {
//       word += srt[i];
//       console.log("srt[i]: ", srt[i], i);
//     }
//   }
//   console.log("arr: ", arr);
// };
// splitIntoArr(str);

// const isAnagram = (str1, str2) => {
//   const sort1 = str1.split("").sort();

//   const sort2 = str2.sort();

//   const s1 = sort1.join("");
//   const s2 = sort2.join("");

//   return s1 === s2;
// };

// const is = isAnagram("hello", "world");
// console.log("is: ", is);

// const bubbleSort = (arr) => {
//   const length = arr.length;
//   for (let i = 0; i < length - 1; i++) {
//     for (let j = 0; j < length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const teamp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = teamp;
//       }
//     }
//   }
// };

// const unsortedArray = [64, 34, 25, 22, 22, 11, 90];

// bubbleSort(unsortedArray);

// const seen = new Set(unsortedArray);
// console.log("seen: ", seen);

const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};

const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16];
const target = 10;
console.log(binarySearch(sortedArray, target));
