import {configureStore} from '@reduxjs/toolkit'
import cartRdducer from './cartSlice'
export const store = configureStore({
    reducer:{
       cart: cartRdducer
    }
})