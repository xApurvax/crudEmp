import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux/es/exports'
import { fetchfixters } from '../store/landingPageSlice';
import {useParams } from 'react-router-dom'
import Navbar from '../Layouts/Navbar'
import Sliderbar from '../Components/Sliderbar'
import Footer from '../Layouts/Footer'
import StatusSlidebar from '../Components/StatusSlidebar';
import { GiAmericanFootballHelmet } from 'react-icons/gi';

const LandingPage = () => {

  let {id} = useParams();
  // console.log(id,"match id");
    const dispatch = useDispatch();
    const {status ,cardApi ,matchStatus ,upcomingStatus} = useSelector((state) => state.landingPageSlice);

  console.log(cardApi);
  useEffect(() => {
    status=="IDLE" &&
        dispatch(fetchfixters());     
  }, [])

  return (
    <div>
        <Navbar />
        {cardApi ? (
          <>
        <Sliderbar cardDataApi = {cardApi} />
        <StatusSlidebar title ="Finished Match" matchStatusData = {matchStatus} />
        <StatusSlidebar title ="Upcoming Match" matchStatusData = {upcomingStatus} />
        </>) :
        (<div className='flex min-h-[650px] justify-center items-center animate-pulse '> 
        {/* (<div className='flex min-h-[700px] justify-center items-center animate-bounce bg-[#f6f6f6] '>  */}
                    <GiAmericanFootballHelmet  size={200} fill="#ff5000" />
                    {/* <img alt="ball" className='h-[100px] w-[100px] ' src="https://png.pngitem.com/pimgs/s/133-1332495_transparent-red-ball-png-transparent-background-cricket-ball.png"/> */}
        </div> )}
        <Footer />
    </div>
  )
}

export default LandingPage