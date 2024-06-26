import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import getCartDataStore from "../store/reducers/getCartDataStore";

const Product = () => {
  const [details, setDetails] = useState("");
  const [baseQty, setBaseQty] = useState(1);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10 h-full">
        <div className="relative">
          <img
            className="w-full h-[500px] object-cover"
            src={details.image}
            alt="productImg"
          />
          <div>
            {details.isNew && (
              <p className="absolute top-2 right-0 w-20 text-center bg-black text-white rounded-lg">
                Sale
              </p>
            )}
          </div>
        </div>
        <div className="w-3/5 flex flex-col justify-start gap-8">
          <div>
            <h2 className="text-4xl font-semibold">{details.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="text-2xl font-medium text-gray-900">
                ${details.price}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-base">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 Customer review)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">{details.description}</p>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3 rounded-md">
              <p className="text-sm font-semibold">Quantity</p>
              <div className="flex items-center gap-3 text-sm font-semibold">
                <button
                  onClick={() =>
                    setBaseQty(baseQty === 1 ? baseQty : baseQty - 1)
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black rounded-md"
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black rounded-md"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                dispatch(getCartDataStore({ ...details, quantity: baseQty })) &
                  toast.success(`${details.title} is added`);
              }}
              className="bg-black text-white py-3 px-6 active:bg-gray-800 rounded-md hover:bg-red-600"
            >
              Add To Cart
            </button>
          </div>
          <p className="text-base font-bodyFont font-bold text-black">
            Category:{" "}
            <span className="font-medium capitalize">{details.category}</span>
          </p>
        </div>
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

export default Product;
