import React,{useState} from 'react';
// import Slider from 'rc-slider';
// import TooltipSlider from './TooltipSlider';
import Slider from 'rc-slider';
// import  Range  from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useDispatch } from 'react-redux'
import {fetchPage} from "../Redux-store/homePageSlice"
// const { createSliderWithTooltip } = Slider;
// const Range = createSliderWithTooltip(Slider.Range);

const DualRangeSel = ({setRange,defaultValue ,min ,max ,step}) => {

    const dispatch = useDispatch();
    // const [multiRange, setMultiRange] = useState(defaultValue);
  return (
    <div>
      <Slider
        color="orange"
        inverted={false}
        min={min} max={max} step={step}
        range
        allowCross={false}
        onChange={(e) => {dispatch(setRange(e))}}
        onAfterChange={() => dispatch(fetchPage())}
        defaultValue={defaultValue}
      />
    </div>
  )
}

export default DualRangeSel
