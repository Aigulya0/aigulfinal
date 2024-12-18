import { configureStore } from '@reduxjs/toolkit';
import productReducer, { fetchProducts } from './features/ProductSlice';
import cartReducer from "./features/cartSlice";
import { productsApi } from './features/apiProductSlice';


const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    [productsApi.reducerPath] : productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});


store.dispatch(fetchProducts());
export default store;