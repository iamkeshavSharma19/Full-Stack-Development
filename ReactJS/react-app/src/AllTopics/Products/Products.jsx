import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  async function getProducts() {
    try {
      const resObj = await fetch("https://dummyjson.com/products");
      const data = await resObj.json();
      console.log(data.products);
      setAllProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-3xl">Products</h1>
      <section>
        {allProducts.length === 0 ? (
          <h1>No Products Available</h1>
        ) : (
          <div>
            {allProducts.map((ele) => {
              return <Product key={ele.id} ele={ele} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;
