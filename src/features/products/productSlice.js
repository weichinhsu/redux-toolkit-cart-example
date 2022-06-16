import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productAPI';

const initialState = {
  items: []
}

export const getProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetchProducts()
    return response.data
  }
)

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export const selectProducts = (state) => state.products.items;

export default productSlice.reducer;
