import { useState } from "react";

const Task = () => {
  const [showList, setShowList] = useState(false);
  
  return (
    <div>
      <button
        onClick={() => {
          setShowList((prev) => !prev);
        }}
      >
        {!showList ? "show" : "hide"}
      </button>
      {showList && (
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React JS</li>
        </ul>
      )}
    </div>
  );
};

export default Task;
