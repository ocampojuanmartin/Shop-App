//shopping cart
import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState:{ // everything starts with 0
        products:[],
        quantity: 0,
        total: 0,
    },
    reducers:{
        addProduct: (state, action) => {
            state.quantity += 1 //i increase the quantity by 1 when adding a product to cart
            state.products.push(action.payload) //when you add a product, that product is pushed into the products array that will contain the prods in the cart
            state.total += action.payload.price * action.payload.quantity// i also have to increase the toal price when adding a product
        },
    }
})

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer