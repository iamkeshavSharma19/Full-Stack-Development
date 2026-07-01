import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const Optimisation = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  //!In this case inside multiply variable whole function will be stored.
  //   const multiply = () => {
  //     console.log(multiply);
  //     return add * 5;
  //   };
  //?In this case, inside multiply variable function will not be stored, add * 5 value will be stored.

  //*useMemo is a optimisation hook which returns us a memoized value and that memoized value will be stored inside multiply variable.It is used to avoid unnecessary expensive calculation while rendering and returns memoized value.

  //* when minus state variable will update,then also useMemo will be called but useMemo will check that in it's dependency add is there but there is no subtraction, so it will return the previous memorised value only, that means the callback value inside the useMemo will not executed, useMemo will not do the further calculation of add * 5 because minus is not present in the dependency array of useMemo Hook.
  let multiply = useMemo(() => {
    console.log("multiply");
    return add * 5;
  }, [add]);

  //*useCallback is a performance optimization hook which is used to avoid unnecessary re-rendering of child components while sending non-primitive data as a props and it returns the memoized function.
  let display = useCallback(() => {
    console.log("Display Function");
  }, []);
  //& When I am adding then also my component is getting re-rendered.
  //~ When I am subtracting then also my component is getting re-rendered.
  //?When I am subtracting, then also my component is getting re-rendered, and multiply function will be called again so basically this calculation is a unnecessary calculation.This we have to optimise it basically.For this we have to use a optimization hook called useMemo, it's syntax is same as that of the useEffect Hook.useMemo returns us something
  return (
    <div>
      <h1>Optimisation In React</h1>
      <hr />
      <h1>Addition = {add}</h1>
      <button onClick={() => setAdd((prev) => prev + 1)}>increment</button>
      <hr />
      <h1>Subtraction = {minus}</h1>
      <button onClick={() => setMinus((prev) => prev - 1)}>decrement</button>
      <hr />
      {/* <h1>Multiplication = {multiply()}</h1> */}
      <h1>Multiplication = {multiply}</h1>

      <hr />
      {/* here also on the change of add and subtract, <Child/> component is getting unnecessarily re-rendered, to avoid that we will use memo method which is present inside React */}
      {/* string is primitive and immutable in javascript */}
      {/* <Child data={[10, 20, 30]} /> */}
      <Child data={display} />
    </div>
  );
};

export default Optimisation;
