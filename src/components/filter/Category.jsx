import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { ecomAction } from "../../features/ecomSlice/ecomSlice";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left text-black">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-20 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
        >
          Category
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="flex items-center m-4">
            <input
              type="radio"
              name="options"
              value="men"
              className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
              onChange={() => dispatch(ecomAction.category("men"))}
            />
            <label className="text-base font-medium ml-2 block">Men</label>
          </div>
          <div className="flex items-center m-4">
            <input
              type="radio"
              name="options"
              value="women"
              className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
              onChange={() => dispatch(ecomAction.category("women"))}
            />
            <label className="text-base font-medium ml-2 block">Women</label>
          </div>
          <div className="flex items-center m-4">
            <input
              type="radio"
              name="options"
              value="Electronics"
              className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
              onChange={() => dispatch(ecomAction.category("elec"))}
            />
            <label className="text-base font-medium ml-2 block">
              Electronics
            </label>
          </div>
          <div className="flex items-center m-4">
            <input
              type="radio"
              name="options"
              value="Electronics"
              className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
              onChange={() => dispatch(ecomAction.category("jewel"))}
            />
            <label className="text-base font-medium ml-2 block">Jewelery</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Category);
