import React, { useState, useEffect } from "react";
import Link from "next/link";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        }
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
      });
  }, []);
  return (
    <>
      <div className="bg-neutral-500">
        <h1 className="text-8xl text-center p-5 pt-8 text-green-400">
          Products
        </h1>
        <div className="grid grid-cols-4 gap-5 p-10">
          {products.map((product) => (
            <div key={product.id} className="flex justify-center flex-col">
              <img src={product.thumbnail} alt={product.name} width={100} />
              <h2>{product.title}</h2>
              <p className="">{product.description}</p>
              <Link href={`/product/${product.id}`}>View Product</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
