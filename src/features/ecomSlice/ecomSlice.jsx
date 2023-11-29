import { createSlice } from "@reduxjs/toolkit";
import getCartDataRetrive from "../../store/reducers/getCardDataRetrive";
import getCartDataStore from "../../store/reducers/getCartDataStore";
import getCartDataDelete from "../../store/reducers/getCartDataDelete";

const ecomSlice = createSlice({
  name: "ecom",
  initialState: {
    productData: [],
    byStock: false,
    byRating: 0,
    searchQuery: "",
    sort: "",
    category: "",
  },
  reducers: {
    increamentQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
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

    rating: (state, action) => {
      state.byRating = action.payload;
    },

    stock: (state) => {
      state.byStock = !state.byStock;
    },

    searchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    sortOrder: (state, action) => {
      state.sort = action.payload;
    },

    category: (state, action) => {
      state.category = action.payload;
    },

    clearFilter: (state) => {
      state.byStock = false;
      state.byRating = 0;
      state.searchQuery = "";
      state.sort = "";
      state.category = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartDataStore.fulfilled, (state, action) => {
      const item = state.productData.findIndex(
        (item) => item.id === action.payload.id
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
        (item) => item.id !== action.payload.id
      );
    });
  },
});

export const ecomAction = ecomSlice.actions;

export default ecomSlice;
