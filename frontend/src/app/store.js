import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import figureReducer from '../features/figure/figureSlice';
import keyboardReducer from '../features/keyboard/keyboardSlice';
import clockReducer from '../features/clock/clockSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    figure: figureReducer,
    keyboard: keyboardReducer,
    clock: clockReducer
  },
});
