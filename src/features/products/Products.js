import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { selectProducts, getProducts } from './productSlice'
import { addToCart } from '../cart/cartSlice'
import ProductCard from '../../components/ProductCard'

export function Products() {
    const products = useSelector(selectProducts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const addHandler = (data) => {
        dispatch(addToCart(data))
    }

    return (
        <Grid item xs={6}>
            <Stack direction="row" spacing={2} >
                {
                    products.map(data =>
                        <ProductCard key={data.id} data={data} add={addHandler} />
                    )
                }
            </Stack>
        </Grid>
    );
}
