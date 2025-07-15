// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createWrapper } from 'next-redux-wrapper';
// eslint-disable-next-line import/no-cycle
import phoneReducer from './phoneSlice';
import otpReducer from './otpSlice';
import userReducer from './usernameSlice';
// eslint-disable-next-line import/no-cycle
import ageReducer from './ageSlice';
import topicReducer from './topicSlice';
// eslint-disable-next-line import/no-named-as-default
import emailReducer from './emailSlice';
import passwordReducer from './passwordSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      phone: phoneReducer,
      otp: otpReducer,
      username: userReducer,
      age: ageReducer,
      topic: topicReducer,
      email: emailReducer,
      password: passwordReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = AppState;

export const wrapper = createWrapper<AppStore>(makeStore);
