import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { rootReducer } from '@redux/store/reducers'

const isDevelopment = process.env.NODE_ENV !== 'production'

export const store = configureStore({
  reducer: rootReducer,
  devTools: isDevelopment,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, undefined, Action<string>>
