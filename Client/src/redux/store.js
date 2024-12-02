import {configureStore} from "@reduxjs/toolkit"
import authReducer from './slices/authSlice'
import {apiSlice} from './slices/apiSlice'


const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reduce,
        auth:authReducer
    },
    middleware:(getDefaultMiddlware)=>
        getDefaultMiddlware().concat(apiSlice.middleware),
    devTools:true
})
export default store