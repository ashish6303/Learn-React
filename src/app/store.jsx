import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import themeReduce from '../features/theme/themeSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReduce
  }
});

export default store;
