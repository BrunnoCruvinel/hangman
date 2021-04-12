import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 100,
};

export const clockSlice = createSlice({
  name: 'clock',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    decrement: (state) => {
      if (state.counter > -1)
        state.counter -= 1
      else
        state = initialState

      return state

    },
    resetCounter: (state) => {
      state = initialState;
      return state
    },
  },
});
export const selectCounter = (state) => state.clock.counter;
export const { decrement, resetCounter } = clockSlice.actions;

export default clockSlice.reducer;
