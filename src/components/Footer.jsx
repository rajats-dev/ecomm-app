import React from "react";
import logo from "../assets/logo.jpg";
import paymentLogo from "../assets/paymentLogo.png";
import { ImGithub } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black h-64 flex text-white py-10">
      <div className="max-w-screen-xl mx-auto grid gap-10 grid-cols-4">
        <div className="flex flex-col gap-5">
          <img src={logo} className="w-32" />
          <p className="text-white text-sm tracking-wide">© ReactBD.com</p>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-gray-400 text-lg">
            <ImGithub className=" hover:text-gray-500 duration-300 cursor-pointer" />
            <FaYoutube className=" hover:text-gray-500 duration-300 cursor-pointer" />
            <FaFacebookF className=" hover:text-gray-500 duration-300 cursor-pointer" />
            <FaTwitter className=" hover:text-gray-500 duration-300 cursor-pointer" />
            <FaInstagram className=" hover:text-gray-500 duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="px-5">
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>MBD, Ruwi, Muscat-Oman</p>
            <p>Mobile: 00968 97859628</p>
            <p>Phone: 00968 24769821</p>
            <p>E-mail: ecom@gmail.com</p>
          </div>
        </div>
        <div className="px-5">
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="text-base flex flex-col gap-2">
            <p className="flex gap-3 items-center hover:text-gray-500 duration-300">
              <span className="text-lg">
                <BsPersonFill />
              </span>
              My Account
            </p>
            <p className="flex gap-3 items-center hover:text-gray-500 duration-300">
              <span className="text-lg">
                <BsPaypal />
              </span>
              Checkout
            </p>
            <p className="flex gap-3 items-center hover:text-gray-500 duration-300">
              <span className="text-lg">
                <FaHome />
              </span>
              Order Tracking
            </p>
            <p className="flex gap-3 items-center hover:text-gray-500 duration-300">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              Help & Support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="text"
            className="bg-transparent border"
            placeholder="Email"
          />
          <button className="bg-red-600 text-center m-1 py-1 rounded-lg hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
