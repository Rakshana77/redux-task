// store.js
import { configureStore } from '@reduxjs/toolkit';
 // Import your root reducer
  import rootReducer from './rootReducer.js';
const store = configureStore({
  reducer: rootReducer, // Pass your root reducer here
  // Optionally add other store configurations here
});

export default store;
