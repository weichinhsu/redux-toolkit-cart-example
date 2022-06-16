import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productInCart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.productInCart.push({ ...action.payload, count: 1 })
        },
        increment: (state, { payload }) => {
            const itemIndex = state.productInCart.findIndex(item => item.id === payload);
            state.productInCart[itemIndex].count += 1;
        },
        decrement: (state, { payload }) => {
            const itemIndex = state.productInCart.findIndex(item => item.id === payload);
            if (state.productInCart[itemIndex].count === 1) {
                state.productInCart = state.productInCart.filter(prod => prod.id !== payload)
            } else {
                state.productInCart[itemIndex].count -= 1;
            }
        },
        removeFromCart: (state, { payload }) => {
            state.productInCart = state.productInCart.filter(prod =>
                prod.id !== payload
            )
        },
    }
});

export const selectProductInCart = (state) => state.cart.productInCart;

export const { addToCart, increment, decrement, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
