import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import DetailsBar from "./DetailsBar"
import Pagination from "./Pagination"
import SideBar from "./SideBar" 
import HomePageSlice from "../Redux-store/homePageSlice"
import CardPulse from './CardPulse'
import Nocars from './Nocars'

const LandingDetails = () => {

    const dispatch = useDispatch(); 
    // const {status ,counts} = useSelector((state) => state.carsDataSlice); 
    const { allCar , count , make ,model ,bodyType,exteriorColor,interiorColor,driveTrain,transmission,fuelType,features } = useSelector((state) => state.homePageSlice)

  return (
    <div>
        <div className="bg-[#FAFAFC] px-[60px] py-[36px]">
            <div className="flex flex-col gap-[8px]">
                <div className="flex ">
                    <p className="font-[600] text-[12px] leading-[16px] uppercase text-[#8F90A6]">used car for sale</p>
                </div>
                <div className="flex ">
                    <p className="font-[700] text-[32px] leading-[44px] text-[#28293D]">Showing {count} cars</p>
                </div>
            </div>
            <div className="flex mt-[36px] gap-[24px] ">
                <div className="w-[30%]">
                    <SideBar carMake={make} carModel={model} carType={bodyType} carStyle={bodyType} carEcolur={exteriorColor} carIcolur={interiorColor} carTrans={transmission} carDrive={driveTrain} carFuel={fuelType} carFeature={features} />
                </div>
                <div className='flex flex-col'>
                    <div className="w-[100%] flex flex-col gap-[24px] min-h-[1550px] ">
                    {allCar.length > 0 ? allCar.map((cars) => {
                        return (
                                <>
                                    <DetailsBar  car={cars} />
                                </>
                        )
                    }) : 
                    <Nocars />}
                    </div>
                    <div className="px-[50px] border-b-[1px] border-solid border-[#E4E4EB] ">
                        <Pagination />
                    </div>
                    <div className=" py-[36px] ">
                        <div>
                            <p className='font-[700] text-[28px] leading-[38px] text-[#28293D] text-center'>Why Autodigg?</p>
                        </div>
                        <div className='pt-[12px] '> 
                            <p className='font-[600] text-[14px] leading-[28px] text-[#8F90A6] text-center'>Autodigg is a platform where consumers can invite local Austin Used Car Dealers to compete for your business Anonymously. We pledge never to share your contact information with car dealers, so you do not have to worry about receiving spammy phone calls or emails. Car buyers can now enjoy our hassle-free car buying experience at the comfort of your home. Here is how it works: Select your next car, get Anonymous, and invite local Used Car Dealers to provide you with a personalized offer at the best price. Now buy a car 100% online, including Car Insurance and Car Financing, while you get great deals on a Used Car for sale from local Austin Car Dealers.</p>
                        </div>
                    </div>
                    {/* <div>
                        <CardPulse />
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingDetails
