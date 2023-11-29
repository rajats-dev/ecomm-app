import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { ecomAction } from "../features/ecomSlice/ecomSlice";
import getCartDataDelete from "../store/reducers/getCartDataDelete";
import getCartDataStore from "../store/reducers/getCartDataStore";

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.ecom.productData);

  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-bold text-2xl">Shopping Cart</h2>
        <div>
          <div>
            {productData.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-6 mt-6"
              >
                <div className="flex items-center gap-2">
                  <MdOutlineClose
                    onClick={() => {
                      dispatch(getCartDataDelete(item));
                    }}
                    className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                  />
                  <img
                    className="w-11 h-11 object-cover rounded-lg"
                    src={item.image}
                    alt="productImg"
                  />
                </div>
                <h2 className="w-52 font-bold">{item.title}</h2>
                <p className="w-10">${item.price}</p>
                <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                  <p className="text-sm">Quantity</p>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <span
                      onClick={() => {
                        dispatch(getCartDataStore({ ...item, quantity: -1 }));
                        dispatch(
                          ecomAction.decrementQuantity({
                            id: item.id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        );
                      }}
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      -
                    </span>
                    {item.quantity}
                    <span
                      onClick={() => {
                        dispatch(getCartDataStore({ ...item, quantity: 1 }));
                        dispatch(
                          ecomAction.increamentQuantity({
                            id: item.id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        );
                      }}
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      +
                    </span>
                  </div>
                </div>
                <p className="w-14">${item.quantity * item.price}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              dispatch(getCartDataDelete({ ckey: 0 }));
              dispatch(ecomAction.resetCart()) &
                toast.error("Your Cart is Empty!");
            }}
            className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300 rounded-md"
          >
            Reset Cart
          </button>
        </div>
      </div>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          Go Shopping
        </button>
      </Link>
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

export default CartItem;
