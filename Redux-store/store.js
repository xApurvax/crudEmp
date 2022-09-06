import { configureStore  } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import carsDataSlice from "./carsDataSlice"
import homePageSlice from "./homePageSlice"

const store = configureStore({
 reducer:{   
    carsDataSlice : carsDataSlice,
    homePageSlice : homePageSlice,
},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
    }),
    devTools : true,
})

// export const wrapper = createWrapper(makeStore);
export default store