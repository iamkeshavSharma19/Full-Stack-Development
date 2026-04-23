import React from "react";

const Card = (props) => {
  return (
    <div>
      <h1>{props.username}</h1>
      <h1>{props.age}</h1>
    </div>
  );
};

export default Card;
