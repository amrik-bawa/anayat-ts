import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import enquiriesReducer from './enquiries/enquiriesSlice'
import signUpsReducer from './signUps/signUpsSlice'
import advertsReducer from './adverts/advertsSlice'
import administratorsSlice  from './user-manager/administrators/administratorsSlice'
import customersSlice from './user-manager/customers/customersSlice'
import loginSlice from './login/loginSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    enquiries:enquiriesReducer,
    signUps:signUpsReducer,
    adverts:advertsReducer,
    administrators:administratorsSlice,
    customers:customersSlice,
    login:loginSlice
  },
})