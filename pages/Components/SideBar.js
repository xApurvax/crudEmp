import React, { useState, useRef ,useEffect } from 'react'
import { FiSend } from 'react-icons/fi';
import { FaAngleDown } from 'react-icons/fa';
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import DetailsDropDown from './DetailsDropDown';
import MultipleSelectDropDown from './MultipleSelectDropDown';
import ModelShowMore from './ModelShowMore';
import DualRangeSel from './DualRangeSel';

const SideBar = () => {
  
  const [dRange ,setDRange] = useState([0, 1000000]);
  const [yRange ,setYRange] = useState([1990,2021]);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const [dropDown, setDropDown] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropDown(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <div>
        <section className="bg-[#FFFFFF] w-[312px] rounded-[10px] border-solid border-[1px] border-[#F2F2F5] ">
          <section className="">
              <section className="flex flex-col gap-[8px] p-[16px]  ">
                <p className=" font-[700] text-[16px] leading-[24px] text-[#28293D] uppercase">Filter by</p>
                <span className="bg-gradient-to-r from-[#FF8800] to-[#E63535] min-h-[5px] max-w-[26px] rounded-xl "></span>
              </section>
              <section className="flex flex-col gap-[14px] mt-[24px] p-[16px] ">
                <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">car type</p>
                <div className="flex gap-[26px] ">
                  <div className="flex gap-[10px]">
                    <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px] " />
                    <label className="font-[500] text-[14px] leading-[20px] text-[#28293D] ">New</label>
                  </div>
                  <div className="flex gap-[10px]">
                    <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                    <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">Used</label>
                  </div>
                </div>
              </section>
              <section className="rounded-[10px] border-[1px] border-solid bg-[#E4E4EB] mx-[16px] "></section>
              <section className="flex flex-col gap-[20px] mt-[16px] p-[16px] ">
                <div className="flex flex-col gap-[8px]">
                  <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">your zip</p>
                  <div className="flex items-center justify-between border-[1px] border-solid border-[#E4E4EB] rounded-[10px] px-[16px] py-[14px] ">
                      <input type="search" className="outline-none placeholder-hidden" /><FiSend size={15} className="btn-text-cardShadow text-[#FF6B00]" />
                  </div>
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex items-center justify-between'>
                        <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">search within</p>  
                        <p className=" font-[600] text-[16px] leading-[24px] text-[#28293D] ">100 miles</p>
                    </div>
                    <div className='flex flex-col gap-[10px] '>
                      <input type="range" min="20" max="500" steps="10" className="slider w-full max-h-[6px]" id="myRange" />
                      <div className='flex justify-between  font-[500] text-[12px] leading-[16px] text-[#28293D]'>
                      <div className="value left">20 miles</div>
                      <div className="value right">500 miles</div>
                      </div>
                    </div>
                </div>
              </section>
              <section className="rounded-[10px] border-[1px] border-solid bg-[#E4E4EB] mx-[16px]  "></section>
              {/* <section className=' flex flex-col pt-[16px] '>
                    <div className='flex items-center justify-between'>
                        <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">Make</p>  
                    </div>
                    <div className=" pt-[8px] relative inline-block group" ref={wrapperRef} >
                      <button  onClick={() => setDropDown(!dropDown)} className={`${dropDown ? " border-[#FF6B00] ": "border-[#E4E4EB]  " } bg-[#FFFFFF] text-[#28293D] w-full px-[16px] py-[14px] cursor-pointer text-[16px] border-[1px] border-solid rounded-[10px]  `}>
                        <div className='flex justify-between items-center' >
                          <p className=' font-[600] text-[14px] leading-[20px] text-[#28293D]'>Acura</p>
                          <FaAngleDown className={` ${dropDown ?  "rotate-180 fill-[#ff5000] ": "rotate-0 " } transition-all ease-in-out duration-200`} />
                        </div>
                      </button>
                      <div className={` ${dropDown ? " max-h-[180px] overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll ": "max-h-[0px] " } w-full absolute right-0 bg-[#f9f9f9] min-w-[160px] z-1 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)] group-hover:block rounded-[8px] overflow-hidden `} >
                        <a href="#" className='text-[#28293D] px-[10px] py-[8px] block no-underline hover:bg-[#f1f1f1] '>Link 1</a>
                        <a href="#" className='text-[#28293D] px-[10px] py-[6px] block no-underline hover:bg-[#f1f1f1] '>Link 2</a>
                        <a href="#" className='text-[#28293D] px-[10px] py-[6px] block no-underline hover:bg-[#f1f1f1] '>Link 3</a>
                        <a href="#" className='text-[#28293D] px-[10px] py-[6px] block no-underline hover:bg-[#f1f1f1] '>Link 3</a>
                        <a href="#" className='text-[#28293D] px-[10px] py-[6px] block no-underline hover:bg-[#f1f1f1] '>Link 3</a>
                        <a href="#" className='text-[#28293D] px-[10px] py-[6px] block no-underline hover:bg-[#f1f1f1] '>Link 3</a>
                        <a href="#" className='text-[#28293D] px-[10px] py-[6px] block no-underline hover:bg-[#f1f1f1] '>Link 3</a>
                        <a href="#" className='text-[#28293D] px-[10px] py-[6px] block no-underline hover:bg-[#f1f1f1] '>Link 3</a>
                        <a href="#" className='text-[#28293D] px-[10px] py-[6px] block no-underline hover:bg-[#f1f1f1] '>Link 3</a>
                        <a href="#" className='text-[#28293D] px-[10px] py-[6px] block no-underline hover:bg-[#f1f1f1] '>Link 3</a>
                        <a href="#" className='text-[#28293D] px-[10px] py-[6px] block no-underline hover:bg-[#f1f1f1] '>Link 3</a>
                        <a href="#" className='text-[#28293D] px-[10px] py-[6px] block no-underline hover:bg-[#f1f1f1] '>Link 3</a>
                      </div>
                  </div>
              </section> */}
              <section className='mt-[10px] p-[16px]'>
                {/* <DropDown /> */}
                <MultipleSelectDropDown />
              </section>
              <section className="flex flex-col gap-[20px] p-[16px] ">
                <div className="flex flex-col gap-[8px]">
                  <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">model</p>
                </div>
                {/* <div className="flex flex-col gap-[21px] ">
                  <div className="flex gap-[10px]">
                    <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px] " />
                    <label className="font-[500] text-[14px] leading-[20px] text-[#28293D] ">3</label>
                  </div>
                  <div className="flex gap-[10px]">
                    <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                    <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">200</label>
                  </div>
                  <div className="flex gap-[10px]">
                    <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                    <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">300</label>
                  </div>
                  <div className="flex gap-[10px]">
                    <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                    <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">500</label>
                  </div>
                  <div className="flex gap-[10px]">
                    <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                    <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">1500</label>
                  </div>
                  <div className="flex gap-[10px]">
                    <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                    <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">2500</label>
                  </div>
                </div> */}
                <ModelShowMore />
              </section>
              <section className="rounded-[10px] border-[1px] border-solid bg-[#E4E4EB] mx-[16px]"></section>
              <section className="flex flex-col gap-[20px] p-[16px]">
                <div className="flex flex-col gap-[8px]">
                  <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">Body type</p>
                </div>
                <div className="flex flex-col gap-[26px] ">
                  <div className="flex gap-[10px]">
                    <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px] " />
                    <label className="font-[500] text-[14px] leading-[20px] text-[#28293D] ">Sedan (12)</label>
                  </div>
                  <div className="flex gap-[10px]">
                    <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                    <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">SUV (32)</label>
                  </div>
                </div>
              </section>
              <section className="rounded-[10px] border-[1px] border-solid bg-[#E4E4EB] mx-[16px]"></section>
              <section className="flex flex-col gap-[20px] p-[16px]">
                <div className="flex justify-between items-center">
                  <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">Price</p>
                  <p className='font-[600] text-[16px] leading-[24px] text-[#28293D]'> ${dRange[0]} - ${dRange[dRange.length-1]}</p>
                </div>
                <div>
                  <DualRangeSel setRange={setDRange} defaultValue={[0,1000000]} min={0} max={100000} step={1000} />
                </div>
                <div className="flex justify-between">
                  <p className='font-[500] text-[12px] leading-[16px] text-[#28293D]'>$0</p>
                  <p className='font-[500] text-[12px] leading-[16px] text-[#28293D]'>$100,000</p>
                </div>
              </section>
              <section className="rounded-[10px] border-[1px] border-solid bg-[#E4E4EB] mx-[16px]  "></section>
              <section className="flex flex-col gap-[20px] p-[16px]">
                <div className="flex justify-between items-center">
                  <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">Make Year</p>
                  <p className='font-[600] text-[16px] leading-[24px] text-[#28293D]'> {yRange[0]} - {yRange[yRange.length-1]}</p>
                </div>
                <div>
                  <DualRangeSel setRange={setYRange} defaultValue={[1995,2000]} min={1990} max={2021} step={1} />
                </div>
                <div className="flex justify-between">
                  <p className='font-[500] text-[12px] leading-[16px] text-[#28293D]'>1990</p>
                  <p className='font-[500] text-[12px] leading-[16px] text-[#28293D]'>2021</p>
                </div>
              </section>
              <section className=' flex flex-col'>
                <section className=' '>
                    <DetailsDropDown dropDownTitle="Style" />
                </section>
                <section className=' '>
                    <DetailsDropDown dropDownTitle="Performance" />
                </section>
                <section className=' '>
                    <DetailsDropDown dropDownTitle="Features" />
                </section>
                <section className=' '>
                    <DetailsDropDown dropDownTitle="Ratings" />
                </section>
              </section>
          </section>
        </section>
    </div>
  )
}

export default SideBar