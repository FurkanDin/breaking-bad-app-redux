import { configureStore } from "@reduxjs/toolkit";
import chractersSlice from "./charactersSlice";
import  quotesSlice  from './quotesSlice';
export const store = configureStore({
  reducer: {
    characters: chractersSlice,
    quotes: quotesSlice,
  },
});
