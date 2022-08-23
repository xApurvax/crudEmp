import React,{useState} from 'react'
import { IoIosArrowDown } from 'react-icons/io';

const ModelShowMore = ({carModel}) => {

    const [dropDown, setDropDown] = useState(false);

  return (
    <div>
        <div className="flex flex-col gap-[21px] ">
                <div className={` ${dropDown ? " max-h-full ": "max-h-[185px]  " } flex flex-col gap-[21px] overflow-hidden transition-all ease-in-out duration-200 `}>
                {carModel && Object.entries(carModel).map(([model,total]) => { 
                            {/* here model is key and total is value  */}
                  return (
                        <>
                        <div className="flex gap-[10px]">
                            <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                            <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">{model} ({total.toString()})</label>
                        </div>
                        </>
                        )
                })
                }
                  </div>

                  <div className={` ${dropDown ? " block ": "block " }  flex items-center gap-[5px] `} onClick={() => setDropDown(!dropDown)}>
                    <p className='font-[500] text-[14px] leading-[20px] text-[#FF8800]'>{dropDown ? "Show less" : "Show more"}</p>
                    <IoIosArrowDown fill='#FF8800' size={14} className= {` ${dropDown ?  "rotate-180 fill-[#ff5000] ": "rotate-0 " } transition-all ease-in-out duration-100`}  />
                  </div>
            </div>
    </div>
  )
}

export default ModelShowMore