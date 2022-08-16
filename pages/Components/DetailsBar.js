import Image from "next/image"
import Link from "next/link"
import carimage from "../Images/carimage.svg"
import { FiSend } from 'react-icons/fi';
import { IoMdStar } from 'react-icons/io';

const DetailsBar = () => {
  return (
    <div>
        <section className="bg-[#FFFFFF]  flex flex-col gap-[0px] overflow-hidden rounded-[10px] border-solid border-[1px] border-[#F2F2F5]  shadow-[0px_2px_8px_rgba(40,41,61,0.04),0px_16px_24px_rgba(96,97,112,0.16)]">
            <section className="flex justify-between  ">
                <section className="flex">
                    <Image src={carimage} alt="nav logo" className="" />
                </section>
                <section className="flex flex-col p-[24px] w-[70%] justify-between">
                    <section className="flex flex-col gap-[4px] ">
                        <div className=" font-[700] text-[20px] text-[#28293D] leading-[32px]">
                            <p>2022 Ford F-250 Super Duty</p>
                        </div>
                        <div className=" font-[400] text-[12px] text-[#8F90A6] leading-[16px]">
                            <p>Covert Buick GMC • 3,518 Mileage • Black</p>
                        </div>
                        <div className=" font-[400] text-[12px] text-[#8F90A6] leading-[16px]">
                            <p>Austin, Texas</p>
                        </div>
                    </section>
                    <section className="flex justify-between">
                        <div className="flex gap-[8px] items-center">
                            <div className="font-[600] text-[28px] text-[#28293D] leading-[38px]">
                                <p>$87,698</p>
                            </div>
                            <div className="flex items-center italic font-[400] text-[12px]  text-[#FFFFFF] leading-[16px] ">
                                <p className="bg-[#8F90A6] px-[6.5px]  rounded-full">i</p>
                            </div>
                        </div>
                        <div className="flex items-center px-[16px] py-[6px] rounded-[10px] shadow-[0px_8px_16px_-6px_rgba(254,110,6,0.46)]  bg-gradient-to-r from-[#FF8800] to-[#E63535]  text-[#FFFFFF] ">
                            <div className="flex items-center gap-[2px]  ">
                                <p className="font-[500] text-[14px] leading-[24px] btn-text-cardShadow">Invite dealer</p>
                                <FiSend size={12} className="btn-text-cardShadow" />
                            </div>
                        </div>
                    </section>
                </section>
            </section>
            <section className="bg-[#FFF8E6] flex text-[#05A660] px-[24px] py-[16px] flex-col rounded-b-[10px]  border-solid border-b-[1px] border-[#F2F2F5]  ">
                    <div className="flex gap-[4px] items-center">
                        <IoMdStar className="p-[1px] rounded-full border-solid border-[1px] border-[#05A660] "  size={15} />
                        <p className="font-[600] text-[12px]  leading-[20px] uppercase">Special offers</p>
                    </div>
                    <div className="flex gap-[16px] font-[400] text-[14px] leading-[24px] text-[#28293D] "> 
                        <div>
                            <p>• 100% credit approval guaranteed</p>
                        </div>  
                        <div>
                            <p>• Complimentary 101pt safety check</p>
                        </div>
                    </div>
            </section>
        </section>
    </div>
  )
}

export default DetailsBar