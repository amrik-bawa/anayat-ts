import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import enquiriesReducer from './enquiries/enquiriesSlice'
import signUpsReducer from './signUps/signUpsSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    enquiries:enquiriesReducer,
    signUps:signUpsReducer
  },
})