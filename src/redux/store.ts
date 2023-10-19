import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { api } from './api/apiSlice'
import storage from 'redux-persist/lib/storage';
import appointmentsReducer from './features/appointments/appointmentsSlice'
import userTokenReducer from './features/user/userTokenSlice'
import { persistReducer } from 'redux-persist'


const persistConfig = {
  key: 'nextjs',
  storage,
  blacklist: ['appointmentsReducer','api']
}

const rootReducer = combineReducers({ 
  appointments: appointmentsReducer,
  userAccessToken: userTokenReducer,
  [api.reducerPath] : api.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
