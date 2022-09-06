import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {HYDRATE} from "next-redux-wrapper"

const initialState =  {
    isSuccess: false,
    isLoadding : false,
    msg: "",
    allCar: [],
    count : 0,
    make : null,
    model : null,
    bodyType : null,
    exteriorColor :null,
    interiorColor : null,
    transmission : null,
    driveTrain : null,
    fuelType : null,
    features : null,
    page : "1",
    carByType: ["Used Car","New Car"],
    carByRadius : 100,
    carByMake : [],
    carByModel : [],
    carByBody : [],
    priceRange : [0, 1000000],
    yearRange : [2011, 2021],
    carByExtColor : [],
    carByIntColor : [],
    carByBodyStyle : [],
    carByTransmission : [],
    carByDriveTrain : [],
    carByFuelType : [],
    carByFeatures : [],
}

export const fetchPage =createAsyncThunk("page/fetch" ,
    async (page,{getState}) => {
        const allState = getState().homePageSlice
        // console.log(allState,"qlll")
        const pageRes = `https://autodigg.com/ad-api/cars/list?usedCar=false&body_type=${allState.carByBody}&model=${allState.carByModel}&car_type=${allState.carByType},Certified+pre-owned&make=${allState.carByMake}&page=${allState.page}&radius=${allState.carByRadius}&newCar=false&price_from=${allState.priceRange[0]}&price_to=${allState.priceRange[allState.priceRange.length-1]}&year_from=${allState.yearRange[0]}&year_to=${allState.yearRange[allState.yearRange.length-1]}&interior_color=${allState.carByIntColor}&exterior_color=${allState.carByExtColor}&fuel_type=${allState.carByFuelType}&transmission=${allState.carByTransmission}&drivetrain=${allState.carByDriveTrain}&features=${allState.carByFeatures}`;
        const carCountRes = `https://autodigg.com/ad-api/cars/list?usedCar=false&body_type=${allState.carByBody}&model=${allState.carByModel}&car_type=${allState.carByType},Certified+pre-owned&make=${allState.carByMake}&page=${allState.page}&radius=${allState.carByRadius}&newCar=false&price_from=${allState.priceRange[0]}&price_to=${allState.priceRange[allState.priceRange.length-1]}&year_from=${allState.yearRange[0]}&year_to=${allState.yearRange[allState.yearRange.length-1]}&interior_color=${allState.carByIntColor}&exterior_color=${allState.carByExtColor}&fuel_type=${allState.carByFuelType}&transmission=${allState.carByTransmission}&drivetrain=${allState.carByDriveTrain}&features=${allState.carByFeatures}&return=count`;
        const carModelbyMake = ` https://autodigg.com/ad-api/cars/list?make=${allState.carByMake}&return=model`
        const carBodyTypeRes = `https://autodigg.com/ad-api/cars/list?make=${allState.carByMake}&price_from=${allState.priceRange[0]}&price_to=${allState.priceRange[allState.priceRange.length-1]}&year_from=${allState.yearRange[0]}&year_to=${allState.yearRange[allState.yearRange.length-1]}&return=body_type`;
        const carExtColourRes = `https://autodigg.com/ad-api/cars/list?make=${allState.carByMake}&price_from=${allState.priceRange[0]}&price_to=${allState.priceRange[allState.priceRange.length-1]}&year_from=${allState.yearRange[0]}&year_to=${allState.yearRange[allState.yearRange.length-1]}&return=exterior_color`;
        const carIntClolrRes = `https://autodigg.com/ad-api/cars/list?make=${allState.carByMake}&price_from=${allState.priceRange[0]}&price_to=${allState.priceRange[allState.priceRange.length-1]}&year_from=${allState.yearRange[0]}&year_to=${allState.yearRange[allState.yearRange.length-1]}&return=interior_color`;
        const carTransRes = `https://autodigg.com/ad-api/cars/list?make=${allState.carByMake}&price_from=${allState.priceRange[0]}&price_to=${allState.priceRange[allState.priceRange.length-1]}&year_from=${allState.yearRange[0]}&year_to=${allState.yearRange[allState.yearRange.length-1]}&return=transmission`;
        const carDriveTrainRes = `https://autodigg.com/ad-api/cars/list?make=${allState.carByMake}&price_from=${allState.priceRange[0]}&price_to=${allState.priceRange[allState.priceRange.length-1]}&year_from=${allState.yearRange[0]}&year_to=${allState.yearRange[allState.yearRange.length-1]}&return=drivetrain`;
        const carFuelTypeRes = `https://autodigg.com/ad-api/cars/list?make=${allState.carByMake}&price_from=${allState.priceRange[0]}&price_to=${allState.priceRange[allState.priceRange.length-1]}&year_from=${allState.yearRange[0]}&year_to=${allState.yearRange[allState.yearRange.length-1]}&return=fuel_type`;
        const carFeaturesRes = `https://autodigg.com/ad-api/cars/list?make=${allState.carByMake}&price_from=${allState.priceRange[0]}&price_to=${allState.priceRange[allState.priceRange.length-1]}&year_from=${allState.yearRange[0]}&year_to=${allState.yearRange[allState.yearRange.length-1]}&return=features`;
        const allData = await axios.all([
            axios.get(pageRes),
            axios.get(carCountRes),
            axios.get(carModelbyMake),
            axios.get(carBodyTypeRes),
            axios.get(carExtColourRes),
            axios.get(carIntClolrRes),
            axios.get(carTransRes),
            axios.get(carDriveTrainRes),
            axios.get(carFuelTypeRes),
            axios.get(carFeaturesRes),
        ])
        // console.log(allData)
        return allData;
})

