import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function ProductCard({data, add}) {
    return (
        <Card variant="outlined" style={{ width: '10vw' }}>
            <div key={data.id}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {data.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        $ {data.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => add(data)} size="small">Add</Button>
                </CardActions>
            </div>
        </Card >
    );
}
