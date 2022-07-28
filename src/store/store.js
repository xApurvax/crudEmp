import { configureStore } from "@reduxjs/toolkit";
import landingPageSlice from "./landingPageSlice"
import scoreBoardSlice from "./scoreBoardSlice"

export const store = configureStore({
 reducer:{   
    landingPageSlice : landingPageSlice,
    scoreBoardSlice : scoreBoardSlice,
},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
    }),
})