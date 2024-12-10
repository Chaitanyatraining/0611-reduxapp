import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from './watchListReducer'
import moviesReducer from './moviesReducers'

const store = configureStore({
    reducer:{
        watchListData: watchListReducer,
        moviesData: moviesReducer
    }
})

export default store