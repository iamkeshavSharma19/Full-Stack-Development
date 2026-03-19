import { useState, useMemo, useCallback } from "react";
import MemoChild from "./MemoChild";


const MemoExample = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  
  //   function multiply() {
  //     console.log("I am multiply");
  //     return add * 5;
  //   }
  
  //! useMemo() returns the memoized value
  let multiply = useMemo(() => {
    console.log("I am multiply");
    return add * 5;
  }, [add]);

  //! useCallback() returns the memoized function
  const display = useCallback(() => {
    console.log("I am display");
  }, [minus]);

  return (
    <div className="text-center p-5">
      <h1 className="text-4xl font-bold m-5">Learn useMemo and useCallback</h1>
      <article>
        Addition: {add}
        <button
          className="ms-5 bg-gray-400 px-4 rounded"
          onClick={() => {
            setAdd((prev) => prev + 1);
          }}
        >
          increment
        </button>
      </article>
      <br />
      <article>
        Subtraction: {minus}
        <button
          className="ms-5 bg-gray-400 px-4 rounded"
          onClick={() => {
            setMinus((prev) => prev - 1);
          }}
        >
          decrement
        </button>
      </article>

      <article>Multiply: {multiply}</article>
      <hr />
      <MemoChild display={display} />
    </div>
  );
};

export default MemoExample;
