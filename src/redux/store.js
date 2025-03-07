import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import customerSlice from './slices/customer'
import userSlice from './slices/user-slice'
import localStorage from 'redux-persist/lib/storage'

const setup = {
  key: 'shahbaz',
  version: 1,
  storage: localStorage,
}

const slices = combineReducers({
  userSlice,
  //   customerSlice,
})

const store = configureStore({
  reducer: persistReducer(setup, slices),
  devTools: true,
  middleware: (config) =>
    config({
      serializableCheck: false,
    }),

  //   reducer: {
  //     customerSlice,
  //     userSlice,
  //   },
})

export default store
