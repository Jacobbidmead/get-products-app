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

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img
        src={product.thumbnail}
        alt={product.name}
        width={100}
        height={100}
      />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;
