import React, { useContext } from "react";
import { myStore } from "./ContextExample";

const ChildB = () => {
  //~Step3 === Consuming the context
  //~useContext requires myStore object returned by the createContext object.
  let data = useContext(myStore);
  console.log(data);
  return (
    <div>
      ChildB
      <h1>{data.obj.name}</h1>
    </div>
  );
};

export default ChildB;
