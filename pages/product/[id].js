import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.error("Error fetching the product:", error);
        });
    }
  }, [id]);

  //   if product is not found, return error
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.name} />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;
