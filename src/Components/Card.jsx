import React, { useEffect, useState } from "react";
import {Link } from 'react-router-dom'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { AiFillPlayCircle } from "react-icons/ai";
import SlideLoader from "./SlideLoader";


const Card = ({matches}) => { 

  const [dummyDealy , setDummyDelay] = useState()

    const [localScore]  = matches.runs.filter((data)=>{
      if(data.team_id === matches.localteam.id){
          return data;
      }
    })
    
    const [visitorScore]  = matches.runs.filter((data)=>{
      if(data.team_id === matches.visitorteam.id){
          return data;
      }
    })

    useEffect(() => {
   setTimeout(() => {
    setDummyDelay(matches)
   }, 1000);
    }, )
    
  // console.log(localScore,"local");
  return (<>
   {dummyDealy ? 
      (
      <div className="">
      <Link to={`/match-event/${matches?.id}`}>
        <section className="group w-[328px] relative ">
          <div className="relative ">
            <img
              className="rounded-t-xl "
              src="https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMi8wNy9JbmRpYS10b3VyLW9mLUVuZ2xhbmRfT0RJXzAyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsImhlaWdodCI6MTAwLCJ3aWR0aCI6MzI4LCJwb3NpdGlvbiI6InRvcCJ9fX0="
              alt="Results"
            />
            <div className="h-[100px] bg-gradient-to-t from-[#000000e6] to-[#00000000] absolute top-0 left-0 right-0 ">
            </div>
            <div className="text-center h-[39px] text-[10px] leading-[1.6] tracking-[1.4px] text-[#FAFAFA]  absolute top-[60px] left-0 right-0 ">
              <p>{matches?.round} {matches?.league.name}, {matches?.season.name}</p>
            </div>
          </div>

          <div className="flex flex-col rounded-b-xl border-[1px] border-solid border-[#E6E6E6] bg-white overflow-hidden z-5">
            <div className=" text-center absolute top-[82px] left-0 right-0 ">
              <button className={`shadow shadow-black-500/40 ${matches?.live && matches?.status !== "Aban."  ? "bg-[#ff5000] text-[#FAFAFA]"  : "bg-white text-[#ff5000]" } rounded-[30px] px-[10px] py-[6px] font-[600] text-[14px] uppercase tracking-[1.4px] leading-[1]} `}>
                  {matches?.live && matches?.status !== "Aban." ? ( <div className="flex gap-[4px] "> <AiFillPlayCircle fill="#FAFAFA" size={20} /><p>Watch Live </p> </div> ) : matches?.status ==="Aban." ?( "Upcoming" ): ("Result" ) }
              </button>
            </div>

            <div className="flex gap-[40px] justify-center items-center mt-[25px] ">
              <div className="flex gap-[10px] ">
                <div className="">
                  <img
                    className="w-[32px] h-[32px]"
                    src={matches?.localteam?.image_path}
                    alt="flag"
                  />
                  <div className="text-[#666666] tracking-[1.4px] text-[10px] font-[100] text-center ">
                    <p>{matches?.localteam?.code}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start ">
                  <div className="font-[600] text-[#666666] text-[14px] ">
                    <p>{localScore?.score}/{localScore?.wickets}</p>
                  </div>
                  <div className="text-[#999999] text-[12px]">
                    <p>{localScore?.overs} overs</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col justify-center items-center">
                  <div className="h-[15px] w-[1px] bg-[#ff5000] "></div>
                  <div className="font-graff font-[700] text-[#ff5000] text-center">
                    {/* p-[3px] rounded-[50%] border-solid border-[1px] border-[#ff5000]  */}
                    <p>V/s</p>
                  </div>
                  <div className="h-[15px] w-[1px] bg-[#ff5000] "></div>
                </div>
              </div>
              <div className="flex flex-row-reverse gap-[10px] ">
                <div className="">
                  <img
                    className="w-[32px] h-[32px]"
                    src={matches?.visitorteam?.image_path}
                    alt="flag"
                  />
                  <div className="text-[#666666] text-[10px] font-[100] tracking-[1.4px] text-center ">
                    <p className="">{matches?.visitorteam?.code}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="font-[600] text-[#666666] text-[14px] ">
                    <p>{visitorScore?.score}/{visitorScore?.wickets}</p>
                  </div>
                  <div className="text-[#999999] text-[12px]">
                    <p>{visitorScore?.overs} overs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[12px] leading-[1.33] tracking-[0.24px] text-center mb-[8px] ">
              <p className="overflow-hidden whitespacing-no-wrap text-overflow-ellipsis truncate">{matches?.note}</p>
            </div>
          </div>

        <div className="flex justify-center invisible relative z-[-1] group-hover:visible group-hover:flex group-hover:justify-center overflow-hidden bg-[#f0f1f4]  w-[328px] rounded-b-xl pt-[20px] pb-[10px] mt-[-10px]   ">
        <div className="flex text-[11px] leading-[1.27] tracking-[0.22px] text-center whitespace-nowrap ">
          <p>More Cricket</p>
          <div>
            <IoIosArrowDroprightCircle
              className="mx-[4px] "
              color="#ff9666"
              size={12}
            />
          </div>
        </div>
        </div>

        </section>
        </Link>
      </div>)
      :
      (<SlideLoader />)
    }
</>)}

export default Card;