const homePageSlice = createSlice({
    name : "homePage",
    initialState,
    reducers : {
        
        pageValue :(state, action) =>{
            state.page = action.payload
        },
        getAllCar : (state, action) =>{
            state.allCar = action.payload
        },
        getCarCount : (state, action) =>{
            state.count = action.payload
        },
        getMake : (state, action) =>{
            state.make = action.payload
        },
        getModel : (state, action) =>{
            state.model = action.payload
        },
        getBodyType : (state, action) =>{
            state.bodyType = action.payload
        },
        getExtColor : (state, action) =>{
            state.exteriorColor = action.payload
        },
        getIntColor : (state, action) =>{
            state.interiorColor = action.payload
        },
        getTransmission : (state, action) =>{
            state.transmission = action.payload
        },
        getDriveTrain : (state, action) =>{
            state.driveTrain = action.payload
        },
        getFuelType : (state, action) =>{
            state.fuelType = action.payload
        },
        getFeatures : (state, action) =>{
            state.features = action.payload
        },
        getCarByType : (state, action) =>{
            state.carByType = action.payload
        },
        getCarByRadius : (state, action) =>{
            state.carByRadius = action.payload
        },
        setCarByMake : (state, action) =>{
            state.carByMake = action.payload
        },
        setCarByModel : (state, action) =>{
            state.carByModel = action.payload
        },
        setCarByBody : (state, action) =>{
            state.carByBody = action.payload
        },
        setCarByPrice : (state, action) =>{
            state.priceRange = action.payload
        },
        setCarByYear : (state, action) =>{
            state.yearRange = action.payload
        },
        setCarByExtColor : (state, action) =>{
            state.carByExtColor = action.payload
        },
        setCarByIntColor : (state, action) =>{
            state.carByIntColor = action.payload
        },
        setCarByBodyStyle : (state, action) =>{
            state.carByBodyStyle = action.payload
        },
        setCarByTransmission : (state, action) =>{
            state.carByTransmission = action.payload
        },
        setCarByDriveTrain : (state, action) =>{
            state.carByDriveTrain = action.payload
        },
        setCarByFuelType: (state, action) =>{
            state.carByFuelType = action.payload
        },
        setCarByFeatures : (state, action) =>{
            state.carByFeatures  = action.payload
        },
    },
    extraReducers :{
        [HYDRATE] : (state,action) => {
            state.allCar = action.payload.homePageSlice.allCar
            // return {...state, ...action.payload.homePageSlice.allCar};
            state.count = action.payload.homePageSlice.count
            state.make = action.payload.homePageSlice.make
            state.bodyType = action.payload.homePageSlice.bodyType
            state.model = action.payload.homePageSlice.model
            state.exteriorColor = action.payload.homePageSlice.exteriorColor
            state.interiorColor = action.payload.homePageSlice.interiorColor
            state.driveTrain = action.payload.homePageSlice.driveTrain
            state.transmission = action.payload.homePageSlice.transmission
            state.fuelType = action.payload.homePageSlice.fuelType
            state.features = action.payload.homePageSlice.features
            state.carByType = action.payload.homePageSlice.carByType
            state.carByRadius = action.payload.homePageSlice.carByRadius
            state.carByMake = action.payload.homePageSlice.carByMake
            state.carByModel = action.payload.homePageSlice.carByModel
            state.carByBody = action.payload.homePageSlice.carByBody
            state.priceRange = action.payload.homePageSlice.priceRange
            state.yearRange = action.payload.homePageSlice.yearRange
        },
        [fetchPage.pending] : (state,action) => {
            state.isLoadding = true
        },
        [fetchPage.fulfilled] : (state,action) => {
            state.isLoadding = false
            state.allCar = action.payload[0].data;
            state.count = action.payload[1].data.count;
            state.model = action.payload[2].data;
            state.bodyType = action.payload[3].data;
            state.exteriorColor = action.payload[4].data;
            state.interiorColor = action.payload[5].data;
            state.transmission = action.payload[6].data;
            state.driveTrain = action.payload[7].data;
            state.fuelType = action.payload[8].data;
            state.features = action.payload[9].data;
            // console.log(action.payload,"hello")
        },
        [fetchPage.rejected] : (state,action) => {
            state.isLoadding = false
        },
    },
})

   
export const {pageValue,getAllCar,getCarCount,setCarByYear,setCarByPrice,setCarByMake,setCarByModel,setCarByBody,getMake,getModel,getBodyType,getExtColor,getIntColor,getTransmission,getDriveTrain,getFuelType,getFeatures,getCarByType,getCarByRadius,setCarByExtColor,setCarByIntColor,setCarByBodyStyle,setCarByTransmission,setCarByDriveTrain,setCarByFuelType,setCarByFeatures} = homePageSlice.actions;
export default homePageSlice.reducer