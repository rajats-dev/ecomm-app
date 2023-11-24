import React from "react";
import logo from "../assets/logo.jpg";
import cart from "../assets/cart.png";
import profile from "../assets/profile.jpg";

const Header = () => {
  return (
    <div className="w-full h-20 bg-slate-900 border-b-[4px] border-b-orange-400 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <img src={logo} alt="logo" className="h-10"></img>
        </div>
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
          <div className="relative px-4">
            <img src={cart} alt="cart" className="w-9" />
            <span className="text-white text-[1px] bg-red-500 absolute bottom-4 left-8 rounded-full px-2 font-semibold">
              7
            </span>
          </div>
          <img src={profile} className="h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
