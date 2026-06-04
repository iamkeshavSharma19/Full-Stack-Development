import React, { useContext } from "react";

import { myStore } from "./ContextStore";

const ChildC = () => {
  //~Step 3 === Consuming the Context
  //~useContext requires myStore object returned by the createContext object.
  let data = useContext(myStore);
  return (
    <div>
      <h1 className="font-bold text-2xl">Child C</h1>

      <h1>{data.obj.name}</h1>
    </div>
  );
};

export default ChildC;
