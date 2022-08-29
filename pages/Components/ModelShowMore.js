import React,{useState} from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { useSelector , useDispatch } from 'react-redux'
import {setCarByModel,fetchPage,pageValue} from "../Redux-store/homePageSlice"

const ModelShowMore = ({carModel,allState,setAllState}) => {

    const [dropDown, setDropDown] = useState(false);

    const dispatch = useDispatch();
    // const {carByModel} = useSelector((state) => state.homePageSlice)

    function getAllValue(e){
      const array = e.target.checked
      ? [...allState, e.target.value]
      : allState.filter((model) => model !== e.target.value);
      // console.log(array,"model")
      dispatch(setAllState([]));
      dispatch(setAllState(array));
      dispatch(pageValue(1))
      dispatch(fetchPage())
      }

  return (
    <div>
        <div className="flex flex-col gap-[21px] ">
                <div className={` ${dropDown ? " max-h-full ": "max-h-[185px]  " } flex flex-col gap-[21px] overflow-hidden transition-all ease-in-out duration-200 `}>
                {carModel && Object.entries(carModel).map(([model,total]) => { 
                            {/* here model is key and total is value  */}
                  return (
                        <>
                        <div className="flex gap-[10px]">
                            <input type="checkbox" checked={allState.includes(model)} onChange={getAllValue} value={model} className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
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