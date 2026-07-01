import React from "react";

const Child = ({ data }) => {
  //?in case of non-primitive data type, inside reference data's array address will be there, with parent re-render, array's reference will be changed, react will think that it is a new array/function, so that is why react will call that child component once again, React.memo will stop the child from re-rendering only if we pass the primitive data type as the props.For solving it we use useCallback hook
  //console.log(data);
  console.log("I am Child");
  return (
    <div>
      <h1>I am Child</h1>
    </div>
  );
};

export default React.memo(Child);
