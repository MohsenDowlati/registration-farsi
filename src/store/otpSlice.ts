import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface OTPState {
  code: string;
  isOkay: boolean;
}

const initialState: OTPState = {
  code: '',
  isOkay: false,
};

const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    setOTP(state, action: PayloadAction<string>) {
      // eslint-disable-next-line no-param-reassign
      state.code = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.isOkay = action.payload.length >= 6;
    },
  },
});

export const { setOTP } = otpSlice.actions;
export const selectOTPCode = (s: RootState) => s.otp.code;
export const selectOTPIsOkay = (s: RootState) => s.otp.isOkay;
export default otpSlice.reducer;
