import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child render={(name) => <h2>Hello {name}</h2>}>
        {/* Render Props === older way of passing render props */}
        {/* {() => <h2>Render Props</h2>} */}
      </Child>
    </div>
  );
};

export default Parent;
