import { createContext } from "react";

//?Step 1 === Create a context using createContext().when we call this createContext,it returns us a context object which is our store room.a global space/object where we keep our global object
export const myStore = createContext();
console.log(myStore);

//^STEP2 === Provide a context using contextObject.Provider

const ContextExample = (props) => {
  console.log(props); // {children: {}}
  let str = "Hello World";
  let arr = [10, 20, 30];
  let obj = { name: "John" };
  return (
    <div>
      {/* Provider is a component and Provider component has a inbuilt attribute which is value */}
      {/* STEP2 === Providing a context using contextObject.Provider */}
      {/* passing multiple props inside props */}
      {/* we have to give the access of this store to our Parent.jsx and where it is called?In App.jsx.Go to App.jsx and call ContextExample component there. */}
      <myStore.Provider value={{ str, arr, obj }}>
        {props.children}
      </myStore.Provider>
      {/* Passing the single prop inside the value attribute */}
      {/* <myStore.Provider value={str}></myStore.Provider> */}
    </div>
  );
};

export default ContextExample;
