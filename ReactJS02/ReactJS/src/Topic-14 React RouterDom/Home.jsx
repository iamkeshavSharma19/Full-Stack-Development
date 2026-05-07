import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//&Abort Controller === If a user is on page where there is an api call but user shifts to other page, so i need to stop that request.use abort controller. ex == drinking water.

const Home = () => {
  //?Step1 === controller creation
  const controller = new AbortController();
  //^whenever I want to fetch multiple things then I use empty array []
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products", {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        console.log("data: ", data);
        setProducts(data);
      } catch (error) {
        //&this is how you handle the AbortError.
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
          return;
        }
        console.log(error);
      }
    };

    fetchProducts();

    //~I will abort it inside my cleanUp function.cleanup function runs in unmounting phase
    return () => {
      controller.abort(); // it throws an "abortError"
    };
  }, []);

  if (products.length === 0) {
    return <Shimmer />;
  }

  return (
    <div id="home">
      <h1>Welcome To Home Page</h1>
      {products.map((el) => {
        return <h1>{el.title}</h1>;
      })}
    </div>
  );
};

export default Home;
