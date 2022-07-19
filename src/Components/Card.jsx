import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Card = () => {
  return (
      <div>
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
              <p>#RD ODI INDIA TOUR OF ENGLAND</p>
            </div>
          </div>

          <div className="flex flex-col rounded-b-xl border-[1px] border-solid border-[#E6E6E6] ">
            <div className="text-[#ff5000] text-center absolute top-[82px] left-0 right-0 ">
              <button className="shadow shadow-black-500/40 bg-white rounded-[30px] p-[10px] font-[600] text-[14px] uppercase tracking-[1.4px] leading-[1] ">
                Results
              </button>
            </div>

            <div className="flex gap-[40px] justify-center items-center mt-[25px] ">
              <div className="flex gap-[10px] ">
                <div className="">
                  <img
                    className="w-[32px] "
                    src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-ENG@2x.png"
                    alt="flag"
                  />
                  <div className="text-[#666666] tracking-[1.4px] text-[10px] font-[100] text-center ">
                    <p>ENG</p>
                  </div>
                </div>
                <div className="flex flex-col items-start ">
                  <div className="font-[600] text-[#666666] text-[14px] ">
                    <p>259/10</p>
                  </div>
                  <div className="text-[#999999] text-[12px]">
                    <p>45.5 overs</p>
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
                    className="w-[32px] "
                    src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-IND@2x.png"
                    alt="flag"
                  />
                  <div className="text-[#666666] text-[10px] font-[100] tracking-[1.4px] text-center ">
                    <p className="">IND</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="font-[600] text-[#666666] text-[14px] ">
                    <p>259/10</p>
                  </div>
                  <div className="text-[#999999] text-[12px]">
                    <p>45.5 overs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[12px] leading-[1.33] tracking-[0.24px] text-center mb-[8px] ">
              <p className="">India beat England by 5 wickets</p>
            </div>
          </div>

        <div className="flex justify-center invisible group-hover:visible group-hover:flex group-hover:justify-center focus:visible bg-[#f0f1f4] w-[328px] rounded-b-xl py-[10px]  ">
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
      </div>
  );
};

export default Card;
