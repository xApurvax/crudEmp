import Image from 'next/image'
import React from 'react'

const Nocars = () => {
  return (
    <div>
        <div className='shadow-[0px_0px_2px_rgba(40,41,61,0.04),0px_4px_8px_rgba(96,97,112,0.16)] py-[50px] rounded-[8px] '>
            <div className='flex flex-col justify-center items-center gap-10'>
                <Image src="/NoCars.png" alt='No Data' height={312} width={312} />
                <div className='flex flex-col gap-2'>
                    <p className='font-[700] text-[20px] leading-1.5 text-[rgb(40,41,61)]'>No cars found to match your search</p>
                    <p className='font-[400] text-[16px] leading-1.5 text-[rgb(143,144,166)]'>Try searching for different cars or changing filters</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nocars