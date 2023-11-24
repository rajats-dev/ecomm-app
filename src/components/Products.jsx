import React from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  return (
    <div className="py-5">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center rounded-lg">
          Shopping Everyday..
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          quos fugit inventore, cumque quae corporis ratione tenetur eos
          voluptates neque magnam soluta aperiam omnis.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProductsCard />
      </div>
    </div>
  );
};

export default Products;
