// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createWrapper } from 'next-redux-wrapper';
// eslint-disable-next-line import/no-cycle
import phoneReducer from './phoneSlice';
import otpReducer from './otpSlice';
import userReducer from './usernameSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      phone: phoneReducer,
      otp: otpReducer,
      username: userReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = AppState;

export const wrapper = createWrapper<AppStore>(makeStore);
