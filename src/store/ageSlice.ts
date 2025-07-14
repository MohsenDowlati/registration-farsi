import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store/store';

interface AgeState {
  value: string;
  isOK: boolean;
}

const initialState: AgeState = {
  value: '',
  isOK: false,
};

const ageSlice = createSlice({
  initialState,
  name: 'age',
  reducers: {
    setAge(state, action: PayloadAction<string>) {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.isOK = true;
    },
  },
});

export const { setAge } = ageSlice.actions;

export const selectAge = (state: RootState) => state.age.value;
export const selectAgeOK = (state: RootState) => state.age.isOK;

export default ageSlice.reducer;
