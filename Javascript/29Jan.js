let arr1 = [10, 20, 30, 40, 50];

// ! from forEach method we cannot return any value.
let returnVal1 = arr1.forEach((el, idx, arr) => {
  console.log(el, idx, arr);
  return el;
});

console.log(returnVal1); // ? undefined

// ! In map if we do'not return anything then 5 times undefined would be stored inside array
const returnVal2 = arr1.map((el) => {
  return el;
});

console.log(returnVal2);

// ? Filter Method
// ? if instead of filter, I use map then ["true", "false", "true", ...], output will come in this format

let arr2 = [100, 200, 300, 400, 500];

let returnVal3 = arr2.filter((el) => el > 200);

console.log(returnVal3);

// ! find ( callbackFunc ) => in find method the first value which will satisfy the condition, that only element will be returned not inside the new array. find method only returns a single value, find method does'not return a new array.
let returnVal4 = arr2.find((el, idx, arr) => el > 200);

console.log(returnVal4);

// ! findIndex (callBack function)
// ? It will basically return the index of the first value which will satisfy the condition.

let returnVal5 = arr2.findIndex((el) => el > 200);

console.log(returnVal5);

// ! Reduce Method In Javascript
// ? if we donot pass any default value like 0 then by default array's first element would be stored inside accumulator and the loop will start from 20.
let arr3 = [10, 20, 30, 40, 50];
let sum = arr3.reduce((acc, curr) => (acc += curr), 0);
console.log(sum);

let sum2 = arr3.reduce((acc, curr) => {
  console.log(acc, curr);
  return (acc += curr);
});

console.log(sum2);
console.log("--------------------");

// ! Try running this program.
let sum3 = arr3.reduce((curr, acc) => {
    console.log(curr);
    console.log(acc);
    curr = curr + acc;
    return curr;
}, 0);
console.log(sum3);


let arr4 = [1, 2, 3, 4, 5];
// ! toString()
let str1 = arr4.toString();
console.log(str1);

let str2 = arr4.join("abc");
console.log(str2);

// ? string to array
// ! use split()
let str3 = "hello";
// ? start splitting the array from 'e'
console.log(str3.split(""));


