import React from "react";

const ProductsCard = ({ product }) => {
  console.log(product);
  return (
    <div className="group">
      <div className="w-full h-72 cursor-pointer overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImg"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4 overflow-hidden">
        <div>
          <h2 className="text-base font-bold">{product.title}...</h2>
        </div>
        <div className="flex w-[18rem] justify-between">
          <div className="flex gap-2 duration-300">
            <p className="line-through text-gray-600">${product.oldPrice}</p>
            <p className="font-semibold">${product.price}</p>
          </div>
          <button className="z-20 w-[150px] py-1 hover:text-gray-900 cursor-pointer duration-500 translate-x-28 group-hover:-translate-x-[82px] bg-red-600 text-white rounded-full font-semibold">
            Add To Cart
          </button>
        </div>
        <div>
          <p className="font-titleFont">Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
