import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
        const isProductExist = state.carts.find(
          (prd) => prd.id === action.payload.id
        );
  
        if (isProductExist) {
          isProductExist.count += 1;
  
        } else {
          const prd = { id: nanoid(), ...action.payload };
          const newProduct = { ...prd, count: 1 };
          state.carts.push(newProduct);
        }
      },
    removeProductFromCart: (state, action) => {
      state.carts = state.carts.filter((prd) => prd.id !== action.payload);
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
