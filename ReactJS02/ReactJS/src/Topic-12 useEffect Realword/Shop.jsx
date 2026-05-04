import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";

const Shop = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    //Api call
    console.log("useEffect");
    const getProducts = async () => {
      const response = await fetch(
        "https://api.theindianhome.in/api/product/list",
      );

      const data = await response.json();

      console.log(data);
      setResponse(data?.products);
    };
  }, []);
  if (response.length === 0) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="shop-container">
      {response.map((element) => (
        <Card key={element.id} {...element} />
      ))}
    </div>
  );
};

export default Shop;
