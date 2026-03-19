import React from "react";


const MemoChild = () => {
  console.log("I am MemoChild Component");

  return (
    <div>
      <h1 className="text-4xl font-bold m-5">Memo Child Component</h1>
    </div>
  );
};

//?React.memo() is used to memoized a component until it's props are changed.
export default React.memo(MemoChild);

