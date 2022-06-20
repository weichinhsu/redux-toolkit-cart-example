import React from 'react'
import Button from '@mui/material/Button'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

export default function CartTable({ cart, decrement, increment, removeFromCart }) {
    const caculateTotal = () => {
        return cart.map(data => data.price * data.count)
            .reduce((tempSum, current) => current + tempSum, 0)
    }
    return (
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
                    {cart.map((data) => (
                        <TableRow key={data.id}>
                            <TableCell align="center">
                                <Button onClick={() => removeFromCart(data.id)}>X</Button>
                            </TableCell>
                            <TableCell component="th" scope="row">{data.name}</TableCell>
                            <TableCell align="center">{data.price}</TableCell>
                            <TableCell align="center">
                                <Button onClick={() => decrement(data.id)} size="small">-</Button>
                                {data.count}
                                <Button onClick={() => increment(data.id)} size="small">+</Button>
                            </TableCell>
                            <TableCell align="center">{data.count * data.price}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell colSpan={3} />
                        <TableCell colSpan={1} align="center">Subtotal</TableCell>
                        <TableCell align="center">{caculateTotal()}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
