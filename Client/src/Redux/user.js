//shopping cart
import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState:{ // everything starts with 0
        currentUser:null,
        isFetching: false,
        error: false,
    },
    reducers:{
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload // the payload will have the user so i'll save it in currentUser
        },
        loginFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
    }
})

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions
export default userSlice.reducer