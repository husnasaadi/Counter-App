// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Counter/CounterSlice'; // Adjust the path if necessary

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
