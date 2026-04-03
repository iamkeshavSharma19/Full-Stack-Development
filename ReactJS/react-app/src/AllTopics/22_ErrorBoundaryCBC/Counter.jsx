import { useState } from "react";

const ErrorCounter = () => {
  const [count, setCount] = useState(0);

  if (count > 5) {
    throw new Error("App Crashed");
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>incre</button>
    </div>
  );
};

export default ErrorCounter;
