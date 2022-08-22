import React from 'react'

const Checkbox = ({model,total}) => {
  return (
    // <div className='py-[16px]'>
    //     <div className='pb-[16px]'>
    //         <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">car type</p>
    //     </div>
        <section className='flex flex-col gap-[21px]  '>
            <div className="flex gap-[10px] items-center">
                <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">{model} ({total.toString()})</label>
            </div>
        </section>
    // </div>
  )
}

export default Checkbox