import React from "react";
import logo from "../assets/logo.jpg";
import cart from "../assets/cart.png";
import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const productData = useSelector((state) => state.ecom.productData);
  const userInfo = useSelector((state) => state.ecom.userInfo);
  console.log(userInfo);
  return (
    <div className="w-full h-20 bg-slate-900 border-b-[4px] border-b-orange-400 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img src={logo} alt="logo" className="h-10"></img>
          </div>
        </Link>
        <div className="flex item-center">
          <ul className="flex gap-5 text-white font-bold mr-3">
            <li className="hover:text-orange-400 cursor-pointer duration-300">
              Home
            </li>
            <li className="hover:text-orange-400 cursor-pointer duration-300">
              Pages
            </li>
            <li className="hover:text-orange-400 cursor-pointer duration-300">
              Shop
            </li>
            <li className="hover:text-orange-400 cursor-pointer duration-300">
              Element
            </li>
            <li className="hover:text-orange-400 cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to={`/cart`}>
            <div className="relative px-4">
              <img src={cart} alt="cart" className="w-8" />
              <span className="text-white text-[1px] bg-red-500 absolute bottom-4 left-8 rounded-full px-2 font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            {userInfo ? (
              <img
                src={userInfo.image}
                className="h-7 rounded-full items-center"
              />
            ) : (
              <CgProfile className="text-2xl text-white items-center" />
            )}
          </Link>
          {/* {userInfo && (
            <p className="text-white font-semibold flex items-center">
              {userInfo.name}
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Header;
