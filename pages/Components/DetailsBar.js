import Image from "next/image"
import Link from "next/link"
import { FiSend } from 'react-icons/fi';
import { IoMdStar } from 'react-icons/io';
import Router from "next/router";
import defaultCar from "../Images/defaultCar.svg"
import { useSelector , useDispatch } from 'react-redux'
import CardPulse from "./CardPulse";
import Modal from "./Modal";

const DetailsBar = ({car}) => {
    // console.log(car,"car data")
    const {isLoadding} = useSelector((state) => state.homePageSlice)

  return (
        <div>
            {isLoadding ? 
                <CardPulse /> :
            <div onClick={()=>Router.push(`/carid/${car.vin}`)}>
                <div className="bg-[#FFFFFF]  flex flex-col gap-[0px] overflow-hidden rounded-[10px] border-solid border-[1px] border-[#F2F2F5]  shadow-[0px_2px_8px_rgba(40,41,61,0.04),0px_16px_24px_rgba(96,97,112,0.16)]">
                    <div className="flex justify-between  ">
                        <div className="flex">
                            <Image src={car.photos ? car.photos[0] : defaultCar } alt="nav logo" height={254} width={360} />
                        </div>
                        <div className="flex flex-col p-[24px] w-[70%] justify-between">
                            <div className="flex flex-col gap-[4px] ">
                                <div className=" font-[700] text-[20px] text-[#28293D] leading-[32px]">
                                    <p>{car.year} {car.make} {car.model}</p>
                                </div>
                                <div className=" font-[400] text-[12px] text-[#8F90A6] leading-[16px]">
                                    <p>{car.dealership} • {car.milage} Mileage • {car.exterior_color}</p>
                                </div>
                                <div className=" font-[400] text-[12px] text-[#8F90A6] leading-[16px]">
                                    <p>{car.city}, {car.state}</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-[8px] items-center">
                                    <div className="font-[600] text-[28px] text-[#28293D] leading-[38px]">
                                        {/* <p>${car.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,").split(".00")}</p> */}
                                        {/* <p>{new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits : 0,
                                            }).format(car.price)}</p> */}
                                        <p>${car.price.toLocaleString('en-US')}</p>
                                    </div>
                                    <div className="flex items-center italic font-[400] text-[12px]  text-[#FFFFFF] leading-[16px] ">
                                        <p className="bg-[#8F90A6] px-[6.5px]  rounded-full">i</p>
                                    </div>
                                </div>

                                <div className="flex items-center px-[16px] py-[6px] rounded-[10px] shadow-[0px_8px_16px_-6px_rgba(254,110,6,0.46)]  bg-gradient-to-r from-[#FF8800] to-[#E63535]  text-[#FFFFFF] ">
                                    <div className="flex items-center gap-[2px]  ">
                                        <Modal />
                                        <FiSend size={12} className="btn-text-cardShadow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {car.car_offers &&
                    <div className="bg-[#FFF8E6] flex text-[#05A660] px-[24px] py-[16px] flex-col rounded-b-[10px]  border-solid border-b-[1px] border-[#F2F2F5]  ">
                            <div className="flex gap-[4px] items-center">
                                <IoMdStar className="p-[1px] rounded-full border-solid border-[1px] border-[#05A660] "  size={15} />
                                <p className="font-[600] text-[12px]  leading-[20px] uppercase">Special offers</p>
                            </div>
                            <div className="flex gap-[16px] font-[400] text-[14px] leading-[24px] text-[#28293D] "> 
                                <div>
                                    <p>•  {car.car_offers.split(",")[0].replace(/[\[\]'"]/g, '')}</p>
                                </div>  
                                <div>
                                    <p>•  {car.car_offers.split(",")[1].replace(/[\[\]'"]/g, '')}</p>
                                </div>
                            </div>
                    </div>
                    }
                </div>
            </div>
            }
        </div>
  )
}

export default DetailsBar