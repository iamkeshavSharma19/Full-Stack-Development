function parent() {
  let a1 = 100;
  console.log("I am parent");
  return child;
  function child() {
    let b1 = 200;

    console.log("I am a child", a1, b1);
  }

  //   return child;
}

let child = parent();

child();

// closure is a temporary memory which is created when we try to access parent's property inside child property. A closure is basically a temporary memory.

// ! 7) Higher Order Function And Callback function

// ? A function which passes any of these requirements
// ? 1) if a function accepts another function as an argument

function demo(fn) {
  fn();
}

// ! function call
// ? demo is accepting a another anonomous function as an argument, so demo function here is Higher Order Function

// ? the anonomous function that we have passed as an argument inside the Higher order function is called Callback function.
demo(function () {
  console.log("Hii I am a Higher Order Function");
});

// ? 2) if a function returns another function, then also it can be called a Higher Order Function
function Parent() {
  return function Child() {
    console.log("Hii I am a child");
  };
}

let val = Parent();
val(); // Hii I am a child

function Demo1() {
  console.log("Demo1");
  return function Demo2() {
    console.log("Demo2");
  };
}

Demo1()(); // ? This technique is called function currying

// ! 8) Arrow function
let a1 = () => {
  console.log("Hi I am a arrow function");
};
a1();

// ? if no parameter we can replace () parenthesis with underscore
let a2 = (_) => {
  console.log("Hi I am a arrow function 2");
};
a2();

// ? if having only one parameter, parenthesis is not mandatory
let a3 = (n1) => {
  console.log("Hi I am a arrow function 3", n1);
};
a3(100);

// ? if there is only one line of code inside our arrow function then we can remove the curly braces also, it is not mandatory

let a4 = () => console.log("Hi I am a arrow function 4");
a4();

// ? explicit return in Arrow function, curly brackets and return keyword is mandatory
let a5 = (n1, n2) => {
  return n1 + n2;
};

console.log(a5(6, 6));

// ? implicit return, curly brackets and return keyword not requires

let a6 = (n1, n2) => n1 + n2;
console.log(a6(7, 7));
