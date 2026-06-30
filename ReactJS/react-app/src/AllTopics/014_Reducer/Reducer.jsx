import React from "react";
import { useReducer } from "react";
import { useState } from "react";
//&useReducer hook is used for the complex state Management whereas the useState hook is used for the simple state management.

//~useReducer has 2 arguments === one is the redFn and the other argument is the initialState.we have to manually make reducerFn and initialState.

//?initialState value will be stored inside the count variable
let initialState = 0;

//& dispatch function will call the reducer function with the argument "incre", "decre" or "dispatch" based on the action passed in the button.

function reducerFunction(prevState, action) {
  console.log(prevState, action);

  switch (action) {
    case "incre":
      return prevState + 1;

    case "decre":
      return prevState - 1;

    case "reset":
      return 0;
  }
}
const Reducer = () => {
  const [count, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <div>
      <h1>Learn useReducer Hook - {count}</h1>

      <button onClick={() => dispatch("incre")}>increment</button>
      <button onClick={() => dispatch("decre")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default Reducer;
