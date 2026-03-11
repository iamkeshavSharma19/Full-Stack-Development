import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    // setCount((prev) => {
    //   return prev + 1;
    // });
    setCount((prev) => prev + 3);
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} disabled={count === 0 ? true : false}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
