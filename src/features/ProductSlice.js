import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import products from '../products';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    return products;

  }
);
const initialState = {
 products: [],
    status: null,
}

const ProductReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
        state.status = 'pending';
      },
      [fetchProducts.fulfilled]: (state, action) => {
        state.status = 'success';
        state.products = action.payload
      },
      [fetchProducts.rejected]: (state, action) => {
      state.status = "rejected";
      },
  },
});



export default ProductReducer.reducer;
