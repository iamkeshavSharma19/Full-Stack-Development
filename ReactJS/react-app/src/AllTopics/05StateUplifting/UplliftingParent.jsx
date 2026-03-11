import { useState } from "react";
import UpliftingChildA from "./UpliftingChildA";
import UpliftingChildB from "./UpliftingChildB";

const UplliftingParent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  return (
    <div>
      <h1>Uplifting Parent</h1>
      <hr />
      <UpliftingChildA count={count} />
      <hr />
      <UpliftingChildB handleIncrement={handleIncrement} />
      <hr />
    </div>
  );
};

export default UplliftingParent;
