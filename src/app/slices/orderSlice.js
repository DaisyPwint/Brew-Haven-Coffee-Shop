import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orders: []
    },
    reducers: {
        addOrder: (state,{payload}) => {
            const updatedOrders = [...state.orders,{...payload}];
            updatedOrders.sort((a,b) => new Date(b.date) - new Date(a.date));

            return {
                orders: updatedOrders
            }
        }
    }
})

export const {addOrder} = orderSlice.actions;

export default orderSlice.reducer;