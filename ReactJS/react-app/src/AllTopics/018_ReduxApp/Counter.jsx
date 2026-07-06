import React from "react";
import { useSelector, useDispatch } from "react-redux"; //~this hook is used to access the redux state.Main purpose of the useSelector Hook.
import { incre, decre, reset } from "./ReduxApp";

const Counter = () => {
  //! in x initial state's value will be stored.
  //   useSelector((x) => {
  //     console.log(x);// {counter: 0}
  //   });
  const count = useSelector((state) => {
    return state.counter; // 0
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter Redux - App {count}</h1>
      <button onClick={() => dispatch(incre())}>Increment</button>
      <button onClick={() => dispatch(decre())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
