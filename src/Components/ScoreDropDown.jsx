import React, { useState } from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";

const ScoreDropDown = ({score,teamScore,teamCode,Batting}) => {

    const [dropDown, setDropDown] = useState(false);

  return (
    <div>
        <section className='flex justify-between w-[672px] px-[18px] py-[15px] bg-[#fafafa] border-b-[1px] border-solid border-[#e6e6e6] '>
                <div className='flex items-center text-[16px] text-[#141414] font-[600] leading-[1.25] tracking-[0.5px] '>
                    <p>{teamCode}</p>
                </div>
                <div className='flex items-center gap-[25px] text-[14px] text-[#141414] font-[600] tracking-[0.25px] '>
                    <p>{teamScore?.score}/{teamScore?.wickets}</p>
                    <div onClick={() => setDropDown(!dropDown)}><IoIosArrowDropdownCircle className={` ${dropDown ?  "rotate-180 duration-200 ": "rotate-0 duration-200" }`} color="#ffb999" size={30} /></div>
                </div>
        </section>
        <section className={` ${dropDown ? " block transition-[100%] ease duration-300": "hidden transition-[0%] ease duration-300" }`}>
                <div className='flex justify-between items-center p-[10px] bg-[#fafafa] rounded-[10px] mt-[20px] mx-[10px] '>
                    <div className='text-[12px] uppercase leading-[1.57] tracking-[1px] text-[#787878] '>
                        <p>Batsmen</p>
                    </div>
                    <table>
                        <tbody >
                            <tr>
                                <td className='min-w-[60px] uppercase text-[12px] text-[#787878] font-[600] '>r</td>
                                <td className='min-w-[60px] uppercase text-[12px] text-[#787878] '>b</td>
                                <td className='min-w-[60px] text-[12px] text-[#787878]'>4s</td>
                                <td className='min-w-[60px] text-[12px]  text-[#787878]'>6s</td>
                                <td className='min-w-[60px] uppercase text-[12px]  text-[#787878] '>s/r</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {Batting?.map((bat) => {
                    return(
                <div className='flex justify-between p-[10px] mx-[10px] border-b-[1px] border-solid border-[#f5f5f5] '>
                    <div className='flex flex-col'>
                        <div className='text-[14px] text-[#0081ff] tracking-[0.25px] '><p>{bat?.batsman?.fullname} {bat?.batsman?.position?.name === "Wicketkeeper" ? ("(wk)") : bat?.batsman?.position?.name === "Captain" ? "(c)":"" }</p></div>
                        <div className='text-[11px] text-[#787878] leading-[2.27] tracking-[0.3px] '><p>{bat?.catch_stump_player_id ? `c ${bat?.firstname.toSubstring(0,1)} ${bat?.lastname}` : "NotOut"}</p></div>
                    </div>
                    <table className='flex'>
                        <tbody >
                            <tr>
                                <td className='min-w-[60px] uppercase text-[14px] text-[#787878] font-[600] '><p>{bat?.score}</p></td>
                                <td className='min-w-[60px] uppercase text-[14px] text-[#787878]  '><p>{bat?.ball}</p></td>
                                <td className='min-w-[60px] text-[14px] text-[#787878] '><p>{bat?.four_x}</p></td>
                                <td className='min-w-[60px] text-[14px] text-[#787878] '><p>{bat?.six_x}</p></td>
                                <td className='min-w-[60px] uppercase text-[14px] text-[#787878]  '><p>{bat?.rate.toFixed(1)}</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )})}
        {/* <p>{score?.batting.length}</p>   */}

        <section className='flex justify-between w-[672px] px-[18px] py-[15px]  border-b-[1px] border-solid border-[#e6e6e6] '>
                <div className='flex items-center text-[14px] text-[#141414] font-[600] leading-[1.25] tracking-[0.5px] '>
                    <p>Extras</p>
                </div>
                <div className='flex items-center gap-[5px] text-[14px] text-[#141414] font-[600] tracking-[0.25px] '>
                    <p>{12}</p>
                <div className='pt-[2.5px] text-[12px] text-[#787878] leading-[1.33] font-[500] tracking-[0.4px]'>
                    <p>(b 0,lb 0,nb 1,w 11,p 0)</p>
                </div>
                </div>
        </section>
        <section className='flex justify-between w-[672px] px-[18px] py-[15px]  border-b-[1px] border-solid border-[#e6e6e6] '>
                <div className='flex items-center text-[14px] text-[#141414] font-[600] tracking-[0.25px] '>
                    <p>Did Not Bat</p>
                </div>
                <div className='flex items-center text-[12px] text-[#787878] leading-[1.27] tracking-[0.3px] text-[#787878] '>
                    <p>Leah Paul,Ava Canning</p>
                </div>
        </section>
        <section className='flex justify-between w-[672px] px-[18px] py-[15px]  border-b-[1px] border-solid border-[#e6e6e6] '>
                <div className='flex items-center text-[18px] text-[#141414] font-[600] leading-[1.25] tracking-[0.5px] '>
                    <p>Total Score</p>
                </div>
                <div className='flex items-center gap-[5px] text-[18px] text-[#141414] font-[600] leading-[1.25] tracking-[0.5px] '>
                    <p>{teamScore?.score}/{teamScore?.wickets}</p>
                <div className='text-[14px] text-[#787878] font-[500] leading-[1.33] tracking-[0.25px]'>
                    <p>({teamScore?.overs} Overs)</p>
                </div>
                </div>
        </section>
        </section>
    </div>
  )
}

export default ScoreDropDown