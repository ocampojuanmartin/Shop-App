//shopping cart
import {createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "product",
    initialState:{ // everything starts with 0
        products:[],
        isFetching: false,
        error: false,
    },
    reducers:{
        //GET ALL
        getProductStart:(state)=>{
            state.isFetching = true
            state.error = false
        },
        getProductSuccess:(state, action)=>{
            state.isFetching = false
            state.products = action.payload
        },
        getProductFailure:(state)=>{
            state.isFetching = true
            state.error = true
        },

        //DELETE
        deleteProductStart:(state)=>{
            state.isFetching = true
            state.error = false
        },
        deleteProductSuccess:(state, action)=>{
            state.isFetching = false
            state.products.splice( //with redux toolkit i can use splice method
                state.products.findIndex((item) => item._id === action.payload), 1 // im getting the index of the product
            ) 
        },
        deleteProductFailure:(state)=>{
            state.isFetching = true
            state.error = true
        },

        //UPDATE
        updateProductStart:(state)=>{
            state.isFetching = true
            state.error = false
        },
        updateProductSuccess:(state, action)=>{
            state.isFetching = false
            state.products[state.products.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.product // i'm updating the product that matches the id
        },
        updateProductFailure:(state)=>{
            state.isFetching = true
            state.error = true
        },

        //CREATE
        addProductStart:(state)=>{
            state.isFetching = true
            state.error = false
        },
        addProductSuccess:(state, action)=>{
            state.isFetching = false
            state.products.push(action.payload)
        },
        addProductFailure:(state)=>{
            state.isFetching = true
            state.error = true
        },
    }
})

export const { 
    getProductStart, getProductSuccess, getProductFailure,
    deleteProductStart, deleteProductSuccess, deleteProductFailure,
    updateProductStart, updateProductSuccess, updateProductFailure,
    addProductFailure, addProductStart, addProductSuccess
              } = productSlice.actions
export default productSlice.reducer