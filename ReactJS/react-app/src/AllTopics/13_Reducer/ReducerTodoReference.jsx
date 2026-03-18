import { useReducer } from "react";

const initialState = [{ text: "Default", id: 12 }];

const reducerFn = (prev, action) => {
  console.log(action);
  switch (action.type) {
    case "add":
      return [...prev, action.payload];
  }
};

const ReducerTodoReference = () => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  console.log(state);

  //?static data
  const newTodo = {
    text: "Hello world",
    id: 1,
  };

  return (
    <div>
      <h1>Reducer Todo Reference</h1>

      <button onClick={() => dispatch({ type: "add", payload: newTodo })}>
        Add Todo
      </button>
    </div>
  );
};

export default ReducerTodoReference;
