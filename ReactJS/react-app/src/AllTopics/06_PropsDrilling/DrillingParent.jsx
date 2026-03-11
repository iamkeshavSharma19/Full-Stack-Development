import { useState } from "react";
import DrillingChild1 from "./DrillingChild1";

const DrillingParent = () => {
  let str = "Hello Nested Child";
  const [data, setData] = useState("");
  return (
    <div>
      <h1>Drilling Parent {data}</h1>
      <DrillingChild1 str={str} setData={setData} />
    </div>
  );
};

export default DrillingParent;
