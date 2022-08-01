import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { api_token,base_url,end_url } from '../Pages/Config'
import axios from "axios";

const initialState =  {
    scoreApi : null,
    localScore : [],
    visitorScore : [],
    localTeamBatting : [],
    visitorTeamBatting : [],
    localTeamBowling : [],
    visitorTeamBowling : [],
    viExtras : [],
    loExtras : [],
    lineUpLocal : [],
    lineUpVisitor : [],
    dNBLocal : [],
    dNBVisitor : [],
    status : "IDLE",
    isLoadding : false,
    msg: ""
}

export const fetchscore = createAsyncThunk(
    "fetchfixters/scoreapi", (id) => {
        const response = axios.get(base_url+"/"+id+api_token+end_url);
        return response;
    }
)

const scoreBoardPage = createSlice({   
    name : "matchApi",
    initialState,
    reducers : {
      cleanData : (state) => {
        state.scoreApi = null;
        state.localScore = []; 
        state.visitorScore = [];
        state.localTeamBatting = [];
        state.visitorTeamBatting = [];
        state.localTeamBowling = [];
        state.visitorTeamBowling = [];
        state.viExtras = [];
        state.loExtras = [];
        state.lineUpLocal = [];
        state.lineUpVisitor = [];
        state.dNBLocal = [];
        state.dNBVisitor = [];
      },
    },
    extraReducers(builder)  {
        builder.addCase(fetchscore.pending, (state,action) => {
            state.status = "pending"
            state.isLoadding = true
            state.msg = " "
        })
        builder.addCase(fetchscore.rejected, (state,action) => {
            state.status = "rejected"
            state.isLoadding = false
            state.msg= "Something Went Wrong!!!"
        })
        builder.addCase(fetchscore.fulfilled, (state,action) => {
            state.status = "success"
            state.isLoadding = false
            state.data = action.payload
            state.msg = " "
            state.scoreApi = action.payload.data.data
            state.localScore = action.payload.data.data.runs.filter((Score) => { 
                if (action.payload.data.data.localteam_id === Score.team_id)
                 {
                   return Score 
                } 
              })[0]
            state.visitorScore = action.payload.data.data.runs.filter((Score) => { 
                if (action.payload.data.data.visitorteam_id === Score.team_id)
                 {
                   return Score 
                } 
              })[0]
            state.localTeamBatting = action.payload.data.data.batting.filter((bat) => { 
                if (action.payload.data.data.localteam.id === bat.team_id)
                 {
                   return bat 
                } 
              })
            state.visitorTeamBatting = action.payload.data.data.batting.filter((bat) => { 
                if (action.payload.data.data.visitorteam.id === bat.team_id)
                 {
                   return bat 
                } 
              })
            state.localTeamBowling = action.payload.data.data.bowling.filter((ball) => { 
                if (action.payload.data.data.localteam.id === ball.team_id)
                 {
                   return ball 
                } 
              })
            state.visitorTeamBowling = action.payload.data.data.bowling.filter((ball) => { 
                if (action.payload.data.data.visitorteam.id === ball.team_id)
                 {
                   return ball 
                } 
              })
            state.loExtras= action.payload.data.data.scoreboards.filter((ext) => { 
                if (action.payload.data.data.localteam.id === ext?.team_id  && ext.type == "extra" )
                 {
                   return ext 
                } 
              })[0]
            state.viExtras = action.payload.data.data.scoreboards.filter((ext) => { 
                if (action.payload.data.data.visitorteam.id === ext.team_id  && ext.type == "extra" )
                 {
                   return ext 
                } 
              })[0]
            state.lineUpLocal = action.payload.data.data.lineup.filter((lineUp) => { 
                if (action.payload.data.data.localteam.id === lineUp.lineup.team_id )
                { 
                    return lineUp 
                } 
              })
            state.lineUpVisitor = action.payload.data.data.lineup.filter((lineUp) => { 
                if (action.payload.data.data.visitorteam.id === lineUp.lineup.team_id )
                 {
                   return lineUp 
                } 
              })
            state.dNBLocal = action.payload.data.data.lineup.filter((batsman)=> {
            if(action.payload.data.data?.localteam.id === batsman.lineup.team_id)
                            {return state.localTeamBatting.every((notbated)=> 
                                    notbated.batsman.id !== batsman.id
                                    )
                }})
            state.dNBVisitor = action.payload.data.data.lineup.filter((batsman)=> {
                if(action.payload.data.data.visitorteam.id === batsman.lineup.team_id)
                              {return state.visitorTeamBatting.every((notbated)=> 
                                      notbated.batsman.id !== batsman.id
                                      )
                }})
            
        })
    }
})

export const {cleanData} = scoreBoardPage.actions
export default scoreBoardPage.reducer