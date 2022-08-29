import React,{useState} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useSelector , useDispatch } from 'react-redux'
import {getCarByRadius,fetchPage} from "../Redux-store/homePageSlice"

const DualRangeSel = ({setRange,defaultValue ,min ,max ,step}) => {

  const dispatch = useDispatch();

  // function getcarRaduis(e){
    
  // }

  return (
    <div>
      {/* {multiRange[0]} - {multiRange[multiRange.length - 1]} */}
      <Slider
        color="orange"
        inverted={false}
        min={min} max={max} step={step}
        allowCross={false}
        onChange={(value) => dispatch(getCarByRadius(value))}
        onAfterChange={() => dispatch(fetchPage())}
        defaultValue={100}
      />
    </div>
  )
}

export default DualRangeSel