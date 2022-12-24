import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartReducer";

const store = configureStore({
    reducer: {cart: cartSlice.reducer}
})

export default store;