import React from "react";
import ChildA from "./ChildA";

const Parent = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Parent</h1>
      <ChildA />
    </div>
  );
};

export default Parent;
