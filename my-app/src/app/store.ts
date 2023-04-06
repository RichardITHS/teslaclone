import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import carReducer from '../features/menu/carSlice';

export const store = configureStore({
  reducer: {
    car: carReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
