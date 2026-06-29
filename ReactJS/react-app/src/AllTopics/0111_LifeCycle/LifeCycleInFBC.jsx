import React, { useEffect, useRef, useState } from "react";

const LifeCycleInFBC = () => {
  const [count, setCount] = useState(0);
  const initialRender = useRef(true); //?{current: true}
  console.log(initialRender);

  useEffect(() => {
    console.log("Component Mounted");

    //&CleanUp function is executed during unmounting phase only,this useEffect will not be executed during the Mounting Phase.

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  //*Updating Phase
  //!Problem is that during the component mounting i.e during the initial render also this this useEffect's updating call back function is executed, we basically have to stop it during the initial render.for that we will use useRef hook, it returns us an object With key name as current and it's value as undefined.
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    console.log("Component Updated");
  }, [count]);

  return (
    <div>
      <h1>LifeCycleInFBC - {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
    </div>
  );
};

export default LifeCycleInFBC;
