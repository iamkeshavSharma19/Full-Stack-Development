import React from "react";
import ChildB from "./ChildB";

const ChildA = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Child A</h1>
      <ChildB />
    </div>
  );
};

export default ChildA;
