import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice";
import orderReducer from "./slices/orderSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        menu: menuReducer,
        cart: cartReducer,
        order: orderReducer
    },
})

