import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductsCard from "../components/ProductsCard";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  console.log(data);

  useEffect(() => {
    setProducts(data.data);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-7">
      {products.map((item) => (
        <ProductsCard key={item._id} product={item} />
      ))}
    </div>
  );
};

export default Shop;
