import React from 'react';
import Grid from '@mui/material/Grid';
import { Products } from './features/products/Products';
import { Cart } from './features/cart/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Products />
        <Cart />
      </Grid>
    </div>
  );
}

export default App;
