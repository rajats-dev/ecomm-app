import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCartDataStore = createAsyncThunk(
  "firabase/App/cartDataPost",
  async (obj, { getState }) => {
    const {
      auth: {
        userInfo: { email },
      },
      ecom: { productData },
    } = getState();

    const emailId = email.replace(/[@.]/g, "");
    const existingItem = productData.findIndex((ele) => ele.id === obj.id);
    const item = productData.find((ele) => ele.id === obj.id);

    if (existingItem === -1) {
      try {
        const res = await axios.post(
          `https://ecomm-app-9428f-default-rtdb.firebaseio.com/${emailId}.json`,
          obj
        );

        return {
          ckey: res.data.name,
          id: obj.id,
          title: obj.title,
          image: obj.image,
          price: obj.price,
          quantity: 1,
          description: obj.description,
        };
      } catch (error) {
        console.log(error.message);
      }
    } else {
      let updatQty =
        item.quantity === 1 && !obj.quantity >= 1
          ? item.quantity
          : item.quantity + obj.quantity;
      let updatedObj = { ...obj, quantity: updatQty };
      try {
        await axios.put(
          `https://ecomm-app-9428f-default-rtdb.firebaseio.com/${emailId}/${item.ckey}.json`,
          updatedObj
        );

        return { ...updatedObj };
      } catch (error) {
        console.log(error.message);
      }
    }
  }
);

export default getCartDataStore;
