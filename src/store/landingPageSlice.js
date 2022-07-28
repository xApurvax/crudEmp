import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { api_token,base_url } from '../Pages/Config'
import axios from "axios";

const initialState =  {
    cardApi : null,
    matchStatus : [],
    upcomingStatus : [],
    status : "IDLE",
    isLoadding : false,
    msg: ""
}

export const fetchfixters = createAsyncThunk(
    "fetchfixters/api", () => {
        const response = axios.get(base_url+api_token+"include=localteam,visitorteam,runs,season,league");
        return response;
    }
)

const landingPageSlice = createSlice({   
    name : "matchApi",
    initialState,
    reducers : {
    },
    extraReducers(builder)  {
        builder.addCase(fetchfixters.pending, (state,action) => {
            state.status = "pending"
            state.isLoadding = true
            state.msg = " "
        })
        builder.addCase(fetchfixters.rejected, (state,action) => {
            state.status = "rejected"
            state.isLoadding = false
            state.msg= "Something Went Wrong!!!"
        })
        builder.addCase(fetchfixters.fulfilled, (state,action) => {
            state.status = "success"
            state.isLoadding = false
            state.data = action.payload
            state.msg = " "
            state.cardApi = action.payload.data.data.slice(2,10)
            state.matchStatus = action.payload.data.data.filter((mData) => {
                  if(mData.live === false){
                    return mData;
                  }
              }).slice(2,10)
            state.upcomingStatus = action.payload.data.data.filter((ucData) => {
                  if(ucData.status == "Aban."){
                    return ucData;
                  }
              }).slice(2,30)
        })

    }
})

export default landingPageSlice.reducer