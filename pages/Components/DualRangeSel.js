import React,{useState} from 'react';
// import Slider from 'rc-slider';
// import TooltipSlider from './TooltipSlider';
import Slider from 'rc-slider';
// import  Range  from 'rc-slider';
import 'rc-slider/assets/index.css';
// const { createSliderWithTooltip } = Slider;
// const Range = createSliderWithTooltip(Slider.Range);

const DualRangeSel = ({setRange,defaultValue ,min ,max ,step}) => {

    const [multiRange, setMultiRange] = useState(defaultValue);
  return (
    <div>
      {/* {multiRange[0]} - {multiRange[multiRange.length - 1]} */}
      <Slider
        color="orange"
        inverted={false}
        min={min} max={max} step={step}
        range
        allowCross={false}
        onChange={(e) => {setMultiRange(e) ,setRange(e)}}
        defaultValue={multiRange}
      />
    </div>
  )
}

export default DualRangeSel
