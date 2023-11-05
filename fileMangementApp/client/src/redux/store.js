import { configureStore } from '@reduxjs/toolkit'
import imageReducer from '../redux/imageSlice'

export default configureStore({
  reducer: {
    file: imageReducer,
  },
})