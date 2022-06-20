import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@mui/material/Grid';
import { selectProductInCart, increment, decrement, removeFromCart } from './cartSlice'
import CartTable from '../../components//CartTable'

export function Cart() {
    const productInCart = useSelector(selectProductInCart)
    const dispatch = useDispatch()
    return (
        <Grid item xs={6}>
            <CartTable
                cart={productInCart}
                decrement={(id) => dispatch(decrement(id))}
                increment={(id) => dispatch(increment(id))}
                removeFromCart={(id) => dispatch(removeFromCart(id))}
            />
        </Grid>
    );
}
