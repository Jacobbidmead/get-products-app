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
    <div>
      {products.map((product) => (
        <div
          key={product.id}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <img src={product.image} alt={product.name} width={100} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <Link href={`/product/${product.id}`}>View Product</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
