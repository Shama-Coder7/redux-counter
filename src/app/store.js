import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import themeReducer from '../features/theme/ChangecolorSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
})