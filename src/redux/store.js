import { configureStore } from '@reduxjs/toolkit'
import formReducer from './formSlice'

const store = configureStore({
    reducer: {
        formReduxData: formReducer
    }
})

export default store;