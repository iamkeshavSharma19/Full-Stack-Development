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


//?INFINITE CURRYING FUNCTION


// x === 36

// y === 6


function infinteCurrying (x) {

   return function (y) {

      if (y) return infinteCurrying(x * y);
      

      return x;
   }
}


const result2 = infinteCurrying(2)(3)(6)();


console.log(result2);






