import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './slice/CounterSlice'
import { destinationReducer } from './slice/destinationSlice'

export const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    destinationStore: destinationReducer

  },
})

console.log(store.getState())