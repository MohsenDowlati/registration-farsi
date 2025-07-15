import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';

interface TopicState {
  isSelected: boolean[];
}

const numberOfTopics = 20;

const initialState: TopicState = {
  isSelected: Array(numberOfTopics).fill(false),
};

const topicSlice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
    toggleTopic: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.isSelected[index] = !state.isSelected[index];
    },
  },
});

export const { toggleTopic } = topicSlice.actions;
export const selectTopicSelection = (state: RootState) => state.topic.isSelected;

export const selectSelectedTopicIndices = createSelector(selectTopicSelection, (isSel) =>
  isSel.map((sel, i) => (sel ? i : -1)).filter((i) => i >= 0),
);

export default topicSlice.reducer;
