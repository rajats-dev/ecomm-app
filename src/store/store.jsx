import { configureStore } from "@reduxjs/toolkit";
import ecomSlice from "../features/ecomSlice/ecomSlice";
import authSlice from "../features/authSlice/authSlice";

const store = configureStore({
  reducer: { ecom: ecomSlice.reducer, auth: authSlice.reducer },
});

export default store;
