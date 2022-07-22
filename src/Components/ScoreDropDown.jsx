import React, { useState } from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";

const ScoreDropDown = ({score,teamScore,teamCode}) => {

    const [dropDown, setDropDown] = useState(false);


  return (
    <div>
        <section className='flex justify-between w-[672px] px-[18px] py-[15px] bg-[#fafafa] border-b-[1px] border-solid border-[#e6e6e6] '>
                <div className='flex items-center text-[16px] text-[#141414] font-[600] leading-[1.25] tracking-[0.5px] '>
                    <p>{teamCode}</p>
                </div>
                <div className='flex items-center gap-[25px] text-[14px] text-[#141414] font-[600] tracking-[0.25px] '>
                    <p>{teamScore?.score}/{teamScore?.wickets}</p>
                    <div onClick={() => setDropDown(!dropDown)}><IoIosArrowDropdownCircle color="#ffb999" size={24} /></div>
                </div>
        </section>
        <section className={` ${dropDown ? "h-[100%] visible": "h-[0%] invisible" }`}>
                <div className='flex justify-between items-center '>
                    <div className='text-[12px] uppercase leading-[1.57] tracking-[1px]  '>
                        <p>Batsmen</p>
                    </div>
                    <div className='flex gap-[50px] '>
                        <div className='uppercase pr-[10px] '><p>r</p></div>
                        <div className='uppercase pr-[10px]'><p>b</p></div>
                        <div className='pr-[10px]'><p>4s</p></div>
                        <div className='pr-[10px]'><p>6s</p></div>
                        <div className='uppercase pr-[10px]'><p>s/r</p></div>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default ScoreDropDown