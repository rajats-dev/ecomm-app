import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import getCartDataStore from "../store/reducers/getCartDataStore";
import Rating from "./filter/Rating";

const ProductsCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = product.title;
  const idString = id.toLowerCase().split(" ").join("");

  const handleDetails = () => {
    navigate(`/product/${idString}`, { state: { item: product } });
  };

  return (
    <div className="group relative">
      <div
        onClick={handleDetails}
        className="w-full h-72 cursor-pointer border-2 overflow-hidden rounded-md"
      >
        <img
          className="w-full h-full object-scale-down group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImg"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4 overflow-hidden rounded-md">
        <div>
          <h2 className="text-base font-bold">
            {product.title.slice(0, 22)}...
          </h2>
        </div>
        <div className="flex w-[18rem] justify-between">
          <div className="flex gap-2 duration-300">
            <p className="font-semibold">${product.price}</p>
          </div>
          <button
            onClick={() => {
              dispatch(getCartDataStore({ ...product, quantity: 1 })) &
                toast.success(`${product.title} is added`);
            }}
            className="z-20 w-[150px] py-1 hover:text-gray-900 cursor-pointer duration-300 translate-x-28 group-hover:-translate-x-[82px] bg-red-600 text-white rounded-full font-semibold active:scale-95"
          >
            Add To Cart
          </button>
        </div>
        <div className="font-semibold text-sm">
          <Rating rating={product.rating.rate} />
          <p>Category: {product.category}</p>
          <p>Stock: {Math.floor(product.rating.count)} Units Only/-</p>
        </div>
      </div>
      <div className="absolute top-4 right-0">
        {product.isNew && (
          <p className="bg-black text-white font-semibold font-titleFont px-6 py-1 rounded-md">
            Sale
          </p>
        )}
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ProductsCard;
