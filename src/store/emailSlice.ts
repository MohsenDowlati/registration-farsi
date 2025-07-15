import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface EmailState {
  value: string;
  isOK: boolean;
}

const initialState: EmailState = {
  value: '',
  isOK: false,
};

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      const mail = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.value = mail;
      // eslint-disable-next-line no-param-reassign
      state.isOK = emailRegex.test(mail);
    },
  },
});

export const { setEmail } = emailSlice.actions;

export const selectEmail = (state: RootState) => state.email.value;
export const selectEmailOK = (state: RootState) => state.email.isOK;

export default emailSlice.reducer;
