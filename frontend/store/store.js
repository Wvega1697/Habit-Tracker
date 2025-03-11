import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from '../slices/habitsSlice';

export const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
});
