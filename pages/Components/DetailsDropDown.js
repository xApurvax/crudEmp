import React,{useState,useRef,useEffect} from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';

const DetailsDropDown = ({dropDownTitle}) => {
    const [dropDown, setDropDown] = useState(false);
    
    const ref = useRef();

    useEffect(() => {
      const handleClickOutside = (event) => {
        console.log('he',dropDown)
        if (!ref?.current?.contains(event.target)) {
           if(dropDown) setDropDown(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
    }, [dropDown, ref]);

  return (
    <div>
         <section className="flex flex-col gap-[21px]  border-t-[1px] border-solid border-[#E4E4EB] ">
                  <section  className={` ${dropDown ? " block px-[16px] py-[20px] ": "block px-[16px] py-[15px]" }  flex items-center justify-between  bg-[#f2f2f5]  `} 
                  ref={ref}
                  onClick={(e) =>{ 
                    {console.log('here 1')}
                    e.preventDefault()
                    e.stopPropagation()
                    setDropDown(!dropDown)}}>
                    <p className='font-[600] text-[16px] leading-[24px] text-[#28293D]'>{dropDownTitle}</p>
                    <IoIosArrowDown fill='#28293D' size={14} className= {` ${dropDown ?  "rotate-180  ": "rotate-0 " } transition-all ease-in-out duration-100`} />
                  </section>
                  <section className={` ${dropDown ? " max-h-[1800px] ": "max-h-[0px] hidden " }  overflow-hidden transition-all ease-in-out duration-200 px-[16px]  `}
                  >
                  {(dropDownTitle == "Style" || dropDownTitle == "Performance" || dropDownTitle =="Features" ) ? (<div>
                    <div className='pb-[16px]'>
                        <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">car type</p>
                    </div>
                    <section className='flex flex-col gap-[21px]  '>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">RDX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">TLX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">RDX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">TLX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">RDX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">TLX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">TX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">TL (21)</label>
                    </div>
                    </section>
                  {/* </section> */}
                  {/* <section className={` ${dropDown ? " max-h-[1800px] ": "max-h-[0px] hidden " }  overflow-hidden transition-all ease-in-out duration-200 `}> */}
                    <div className='pt-[16px]'>
                        <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">car type</p>
                    </div>
                    <section className='flex flex-col gap-[21px] py-[15px] '>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">RDX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">TLX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">RDX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">TLX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">RDX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">TLX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">TX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">TL (21)</label>
                    </div>
                    </section>
                    <div className=''>
                        <p className=" font-[600] text-[12px] leading-[16px] text-[#8F90A6] uppercase">car type</p>
                    </div>
                    <section className='flex flex-col gap-[21px] py-[15px] '>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">RDX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">TLX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">RDX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">TLX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">RDX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">TLX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">TX (21)</label>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <input type="checkbox" className="bg-[#FFFFFF] h-[15px] w-[15px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                        <label className="font-[500] text-[12px] leading-[20px] text-[#28293D]">TL (21)</label>
                    </div>
                    </section></div>) : 
                    (<div>
                          <section className='flex flex-col gap-[16px] '>
                          <div className="flex gap-[10px] items-center">
                            <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                            <div className='flex gap-[4px] '>
                                <AiFillStar fill='#FFD912' size={20} />
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                            </div>
                            <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">only</label>
                          </div>
                          <div className="flex gap-[10px] items-center">
                            <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                            <div className='flex gap-[4px] '>
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                            </div>
                            <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">and above</label>
                          </div>
                          <div className="flex gap-[10px] items-center">
                            <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                            <div className='flex gap-[4px] '>
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                            </div>
                            <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">and above</label>
                          </div>
                          <div className="flex gap-[10px] items-center">
                            <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                            <div className='flex gap-[4px] '>
                                <AiFillStar fill='#FFD912'  size={20}  />
                                <AiFillStar fill='#FFD912'  size={20}  />
                            </div>
                            <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">and above</label>
                          </div>
                          <div className="flex gap-[10px] items-center">
                            <input type="checkbox" className="bg-[#FFFFFF] h-[20px] w-[20px] accent-[#28293D] border-[2px] border-solid border-[#8F90A6] rounded-[4px]  " />
                            <div className='flex gap-[4px] '>
                                <AiFillStar fill='#FFD912'  size={20}  />
                            </div>
                            <label className="font-[500] text-[14px] leading-[20px] text-[#28293D]">and above</label>
                          </div>
                          </section>
                    </div>)}
                  </section>
            </section>
    </div>
  )
}

export default DetailsDropDown