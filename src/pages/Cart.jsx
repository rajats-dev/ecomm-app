import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
// import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import getCartDataRetrive from "../store/reducers/getCardDataRetrive";

const Cart = () => {
  const productData = useSelector((state) => state.ecom.productData);
  const userInfo = useSelector((state) => state.ecom.userInfo);
  const [payNow, setPayNow] = useState(false);
  const [totalAmt, setTotalAmt] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.quantity * item.price;
      return price;
    });
    setTotalAmt(price);
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout");
    }
  };
  return (
    <div>
      <img
        className="w-full h-10 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      {productData.length > 0 ? (
        <div className="max-w-screen-xl mx-auto pt-10 pb-20 flex">
          <CartItem />
          <div className="w-1/3 bg-[#fafafa] py-6 px-4">
            <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium">Cart Totals</h2>
              <p className="flex items-center gap-4 text-base">
                Subtotal <span className="font-bold text-lg">${totalAmt}</span>
              </p>
              <p className="flex items-start gap-4 text-base">
                Shipping{" "}
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quos, veritatis.
                </span>
              </p>
            </div>
            <p className="font-semibold flex justify-between mt-6 text-xl">
              Total: <span className="text-lg font-bold">${totalAmt}</span>
            </p>
            <button
              onClick={handleCheckout}
              className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300 rounded-lg"
            >
              Proceed To Checkout
            </button>
            {payNow && (
              <div className="w-full mt-6 flex items-center justify-center">
                <StripeCheckout
                  stripeKey="pk_live_gNuRbBkcW4mzBASwqqjdfn3l0004Qcxzdm"
                  name="Bazar Online Shopping"
                  amount={totalAmt * 100}
                  label="Pay to bazar"
                  description={`Your Payment amount is $${totalAmt}`}
                  token={7686908}
                  email={userInfo.email}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-screen-xl mx-auto py-10 flex flex-col items-center gap-2 justify-center">
          <p className="text-xl text-orange-600  font-semibold">
            Your Cart is Empty. Please go back to Shopping and add products to
            Cart.
          </p>
          <Link to="/">
            <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-300">
              <span>
                <HiOutlineArrowLeft />
              </span>
              go shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
