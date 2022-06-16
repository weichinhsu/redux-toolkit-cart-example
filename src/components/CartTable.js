import React from 'react'
import Button from '@mui/material/Button'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

export default function CartTable({data, decrement, increment, removeFromCart}) {
    return (
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
    );
}
