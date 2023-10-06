import React, { useState, useEffect } from "react";
import Link from "next/link";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // if the products data is an array, setProducts data to products
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
      <div className="">
        <h1 className="text-8xl text-center p-5 pt-8 text-green-400">
          Products
        </h1>
        <div className="grid grid-cols-4 gap-5 p-10">
          {products.map((product) => (
            <div key={product.id} className="flex justify-center flex-col">
              <div className="bg-custom-blue p-6 rounded-lg shadow-lg w-64 mx-auto mt-10">
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h2 className="font-bold text-2xl mb-2">{product.name}</h2>
                <p className="text-white">{product.description}</p>
                <Link
                  href={`/product/${product.id}`}
                  className="text-custom-green underline mt-4 block"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
