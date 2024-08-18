import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartslice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Define the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
