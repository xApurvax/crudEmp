import React from 'react'

const SlideLoader = () => {
  return (
    <div className="animate-pulse rounded-xl">
        <section className=" group w-[328px] relative ">
          <div className="relative ">
            <img className="rounded-t-xl bg-slate-500 h-[100px] w-[325px] " />
            <div className="h-[100px] rounded-t-xl bg-gradient-to-b from-[#000000e6] to-[#00000000] absolute top-0 left-0 right-0 ">
            </div>
            <div className="text-center h-[39px] w-[325px] text-[10px] leading-[1.6] tracking-[1.4px] text-[#FAFAFA]  absolute top-[60px] left-0 right-0 ">
              <p></p>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col rounded-b-xl border-[1px] border-solid border-[#E6E6E6] bg-white overflow-hidden z-5">
            <div className=" text-center absolute top-[82px] left-0 right-0 w-[100%]  rounded-xl">
              <button className={`shadow shadow-black-500/40 h-[40px] bg-slate-500 rounded-[30px] w-[100px] px-[10px] py-[6px] font-[600] text-[14px] uppercase tracking-[1.4px] leading-[1]} `}>
                 
              </button>
            </div>

            <div className="flex gap-[40px] justify-center items-center mt-[25px] ">
              <div className="flex gap-[10px] ">
                <div className="">
                  <img className="w-[32px] h-[32px] bg-slate-500" />
                  <div className="text-[#666666] tracking-[1.4px] text-[10px] font-[100] text-center ">
                    <p></p>
                  </div>
                </div>
                <div className="flex flex-col items-start ">
                  <div className="font-[600] text-[#666666] text-[14px] ">
                    <p></p>
                  </div>
                  <div className="text-[#999999] text-[12px]">
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col justify-center items-center">
                  <div className="h-[15px] w-[1px] bg-slate-500 "></div>
                  <div className="font-graff font-[700] text-[#ff5000] rounded-full text-center h-[24px] w-[24px] bg-slate-500 ">
                    <p></p>
                  </div>
                  <div className="h-[15px] w-[1px] bg-slate-500"></div>
                </div>
              </div>
              <div className="flex flex-row-reverse gap-[10px] ">
                <div className="">
                  <img className="w-[32px] h-[32px] bg-slate-500" />
                  <div className="text-[#666666] text-[10px] font-[100] tracking-[1.4px] text-center ">
                    <p className=""></p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="font-[600] text-[#666666] text-[14px] ">
                    <p></p>
                  </div>
                  <div className="text-[#999999] text-[12px]">
                    <p></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[12px] leading-[1.33] tracking-[0.24px] flex justify-center items-center text-center my-[8px]  ">
              <p className="overflow-hidden whitespacing-no-wrap text-overflow-ellipsis truncate w-[300px] h-[10px] bg-slate-500 rounded-xl "></p>
            </div>
          </div>
        </section>
      </div>
  )
}

export default SlideLoader