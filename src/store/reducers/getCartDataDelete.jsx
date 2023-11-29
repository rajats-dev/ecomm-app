import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCartDataDelete = createAsyncThunk(
  "firabase/App/cartDataDelete",
  async (item, { getState }) => {
    const {
      auth: {
        userInfo: { email },
      },
    } = getState();

    const emailId = email.replace(/[@.]/g, "");

    try {
      await axios.delete(
        item.ckey !== 0
          ? `https://ecomm-app-9428f-default-rtdb.firebaseio.com/${emailId}/${item.ckey}.json`
          : `https://ecomm-app-9428f-default-rtdb.firebaseio.com/${emailId}.json`
      );

      return { id: item.id };
    } catch (error) {
      console.log(error.message);
    }
  }
);

export default getCartDataDelete;
