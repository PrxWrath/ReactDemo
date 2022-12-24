import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartReducer";
import uiSlice from "./uiReducer";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        ui: uiSlice.reducer
    }
})

export default store;