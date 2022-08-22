import React from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs';

const SingleDetail = () => {
  return (
    <div>
        <section className='px-[60px] py-[40px] flex justify-between'>
            <section className='flex gap-[16px] '>
                <div className='py-[5px] '>
                    <BsArrowLeftCircle size={36} fill="#FF8800" className="shadow-[0px_8px_16px_-6px_rgba(254,110,6,0.46)] rounded-full " />
                </div>
                <div className='flex flex-col gap-[8px] '>
                    <div className='font-[700] text-[32px] leading-[44px] text-[#28293D] '>
                        <p>2022 Ford F-250 Super Duty</p>
                    </div>
                    <div className=" font-[400] text-[12px] text-[#8F90A6] leading-[16px]">
                        <p>Covert Buick GMC • 3,518 Mileage • Black</p>
                    </div>
                    <div className=" font-[400] text-[12px] text-[#8F90A6] leading-[16px]">
                        <p>Austin, Texas</p>
                    </div>
                </div>
            </section>
            <section className='flex'>
                <div className='flex'>
                    <div className="font-[600] text-[28px] text-[#28293D] leading-[38px]">
                        <p>$87,698</p>
                    </div>
                    <div className="flex items-start italic font-[400] text-[12px]  text-[#FFFFFF] leading-[16px] px-[8px] py-[12px] ">
                        <p className="bg-[#8F90A6] px-[6.5px] rounded-full">i</p>
                    </div>
                </div>
                <div>
                    
                </div>
            </section>
        </section>
    </div>
  )
}

export default SingleDetail