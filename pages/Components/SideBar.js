import React, { useState, useRef ,useEffect } from 'react'
import { FiSend } from 'react-icons/fi';
import { FaAngleDown } from 'react-icons/fa';
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import DetailsDropDown from './DetailsDropDown';
import MultipleSelectDropDown from './MultipleSelectDropDown';
import ModelShowMore from './ModelShowMore';
import DualRangeSel from './DualRangeSel';
import SingleRangeSlider from './SingleRangeSlider';
import { useSelector , useDispatch } from 'react-redux'
import {getCarByType,fetchPage,setCarByModel,setCarByBody,setCarByPrice,setCarByYear,setCarByExtColor,setCarByIntColor,setCarByBodyStyle,setCarByTransmission,setCarByDriveTrain,setCarByFuelType,setCarByFeatures} from "../Redux-store/homePageSlice"

const SideBar = ({carMake,carModel,carType,carStyle,carEcolur,carIcolur,carTrans,carDrive,carFuel,carFeature}) => {

  const dispatch = useDispatch();
  const {carByType,carByModel,carByBody,carByRadius,priceRange,yearRange,carByExtColor,carByIntColor,carByBodyStyle,carByTransmission,carByDriveTrain,carByFuelType,carByFeatures} = useSelector((state) => state.homePageSlice)

  function getCarType(e){
    //   if (e.target.checked) {
    //     dispatch(getCarByType([
    //       ...carByType,
    //       e.target.value
    //     ]));
    //   } else {
    //     // remove from list
    //     dispatch(getCarByType(
    //       carByType.filter((types) => types !== e.target.value)
    //     ));
    //     dispatch(fetchPage(carByType))
    //   }
    const array = e.target.checked
    ? [...carByType, e.target.value]
    : carByType.filter((type) => type !== e.target.value);
    // console.log(fetchPage,"xvxvsdv")
    dispatch(getCarByType(array));
    dispatch(fetchPage())
    }

    
    // dispatch(fetchPage());
    // console.log(carType)

  return (
    <div>
        <div className="bg-[#FFFFFF] w-[312px] rounded-[10px] border-solid border-[1px] border-[#F2F2F5] ">
          <div className="">
              <div className="flex flex-col gap-[8px] p-[16px]  ">
                <p className=" font-[700] text-[16px] leading-[24px] text-[#28293D] uppercase">Filter by</p>
                <span className="bg-gradient-to-r from-[#FF8800] to-[#E63535] min-h-[5px] max-w-[26px] rounded-xl "></span>
              </div>
              <div className="flex flex-col gap-[14px] p-[16px] ">
                <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">car type</p>
                <div className="flex gap-[26px] ">
                  <div className="flex gap-[10px]">
                    <input type="checkbox" value={"New Car"} checked={carByType.includes("New Car")} onChange={getCarType} className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px] " />
                    <label className="font-[500] text-[14px] leading-[20px] text-[#28293D] ">New</label>
                  </div>
                  <div className="flex gap-[10px]">
                    <input type="checkbox" value={"Used Car"} checked={carByType.includes("Used Car")} onChange={getCarType} className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                    <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">Used</label>
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] border-[1px] border-solid bg-[#E4E4EB] mx-[16px] "></div>
              <div className="flex flex-col gap-[20px] mt-[16px] p-[16px] ">
                <div className="flex flex-col gap-[8px]">
                  <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">your zip</p>
                  <div className="flex items-center justify-between border-[1px] border-solid border-[#E4E4EB] rounded-[10px] px-[16px] py-[14px] ">
                      <input type="search" className="outline-none placeholder-hidden" /><FiSend size={15} className="btn-text-cardShadow text-[#FF6B00]" />
                  </div>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex items-center justify-between'>
                        <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">search within</p>  
                        <p className=" font-[600] text-[16px] leading-[24px] text-[#28293D] ">{carByRadius} miles</p>
                    </div>
                    <div className='flex flex-col gap-[10px] '>
                      {/* <input type="range" min="20" max="500" steps="10" className="slider w-full max-h-[6px]" id="myRange" /> */}
                      <SingleRangeSlider min={20} max={500} step={10} defaultValue={100} />
                      <div className='flex justify-between  font-[500] text-[12px] leading-[16px] text-[#28293D]'>
                      <div className="value left">20 miles</div>
                      <div className="value right">500 miles</div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="rounded-[10px] border-[1px] border-solid bg-[#E4E4EB] mx-[16px]  "></div>
              <div className='mt-[10px] p-[16px]'>
                <MultipleSelectDropDown carMake={carMake} />
              </div>
              <div className="flex flex-col gap-[20px] p-[16px] ">
                <div className="flex flex-col gap-[8px]">
                  <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">model</p>
                </div>
                <ModelShowMore carModel={carModel} allState={carByModel} setAllState={setCarByModel} />
              </div>
              <div className="rounded-[10px] border-[1px] border-solid bg-[#E4E4EB] mx-[16px]"></div>
              <div className="flex flex-col gap-[20px] p-[16px]">
                <div className="flex flex-col gap-[8px]">
                  <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">Body type</p>
                </div>
                <ModelShowMore carModel={carType} allState={carByBody} setAllState={setCarByBody} />
              </div>
              <div className="rounded-[10px] border-[1px] border-solid bg-[#E4E4EB] mx-[16px]"></div>
              <div className="flex flex-col gap-[20px] p-[16px]">
                <div className="flex justify-between items-center">
                  <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">Price</p>
                  <p className='font-[600] text-[16px] leading-[24px] text-[#28293D]'> ${priceRange[0]} - ${priceRange[priceRange.length-1]}</p>
                </div>
                <div>
                  <DualRangeSel setRange={setCarByPrice} defaultValue={priceRange} min={0} max={100000} step={1000} />
                </div>
                <div className="flex justify-between">
                  <p className='font-[500] text-[12px] leading-[16px] text-[#28293D]'>$0</p>
                  <p className='font-[500] text-[12px] leading-[16px] text-[#28293D]'>$100,000</p>
                </div>
              </div>
              <div className="rounded-[10px] border-[1px] border-solid bg-[#E4E4EB] mx-[16px]  "></div>
              <div className="flex flex-col gap-[20px] p-[16px]">
                <div className="flex justify-between items-center">
                  <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">Make Year</p>
                  <p className='font-[600] text-[16px] leading-[24px] text-[#28293D]'> {yearRange[0]} - {yearRange[yearRange.length-1]}</p>
                </div>
                <div>
                  <DualRangeSel setRange={setCarByYear} defaultValue={yearRange} min={1990} max={2021} step={1} />
                </div>
                <div className="flex justify-between">
                  <p className='font-[500] text-[12px] leading-[16px] text-[#28293D]'>1990</p>
                  <p className='font-[500] text-[12px] leading-[16px] text-[#28293D]'>2021</p>
                </div>
              </div>
              <div className=' flex flex-col py-[10px] '>
                <div className=' '>
                    <DetailsDropDown dropDownTitle="Style" title1="BODY STYLE" state1={carByBodyStyle} setState1={setCarByBodyStyle} data1={carStyle} title2="EXTERIOR COLOR" state2={carByExtColor} setState2={setCarByExtColor} data2={carEcolur} title3="INTERIOR COLOR" state3={carByIntColor} setState3={setCarByIntColor} data3={carIcolur} />
                </div>                                               
                <div className=' '>
                    <DetailsDropDown dropDownTitle="Performance" title1="TRANSMISSION" state1={carByTransmission} setState1={setCarByTransmission} data1={carTrans} title2="DRIVE TRAIN" state2={carByDriveTrain} setState2={setCarByDriveTrain} data2={carDrive} title3="FUEL TYPE" state3={carByFuelType} setState3={setCarByFuelType} data3={carFuel} />
                </div>
                <div className=' '>
                    <DetailsDropDown dropDownTitle="Features"  title1={Object.entries(carFeature)[0] && Object.entries(carFeature)[0][0]} state1={carByFeatures} setState1={setCarByFeatures} data1={Object.entries(carFeature)[0] && Object.entries(carFeature)[0][1]} title2={Object.entries(carFeature)[1] && Object.entries(carFeature)[1][0]} state2={carByFeatures} setState2={setCarByFeatures}  data2={Object.entries(carFeature)[1] && Object.entries(carFeature)[1][1]} title3={Object.entries(carFeature)[2] && Object.entries(carFeature)[2][0]} state3={carByFeatures} setState3={setCarByFeatures} data3={Object.entries(carFeature)[2] && Object.entries(carFeature)[2][1]} title4={Object.entries(carFeature)[3] && Object.entries(carFeature)[3][0]} state4={carByFeatures} setState4={setCarByFeatures} data4={Object.entries(carFeature)[3] && Object.entries(carFeature)[3][1]} title5={Object.entries(carFeature)[4] && Object.entries(carFeature)[4][0]} state5={carByFeatures} setState5={setCarByFeatures}  data5={Object.entries(carFeature)[4] && Object.entries(carFeature)[4][1]}  />
                </div>
                <div className=' '>
                    <DetailsDropDown dropDownTitle="Ratings" />
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default SideBar