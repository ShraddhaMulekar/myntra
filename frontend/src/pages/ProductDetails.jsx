import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../api/productApi";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductsById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <h1>{product.title}</h1>
      <img src={product.images[0]} alt="" />
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>
      <p>Stock: {product.stock}</p>
    </>
  );
};

export default ProductDetails;
