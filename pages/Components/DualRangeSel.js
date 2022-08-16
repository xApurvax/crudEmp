// import React from 'react';
// import Slider from 'rc-slider';
// import TooltipSlider from './TooltipSlider';
import Slider from 'rc-slider';
import  Range  from 'rc-slider';
import 'rc-slider/assets/index.css';

const DualRangeSel = () => {
  return (
    <div>
      {/* <TooltipSlider
        range
        min={0}
        max={20}
        defaultValue={[3, 10]}
        tipFormatter={(value) => `${value}!`}
      /> */}
      {/* <Slider /> */}
      <Range min={0} max={1000} step={100}  tipFormatter={[100,400]}/>
    </div>
  )
}

export default DualRangeSel