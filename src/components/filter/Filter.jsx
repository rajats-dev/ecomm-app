import React, { useRef, useState } from "react";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { ecomAction } from "../../features/ecomSlice/ecomSlice";
import Category from "./Category";

const Filter = () => {
  const rating = useSelector((state) => state.ecom.byRating);
  const stock = useSelector((state) => state.ecom.byStock);
  const dispatch = useDispatch();

  return (
    <div className="bg-black rounded-xl text-white h-[30rem] m-3 sticky top-20">
      <div className="flex flex-col m-4">
        <h1 className="w-full text-2xl mb-7">Filter Products</h1>
        <input
          className="h-10 p-4 mb-2 rounded-lg text-black"
          type="text"
          placeholder="Search Product"
          onChange={(e) => dispatch(ecomAction.searchQuery(e.target.value))}
        />
      </div>
      <div className="flex items-center m-4">
        <input
          type="radio"
          name="countries"
          value="Ascending"
          className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
          onChange={() => dispatch(ecomAction.sortOrder("LowToHigh"))}
        />
        <label className="text-base font-medium ml-2 block">Ascending</label>
      </div>
      <div className="flex items-center m-4">
        <input
          type="radio"
          name="countries"
          value="Decending"
          className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
          onChange={() => dispatch(ecomAction.sortOrder("HighToLow"))}
        />
        <label className="text-base font-medium ml-2 block">Decending</label>
      </div>
      <div className="flex items-center m-4">
        <input
          type="checkbox"
          name="countries"
          value="Include All Stock"
          className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
          onChange={() => dispatch(ecomAction.stock())}
          checked={stock}
        />
        <label className="text-base font-medium ml-2 block">
          Include Above 200 Units
        </label>
      </div>
      <div className="flex items-center m-4 mb-5">
        <Category />
      </div>
      <div className="flex items-center font-bold ml-4 mb-7">
        <label className="pr-2">Rating: </label>
        <Rating
          rating={rating}
          onClick={(i) => {
            dispatch(ecomAction.rating(i + 1));
          }}
          className="cursor-pointer"
        />
      </div>
      <div className="flex items-center justify-center mx-5">
        <button
          type="button"
          className="bg-white text-black rounded-md w-full h-10 hover:bg-red-700 hover:text-white active:scale-95 duration-100"
          onClick={() => {
            dispatch(ecomAction.clearFilter());
          }}
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
