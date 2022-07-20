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

  const fetchData = async() => {
    const {data,status} =  await axios.get(base_url+api_token+"include=localteam,visitorteam,runs,season,league")
    // console.log(data.data.splice(2,10))
    console.log(status)
    if(status === 200){
      setCardApi(data.data.splice(2,10))
    }
  };
  
  useEffect(() => {
      fetchData();        
  }, [])

  return (
    <div>
        <Navbar />
        <Sliderbar cardDataApi = {cardApi} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <Sliderbar cardDataApi = {cardApi} /> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
    </div>
  )
}

export default LandingPage