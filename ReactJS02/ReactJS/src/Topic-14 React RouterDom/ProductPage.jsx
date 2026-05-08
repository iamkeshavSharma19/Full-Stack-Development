import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//?304 === data is coming from the browser-cache not from the backend/sever.

const ProductPage = () => {
  const [singleProduct, setSingleProduct] = useState({});
  //~useParams hook is basically used for getting the :id from the url.
  const { id } = useParams();
  useEffect(() => {}, []);
  console.log(params);

  return (
    <div className="center-container">
      <div className="left"></div>
      <div className="right">
        <div className="category">{category}</div>
      </div>
    </div>
  );
};

export default ProductPage;
