// ! Array deconstructing.
let arr1 = [10, 20, 30, 40, 50];

let [n1, n2, n3, n4, n5] = arr1;

console.log(n2, n5);

let arr2 = [100, 200, 300, 400, 500];
let [, a2, , a3, ,] = arr2;
console.log(a2, a3);

// ? examples
function useState(state) {
  return [state, () => {}];
}

let [state, setState] = useState();

function useRef(ref) {
  return { current: ref };
}
let { current } = useRef;

// ! nested Array.
let arr3 = [1000, 2000, [3000, 4000], 5000];

// ? If we try to access that element that does'not exist in the array like a7, then undefined would be printed.
let [a1, , [, a5], a6, a7] = arr3;
console.log(a1, a5, a6, a7);

// ? object inside array
let arr4 = [
  "hello",
  {
    id: 1,
    fname: "John",
    lname: "Cena",
    mname: {
      title: "legend",
    },
  },
];

let [k1, { fname }] = arr4;
console.log(k1, fname);

// ! In Object key matters and in the arrray sequence matters a lot.

// ! REST AND Spread Operators
function demo1(p1, p2, ...p3) {
  console.log(p1, p2);
  // ? arguments is basically an array like object.
  // ! JS Engine checks in arguments array wheteher p1 (10) exists in arguments array or not, if yes then a copy of p1(10) will be stored in the parameter p1.

  // ? ...p3 => an array of all remaining / rest parameters will be stored inside p3

  // ! rest parameter should always be last in the parameter list

  // ! it is used if some argument is left then it must be stored inside the rest parameter
  console.log(arguments);
  console.log(p3);
}

demo1(10, 20, 30, 40, 50, 60, 70, 80);

// ! Difference b/w Arguments array and rest parameters

// ? Arguements array is not pure array because we cannot apply array methods like push, pop because Arguments Arr does'not have it's own array prototype object, whereas the rest array is a pure array, it has all the methods of arr like push, pop, slice and splice.

let arr5 = [10, 20, 30, 40];
let [x1, ...x2] = arr1;
console.log(x1);
console.log(x2);

// ! Spread Operator => Spread operator is generally used for copying the elements of array.
let arr6 = [100, 200, 300, 400];
console.log(arr6);
console.log(...arr6);
let arr7 = [...arr6];
console.log(arr7);

let obj1 = {
  id: 1,
  fname: "Jane",
  sal: 20000,
  address: {
    city: "Noida",
  },
};

let obj2 = {
  // ! Copying the properties of obj1 inside obj2.
  ...obj1,
  lname: "Doe",
  sal: 700000,
};

console.log(obj2);
