import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  errors: 0,
};

export const figureSlice = createSlice({
  name: 'figure',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addError: (state) => {
      state.errors += 1;
    },
    resetError: (state) => {
      state = initialState;
      return state
    },
  },
});
export const selectErrors = (state) => state.figure.errors;
export const { addError, resetError } = figureSlice.actions;

export default figureSlice.reducer;
