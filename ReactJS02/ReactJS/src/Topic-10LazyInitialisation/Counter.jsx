import React from "react";
import { useState } from "react";

const heavyCalculation = () => {
  console.log("Heavy Calculation");

  let sum = 0;

  for (let i = 0; i < 100000; i++) {
    sum = sum + i;
  }
  return sum;
};

const Counter = () => {
  //~this is fast initialisation because you have directly assigned a initial value
  //   useState(0);
  //?lazy initialisation
  //?this function will not be directly stored in the count, value returned by function stores in the count variable in the initial render.
  //?if i am having synchoronous heacy calculation code, then also we use this function inside useState.
  //?if i call function directly then after every re-render heavyCalculation() function will run every time.
  //?never write below code like this.
  //const [count, setCount] = useState(heavyCalculation());
  const [count, setCount] = useState(() => {
    return heavyCalculation();
  });
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

export default Counter;
