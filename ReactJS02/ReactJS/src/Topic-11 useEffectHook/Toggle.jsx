import { useState, useEffect } from "react";

const Toggle = () => {
  const [login, setLogin] = useState(false);
  
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    //~to first time not call the useEffect Hook
    if (count === 0) {
      return;
    }
    console.log("2. useEffect");
  }, [count]);
  //&useEffect compares the new Deps and prevDeps and then only send the effectFn to the queue, if both are same then effectFn will not go the temporary Queue.If both are different then only effectFn will go to the temporary queue and then only that function will run.

  console.log("1. Toggle Render");

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
      {login ? <h2>Welcome User</h2> : <h2>Please Login</h2>}
      <button onClick={() => setLogin(!login)}>Click</button>
    </div>
  );
};

export default Toggle;
