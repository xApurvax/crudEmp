import { configureStore } from "@reduxjs/toolkit";
import carsDataSlice from "./carsDataSlice"

export const store = configureStore({
 reducer:{   
    carsDataSlice : carsDataSlice,
},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
    }),
})