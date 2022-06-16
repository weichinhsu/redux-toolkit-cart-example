import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { selectProductInCart, increment, decrement, removeFromCart } from './cartSlice'
import CartTable from '../../components//CartTable'

export function Cart() {
    const productInCart = useSelector(selectProductInCart)
    console.log()
    const dispatch = useDispatch()
    const caculateTotal = () => {
        return productInCart.map(data => data.price * data.count)
            .reduce((tempSum, current) => current + tempSum, 0)
    }
    return (
        <Grid item xs={6}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"></TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Count</TableCell>
                            <TableCell align="center">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productInCart.map((row) => (
                            <CartTable
                                key={row.id}
                                data={row}
                                decrement={() => dispatch(decrement(row.id))}
                                increment={() => dispatch(increment(row.id))}
                                removeFromCart={() => dispatch(removeFromCart(row.id))}
                            />
                        ))}
                        <TableRow>
                            <TableCell colSpan={3} />
                            <TableCell colSpan={1} align="center">Subtotal</TableCell>
                            <TableCell align="center">{caculateTotal()}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}
