// features/commentsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommentState {
  comments: Record<number, string>;
}

const initialState: CommentState = {
  comments: {},
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<{repoId: number; comment: string}>) => {
      const { repoId, comment } = action.payload;
      state.comments[repoId] = comment;
    },
  },
});

export const { addComment } = commentsSlice.actions;

export default commentsSlice.reducer;
