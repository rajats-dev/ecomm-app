import { createSlice } from "@reduxjs/toolkit";

const ecomSlice = createSlice({
  name: "ecom",
  initialState: {
    productData: [],
    userInfo: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (!item) {
        state.productData.push(action.payload);
      } else {
        item.quantity += action.payload.quantity;
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload._id
      );
    },
    increamentQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    resetCart: (state) => {
      state.productData = [];
    },
  },
});

export const ecomAction = ecomSlice.actions;

export default ecomSlice;
