import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface PhoneState {
  value: string;
  isOK: boolean;
  isSelected: boolean;
}

const initialState: PhoneState = {
  value: '',
  isOK: false,
  isSelected: false,
};

const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {
    setPhone(state, action: PayloadAction<string>) {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.isOK = action.payload.length >= 10;
    },
    setIsOK(state, action: PayloadAction<boolean>) {
      // eslint-disable-next-line no-param-reassign
      state.isOK = action.payload;
    },
    setIsSelected(state, action: PayloadAction<boolean>) {
      // eslint-disable-next-line no-param-reassign
      state.isSelected = action.payload;
      // eslint-disable-next-line no-param-reassign
      if (action.payload) {
        // eslint-disable-next-line no-param-reassign
        state.isOK = state.value.length >= 10;
      } else {
        // eslint-disable-next-line no-param-reassign
        state.isOK = true;
      }
    },
  },
});

export const { setPhone, setIsOK, setIsSelected } = phoneSlice.actions;

export const selectPhoneValue = (state: RootState) => state.phone.value;
export const selectPhoneOK = (state: RootState) => state.phone.isOK;
export const selectSelectedOK = (state: RootState) => state.phone.isSelected;

export default phoneSlice.reducer;
