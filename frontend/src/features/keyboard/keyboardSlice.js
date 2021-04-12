import { createSlice } from '@reduxjs/toolkit';
import i18n from '../../conf/i18n.json'


var word = ''
const getNewWord = () => {
  const n = Math.floor(Math.random() * i18n.words.length)
  word = i18n.words[n]
  return word
}
getNewWord()

const initialState = {
  word: word,
  wordArray: word.split(""),
  choices: []
};

export const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    newWord: (state) => {
      getNewWord()
      state = {
        word: word,
        wordArray: word.split(""),
        choices: []
      };

      return state
    },
    newChoice: (state, { payload }) => {
      state = { ...state, choices: [...state.choices, payload] }
      return state
    },
  },
});
export const selectChoices = (state) => state.keyboard.choices;
export const selectWordArray = (state) => state.keyboard.wordArray;
export const { newWord, newChoice } = keyboardSlice.actions;

export default keyboardSlice.reducer;
