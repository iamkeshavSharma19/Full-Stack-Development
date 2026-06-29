import React, { Fragment, useEffect, useState } from "react";


const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    const controller = new AbortController();

    async function getProducts() {
      try {
        let resp = await fetch("https://dummyjson.com/products", {
          signal: controller.signal,
        });
        let data = await resp.json();
        //console.log(data.products);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();

    //?Unmounting clean-up function.for cancelling the API call we will use constructor function i.e Abort Controller, we will create a new instance of it with the name === controller.Actually the problem was that when we were unmounting the component in 3G mode but then also API calling was being made,if the component is unmounted, so API call should not happen, for cancelling that API Call we have use the class or the constructor function = new AbortController.
    return () => {
      controller.abort("Component unmounted API call cancelled");
    };
  }, []);
  return (
    <div>
      <h1>Fetch Products</h1>
      {products.map((prod) => {
        let { id, title, description, thumbnail } = prod;

        return (
          //&Difference between <> </> and <Fragment /> is that in empty fragement we cannot pass any key prop, any class, id and style attribute.But in <Fragement /> we can pass the key prop, however we cannot pass the id, class and style attribute, because there is no extra node and element is created then whome to give style, id and class
          <Fragment key={id}>
            <img src={thumbnail} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
            <button>add to cart</button>
          </Fragment>
        );
      })}
    </div>
  );
};

export default FetchProducts;
