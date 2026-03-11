import { createContext } from "react";

// Step1 => Create a context using useContext, when we call useContext(), it returns us a context object.
export const myStoreContext = createContext();
console.log(myStoreContext);

const ContextProvider = (props) => {
  console.log(props);
  let data1 = "Hello";
  let data2 = [10, 20, 30];
  // Step2 => Provide a context with data, myStoreContext has an inbuilt component Provider which is basically used for providing the data
  return (
    <myStoreContext.Provider value={{ data1, data2 }}>
      {props.children}
    </myStoreContext.Provider>
  );
};

export default ContextProvider;
