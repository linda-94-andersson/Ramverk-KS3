import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../test redux/counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
})