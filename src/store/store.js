import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './stepsSlices';

export const store = configureStore({
  reducer,
});
