import React from "react";
import Counter from "./Counter";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

//!STEP 2: CREATE A SLICE/FEATURE AND EXPORT ALL ACTIONS
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incre: (prevState) => {
      return prevState + 1;
    },
    decre: (prevState) => {
      return prevState > 0 ? prevState - 1 : 0;
    },
    reset: () => {
      return 0;
    },
  },
});

export const { incre, decre, reset } = counterSlice.actions; // {incre: () => {}, decre: () => {}}

//?Step1 === Creating The Store
const myStore = configureStore({
  reducer: {
    //because of this key counter we get {counter: 0} in useSelector
    counter: counterSlice.reducer,
  },
});

//^Step3 === Providing store's access to the <Counter /> component

const ReduxApp = () => {
  return (
    <div>
      <Provider store={myStore}>
        <Counter />
      </Provider>
    </div>
  );
};

export default ReduxApp;
