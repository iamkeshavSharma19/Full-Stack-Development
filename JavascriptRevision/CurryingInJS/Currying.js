//?Normal Function.
// function multiply (x, y, z) {
//   return x * y * z;
// }


// const result = multiply(2, 3, 5);

// console.log(result);


//!CURRYING FUNCTION
function multiply (x) {
    return function (y) {
        return function (z) {
          return x * y * z;
        }
    }
}


const result = multiply(2)(3)(4);
console.log(result);


