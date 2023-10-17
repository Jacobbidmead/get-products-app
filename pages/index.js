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
  // dependency array, because we only want to render once
  return (
    <>
      <div className="bg-custom-cream">
        <div className="lg:grid lg:grid-cols-3  xs:flex xs:flex-col">
          {products.map((product) => (
            <div key={product.id} className="flex justify-center flex-col">
              <div className="bg-custom-blue p-4 rounded-lg shadow-lg w-80 mx-auto xs:mt-10 xs:mb-10">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-contain rounded"
                />
                <h2 className="font-bold text-2xl mb-2 mt-2 text-custom-green">
                  {product.title}
                </h2>
                <p className="text-white">{product.description}</p>
                <Link
                  href={`/product/${product.id}`}
                  className="text-custom-green mt-4 block no-underline"
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
