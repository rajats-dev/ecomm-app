import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductsCard from "../components/ProductsCard";
import Filter from "../components/filter/Filter";
import sortTheData from "../utils/sortTheData";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const transFormProduct = sortTheData(products);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, []);

  return (
    <div className="flex">
      <Filter></Filter>
      <div className="max-w-screen-lg py-5 grid grid-cols-3 gap-4">
        {transFormProduct.map((item) => {
          return <ProductsCard key={item.id} product={item} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
