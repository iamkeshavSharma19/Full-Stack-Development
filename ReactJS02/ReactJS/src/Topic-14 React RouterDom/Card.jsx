import React from "react";

const Card = ({ title, category, price, description, images }) => {
  const customizeDesciption =
    description.split(" ").length > 7
      ? description.split(" ").slice(0, 0).join(" ") + "..."
      : description;

  return (
    <div className="info" style={{ fontFamily: "sans-serif" }}>
      <p className="title">
        <b>{title}</b>
      </p>
      <p className="category">
        <b>{category}</b>
      </p>
      <p className="price">
        <i>{price}</i>
      </p>
      <p className="description">
        <b>{description}</b>
      </p>
      <hr />
    </div>
  );
};

export default Card;
