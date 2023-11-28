import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCartDataRetrive = createAsyncThunk(
  "firabase/App/cartDataRetrive",
  async (isOk, { getState }) => {
    const {
      auth: {
        userInfo: { email },
      },
    } = getState();

    const emailId = email.replace(/[@.]/g, "");

    let cartItem = [];
    try {
      const res = await axios.get(
        `https://ecomm-app-9428f-default-rtdb.firebaseio.com/${emailId}.json`
      );
      const data = res.data;

      for (const key in data) {
        cartItem.push({
          ckey: key,
          _id: data[key]._id,
          title: data[key].title,
          image: data[key].image,
          price: data[key].price,
          quantity: data[key].quantity,
          description: data[key].description,
        });
      }
      return cartItem.length > 0 ? cartItem : null;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export default getCartDataRetrive;
