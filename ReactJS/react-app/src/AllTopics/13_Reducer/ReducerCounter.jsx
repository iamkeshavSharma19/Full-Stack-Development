import { useReducer } from "react";



let initialState = 0;
const reducerFunc = (prevState, action) => {
  //~dispatch() function's work is to call the reducerFunc
  switch (action) {
    case "incre":
      return prevState + 1;
    case "decre":
      return prevState - 1;
    case "reset":
      return 0;
  }
};

const ReducerCounter = () => {
  const [count, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Learn useReducer Hook</h1>
      <p className="text-center">
        useReducer is a state management hook used for complex state management.
      </p>
      <h1 className="text-2xl font-semibold">Counter: {count}</h1>
      <button className="p-2 bg-amber-600" onClick={() => dispatch("incre")}>
        increment
      </button>
    </div>
  );
};

export default ReducerCounter;
