import { useRouter } from 'next/router'
import React from 'react'
import axios from 'axios'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import SingleDetail from '../Components/SingleDetail'

const CarDetail = ({carByVin}) => {
    const router =useRouter()
    const  {carId} = router.query
  // console.log(carByVin)
  return (
      <div className='max-w-[1520px] mx-auto'>
        {/* <Navbar /> */}
        <SingleDetail carByVin={carByVin[0]}  />
        {/* <Footer /> */}
    </div>
  )
}

export default CarDetail

export async function getServerSideProps(context){
  const {carId} = context.params;
  // console.log(carId);
  const response = await axios.get(`https://autodigg.com/ad-api/cars/list?vin=${carId}`)
  const carByVin = await response.data

  return {
    props:{
      carByVin : carByVin,
    },
  } 
}