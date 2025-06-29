import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    user: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        loadUser: (state, action) => {
            state.user = action.payload;
        },  
        removeUser: (state) => {
            state.user = null;
        }
    }
})
export const {loadUser, removeUser} = userSlice.actions
export default userSlice.reducer;