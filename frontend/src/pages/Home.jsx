import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getProducts(query).then(setProducts);
  }, [query]);
  return (
    <>
      <Filters setQuery={setQuery} />
      <div>
        {products.map((product) => {
          <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default Home;
