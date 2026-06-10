import React from "react";
import { createContext } from "react";

//&Step1 === Create a context using createContext().When we call this createContext,it will return us a context object which is our store room,a global space/object.

export const myStore = createContext();
//console.log(myStore);

//~Step2 === Provide the context using contextObject.Provider

const ContextStore = (props) => {
  console.log(props);
  const str = "Hello Keshav";
  const arr = [10, 20, 30];
  const obj = { name: "John" };
  return (
    <myStore.Provider value={{ str, arr, obj }}>
      {props.children}
    </myStore.Provider>
  );
};

export default ContextStore;
