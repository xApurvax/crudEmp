import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import Navbar from '../Layouts/Navbar'
import Sliderbar from '../Components/Sliderbar'
import Footer from '../Layouts/Footer'
import axios from "axios";
import { base_url } from './Config'
import { api_token } from './Config'
import { end_url } from './Config'
import StatusSlidebar from '../Components/StatusSlidebar';

const LandingPage = () => {

  let {id} = useParams();
  // console.log(id,"match id");

  const [cardApi, setCardApi] = useState(null);
  const [matchStatus , setMatchStatus] = useState([]);
  const [upcomingStatus ,setUpcomingStatus] = useState([]);

  const fetchData = async() => {
    const {data,status} =  await axios.get(base_url+api_token+"include=localteam,visitorteam,runs,season,league")
    // console.log(data.data.splice(2,10))
    console.log(status)
    if(status === 200){
      setCardApi(data.data.splice(2,10))
    }

    const mStatus = data.data.filter((mData) => {
      // debugger;
        if(mData.live === false){
          return mData;
        }
    }).slice(2,10)
    // if(data.status === 200){
    setMatchStatus(mStatus);
    // }
    const ucStatus = data.data.filter((ucData) => {
      // debugger;
        if(ucData.status == "Aban."){
          return ucData;
        }
    }).slice(2,30)
    // if(data.status === 200){
      setUpcomingStatus(ucStatus);
  };
  
  
  
  useEffect(() => {
    console.log(matchStatus,"finished");
      fetchData();        
  }, [])

  return (
    <div>
        <Navbar />
        <Sliderbar cardDataApi = {cardApi} />
        <StatusSlidebar title ="Finished Match" matchStatusData = {matchStatus} />
        <StatusSlidebar title ="Upcoming Match" matchStatusData = {upcomingStatus} />
        <Footer />
    </div>
  )
}

export default LandingPage