import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
    <div className="flex items-center justify-center min-h-screen bg-custom-cream">
      <div className="w-11/12 md:w-3/4 lg:w-1/2 xl:w-2/5 p-6">
        <div className="bg-custom-blue  text-white p-6 md:p-8 lg:p-10 rounded-lg shadow-md">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-64 object-contain mb-6 rounded"
          />
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">
            {product.name}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl">
            {product.description}
          </p>
          <Link href="/">
            <span className="mt-6 inline-block bg-custom-green text-custom-blue text-custom-green py-1 rounded-lg text-lg hover:bg-opacity-90">
              Return to Products
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
