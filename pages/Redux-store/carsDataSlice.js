import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {HYDRATE} from "next-redux-wrapper"

const initialState =  {
    counts : 0,
    pageCount : 0,
    status : "IDLE",
    isLoadding : false,
    msg: ""
}

export const fetchAllCarData = createAsyncThunk(
    "fetchAllCarData/api", () => {
        const response = axios.get("https://autodigg.com/ad-api/cars/list?car_type=Used+car%2CNew+car%2CCertified+pre-owned&page=1&radius=100&year=2011%2C2021&return=count");
        return response;
    },
    "fetchAllCarCount/api", () => {
        const response = axios.get("https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=Used+car&page=1&radius=100");
        return response;
    }
)

const carsDataSlice = createSlice({   
    name : "carApi",
    initialState,
    reducers : {
        pageValue : (state, action) => {
            pageCount.state = action.payload
        }
    },
    // extraReducers: {
    //     // [fetchAllCarData.pending] : (state,action) => {
    //     //     state.status = "pending"
    //     //     state.isLoadding = true
    //     //     state.msg = " "
    //     // }
    //     [HYDRATE] : (state, action) => {
    //         // state.status = "pending"
    //         // state.isLoadding = true
    //         // state.msg = " "

    //     }
    // }
    extraReducers(builder)  {
        builder.addCase(fetchAllCarData.pending, (state,action) => {
            state.status = "pending"
            state.isLoadding = true
            state.msg = " "
        })
        builder.addCase(fetchAllCarData.rejected, (state,action) => {
            state.status = "rejected"
            state.isLoadding = false
            state.msg= "Something Went Wrong!!!"
        })
        builder.addCase(fetchAllCarData.fulfilled, (state,action) => {
            state.status = "success"
            state.isLoadding = false
            state.msg = " "
            state.counts = action.payload.data.count
        })

    }
})

export const {pageValue} = carsDataSlice.actions;
export default carsDataSlice.reducer