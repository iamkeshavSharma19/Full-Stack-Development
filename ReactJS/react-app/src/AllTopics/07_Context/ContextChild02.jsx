import { useContext } from "react";
import { myStoreContext } from "./ContextProvider";

const ContextChild02 = () => {
  //!Step3 => Consume a context using useContext Hook, it accepts a context object (the value returned from createContext).
  let data = useContext(myStoreContext);
  let { data1, data2 } = data;
  console.log(data);
  return (
    <div>
      <h1>
        Child 2 Component: {data1} {data2}{" "}
      </h1>
    </div>
  );
};

export default ContextChild02;
