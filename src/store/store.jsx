import { configureStore } from "@reduxjs/toolkit";
import ecomSlice from "../features/ecomSlice/ecomSlice";

const store = configureStore({
  reducer: { ecom: ecomSlice.reducer },
});

export default store;
