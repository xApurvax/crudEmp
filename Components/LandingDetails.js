import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import DetailsBar from "./DetailsBar"
import Pagination from "./Pagination"
import SideBar from "./SideBar" 
import CardPulse from './CardPulse'
import Nocars from './Nocars'
// import { useSelector } from 'react-redux'

const LandingDetails = ({props}) => {

 const { make ,model ,bodyType,exteriorColor,interiorColor,driveTrain,allCar,count,transmission,fuelType,features } = useSelector((state) => state.homePageSlice)
 const [carData,setCarData] = useState({
    allCar : props.allCar,
    count : props.count,
    bodyType : props.bodyType,
    exteriorColor : props.exteriorColor,
    interiorColor : props.interiorColor,
    transmission : props.transmission,
    driveTrain : props.driveTrain,
    fuelType : props.fuelType,
    features : props.features,
    make : props.make,
    model : props.model,
 })

 useEffect(() => {
    if(allCar.length>0){
        setCarData({
            allCar : allCar,
            count : count,
            bodyType : bodyType,
            exteriorColor : exteriorColor,
            interiorColor : interiorColor,
            transmission : transmission,
            driveTrain : driveTrain,
            fuelType : fuelType,
            features : features,
            make : make,
            model : model,
        })
    }
   }, [allCar,count])
    // const dispatch = useDispatch(); 
    // const {status ,counts} = useSelector((state) => state.carsDataSlice); 
    // const { make ,model ,bodyType,exteriorColor,interiorColor,driveTrain,transmission,fuelType,features } = useSelector((state) => state.homePageSlice)

        console.log(carData,"object data")
  return (
    <div>
        <div className="bg-[#FAFAFC] px-[60px] py-[36px]">
            <div className="flex flex-col gap-[8px]">
                <div className="flex ">
                    <p className="font-[600] text-[12px] leading-[16px] uppercase text-[#8F90A6]">used car for sale</p>
                </div>
                <div className="flex ">
                    <p className="font-[700] text-[32px] leading-[44px] text-[#28293D]">Showing {carData.count} cars</p>
                </div>
            </div>
            <div className="flex mt-[36px] gap-[24px] ">
                <div className="w-[30%]">
                    <SideBar carData={carData} />
                </div>
                <div className='flex flex-col'>
                    <div className="w-[100%] flex flex-col gap-[24px] min-h-[1550px] ">
                    {carData.allCar.length > 0 ? carData.allCar.map((cars) => {
                        return (
                                <>
                                    <DetailsBar  car={cars} />
                                </>
                        )
                    }) : 
                    <Nocars />}
                    </div>
                    <div className="px-[50px] border-b-[1px] border-solid border-[#E4E4EB] ">
                        <Pagination count={carData.count} />
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
