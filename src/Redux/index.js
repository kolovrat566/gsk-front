import nameStore from './nameStore'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: nameStore,
});

export default store
