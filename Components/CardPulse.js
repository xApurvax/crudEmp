import React from 'react'

const CardPulse = () => {
  return (
    <div>
          <div className=" bg-slate-200 min-h-[306px]  animate-pulse  flex flex-col gap-[0px] overflow-hidden rounded-[10px] border-solid border-[1px] border-[#F2F2F5] ">
            <div className="flex justify-between  ">
                <div className=" bg-slate-500 min-h-[254px] min-w-[360px]">
                </div>
                <div className="flex flex-col p-[24px] w-[70%] justify-between">
                    <div className="flex flex-col gap-[4px] ">
                        <div className=" font-[700] text-[20px] bg-slate-500 text-[#28293D] leading-[32px] min-h-[32px] max-w-[380px]">
                            <p></p>
                        </div>
                        <div className=" font-[400] text-[12px] bg-slate-500  text-[#8F90A6] leading-[16px] min-h-[16px] max-w-[241px]">
                            <p></p>
                        </div>
                        <div className=" font-[400] text-[12px] bg-slate-500  text-[#8F90A6] leading-[16px] min-h-[16px] max-w-[80px]">
                            <p></p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-[8px] items-center">
                            <div className="font-[600] text-[28px] text-[#28293D] leading-[38px] bg-slate-500 min-h-[38px] min-w-[120px]">          
                                <p></p>
                            </div>
                            <div className="flex items-center italic font-[400] text-[12px]  text-[#FFFFFF] leading-[16px] ">
                                <p className="px-[6.5px] rounded-full bg-slate-500 min-h-[20px] min-w-[20px]"></p>
                            </div>
                        </div>

                        <div className="flex items-center px-[16px] py-[6px] rounded-[10px] bg-slate-500 min-h-[38px] min-w-[137px] ">
                            <div className="flex items-center gap-[2px]  ">
                                <p className="font-[500] text-[14px] leading-[24px] "></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex text-[#05A660] px-[24px] py-[16px] flex-col rounded-b-[10px]  border-solid border-b-[1px] border-[#F2F2F5] bg-slate-500 ">
                    <div className="flex gap-[4px] items-center bg-slate-500 min-h-[20px] max-w-[110px] ">
            
                        <p className="font-[600] text-[12px]  leading-[20px] uppercase "></p>
                    </div>
                    <div className="flex gap-[16px] font-[400] text-[14px] leading-[24px] text-[#28293D] "> 
                        <div className='bg-slate-500 min-h-[24px] min-w-[245px] '>
                            <p></p>
                        </div>  
                        <div className='bg-slate-500 min-h-[24px] min-w-[245px] '>
                            <p></p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default CardPulse