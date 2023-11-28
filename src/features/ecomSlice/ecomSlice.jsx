import { createSlice } from "@reduxjs/toolkit";
import getCartDataRetrive from "../../store/reducers/getCardDataRetrive";
import getCartDataStore from "../../store/reducers/getCartDataStore";
import getCartDataDelete from "../../store/reducers/getCartDataDelete";

const ecomSlice = createSlice({
  name: "ecom",
  initialState: {
    productData: [],
  },
  reducers: {
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
  extraReducers: (builder) => {
    builder.addCase(getCartDataStore.fulfilled, (state, action) => {
      const item = state.productData.findIndex(
        (item) => item._id === action.payload._id
      );
      if (item === -1) {
        state.productData.push(action.payload);
      } else {
        state.productData[item] = action.payload;
      }
    });

    builder.addCase(getCartDataRetrive.fulfilled, (state, action) => {
      if (action.payload) {
        state.productData = action.payload;
      } else {
        state.productData = [];
      }
    });

    builder.addCase(getCartDataDelete.fulfilled, (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload.id
      );
    });
  },
});

export const ecomAction = ecomSlice.actions;

export default ecomSlice;
