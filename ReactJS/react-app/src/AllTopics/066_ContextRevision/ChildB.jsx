import React from "react";
import ChildC from "./ChildC";

const ChildB = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Child B</h1>
      <ChildC />
    </div>
  );
};

export default ChildB;
