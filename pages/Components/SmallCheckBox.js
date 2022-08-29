import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {pageValue,fetchPage} from "../Redux-store/homePageSlice"

const SmallCheckBox = ({model,total,allState,setAllState}) => {
  const dispatch = useDispatch();
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
        <div className="flex gap-[10px] items-center">
            <input onChange={getAllValue} checked={allState.includes(model)} value={model} type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
            <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">{model} ({total.toString()})</label>
        </div>
    </div>
  )
}

export default SmallCheckBox

// onChange={getAllValue} checked={allState.includes(model)} value={model}