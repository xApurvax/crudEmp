import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import DetailsBar from "./DetailsBar"
import Pagination from "./Pagination"
import SideBar from "./SideBar"

const LandingDetails = ({count,allCars,carMake,carModel,carType,carStyle,carEcolur,carIcolur,carTrans,carDrive,carFuel,carFeature}) => {

    // console.log(carModel,"Models")
    const dispatch = useDispatch(); 
    const {status ,counts} = useSelector((state) => state.carsDataSlice);
    console.log(counts)
  return (
    <div>
        <div className="bg-[#FAFAFC] px-[60px] py-[36px]">
            <div className="flex flex-col gap-[8px]">
                <div className="flex ">
                    <p className="font-[600] text-[12px] leading-[16px] uppercase text-[#8F90A6]">used car for sale</p>
                </div>
                <div className="flex ">
                    <p className="font-[700] text-[32px] leading-[44px] text-[#28293D]">Showing {counts} cars</p>
                </div>
            </div>
            <div className="flex mt-[36px] gap-[24px] ">
                <div className="w-[30%]">
                    <SideBar carMake={carMake} carModel={carModel} carType={carType} carStyle={carStyle} carEcolur={carEcolur} carIcolur={carIcolur} carTrans={carTrans} carDrive={carDrive} carFuel={carFuel} carFeature={carFeature} />
                </div>
                <div className='flex flex-col'>
                    <div className="w-[100%] flex flex-col gap-[24px]">
                    {allCars && allCars.map((cars) => {
                        return (
                                <>
                                    <DetailsBar car={cars} />
                                </>
                        )
                    })}
                    </div>
                    <div className="px-[50px] border-b-[1px] border-solid border-[#E4E4EB] ">
                        <Pagination itemsPerPage={4} />
                    </div>
                    <div className=" py-[36px] ">
                        <div>
                            <p className='font-[700] text-[28px] leading-[38px] text-[#28293D] text-center'>Why Autodigg?</p>
                        </div>
                        <div className='pt-[12px] '> 
                            <p className='font-[600] text-[14px] leading-[28px] text-[#8F90A6] text-center'>Autodigg is a platform where consumers can invite local Austin Used Car Dealers to compete for your business Anonymously. We pledge never to share your contact information with car dealers, so you don't have to worry about receiving spammy phone calls or emails. Car buyers can now enjoy our hassle-free car buying experience at the comfort of your home. Here is how it works: Select your next car, get Anonymous, and invite local Used Car Dealers to provide you with a personalized offer at the best price. Now buy a car 100% online, including Car Insurance and Car Financing, while you get great deals on a Used Car for sale from local Austin Car Dealers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingDetails

// export const getStaticProps = async () => {
//     // export async function getStaticProps(){
//   const response = await fetch("https://autodigg.com/ad-api/cars/list?car_type=Used+car%2CNew+car%2CCertified+pre-owned&page=1&radius=100&year=2011%2C2021&return=count")
//   const data = await response.json()

//   return {
//     props:{
//       count : data,
//     },
//   } 
// }