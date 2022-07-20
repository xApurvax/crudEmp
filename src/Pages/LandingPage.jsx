import React, { useEffect, useState } from 'react'
import Navbar from '../Layouts/Navbar'
import Sliderbar from '../Components/Sliderbar'
import Footer from '../Layouts/Footer'
import axios from "axios";
import { base_url } from './Config'
import { api_token } from './Config'
import { end_url } from './Config'

const LandingPage = () => {

  const [cardApi, setCardApi] = useState(null);
  const [matchStatus , setMatchStatus] = useState([]);

  const fetchData = async() => {
    const {data,status} =  await axios.get(base_url+api_token+"include=localteam,visitorteam,runs,season,league")
    // console.log(data.data.splice(2,10))
    console.log(status)
    if(status === 200){
      setCardApi(data.data.splice(2,10))
    }

    const mStatus = data.data.filter((mData) => {
        if(mData.live === "false"){
          return mData;
        }
    }).splice(2,10)
    setMatchStatus(mStatus);
  };

  
  useEffect(() => {
      // console.log(matchStatus,"finished");
      fetchData();        
  }, [])

  return (
    <div>
        <Navbar />
        <Sliderbar cardDataApi = {cardApi} />
        <Sliderbar matchStatusData = {matchStatus} />
       
        <Footer />
    </div>
  )
}

export default LandingPage