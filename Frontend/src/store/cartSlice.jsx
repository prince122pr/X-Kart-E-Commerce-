import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    carts: null
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        loadcart: (state, action) => {
            state.carts = action.payload;
        }
    }
})

export const {loadcart} = cartSlice.actions;
export default cartSlice.reducer;