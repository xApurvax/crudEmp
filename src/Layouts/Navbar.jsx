import React from 'react'
import { Link } from 'react-router-dom'
import Navlogo from '../Images/Navlogo.svg'
import { AiFillApple } from 'react-icons/ai';
import { IoLogoGooglePlaystore } from 'react-icons/io5'; 
import { FaRegBell } from 'react-icons/fa'; 
import { TbUserCircle } from 'react-icons/tb'; 

const Navbar = () => {
  return (
    <div>
        <section className='flex justify-center items-center pt-[5px] pb-[10px] gap-[225px] bg-[#001240] mb-[0px] '>
        <div className='flex gap-[50px] '>
            <div className='w-[144px]'>
                <img src={Navlogo} alt="logo" />
            </div>
            <div className='flex gap-[24px] justify-around items-center uppercase list-none font-sans text-[14px] font-[700] leading-[1] tracking-[1.4px] pr-[20px] '>
                <li className='text-[#ff5000] '><a href='/'>HOME</a></li>
                <li className='text-white'><a href='/'>SCHEDULE</a></li>
                <li className='text-white'><a href='/'>SHOP <sup className='text-white bg-[#ff5000] w-[32px] text-[11px] font-[200] text-center rounded-[2px] px-[2px] py-[2px] '>New</sup> </a></li>
            </div>
        </div>
        <div className='flex items-center gap-[8px]'>
                <div className='flex justify-center items-center gap-[12px]  '>
                    <div className='flex rounded-full bg-white p-[3px] '>
                        <AiFillApple color='#000000' size={18} />
                    </div>
                    <div className='flex rounded-full bg-white p-[5px] '>
                        <IoLogoGooglePlaystore color='#000000' size={14} />
                    </div>
                    <div className='text-white'>
                        <p>Get The App</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div  className='flex rounded-full '> 
                        <FaRegBell color='#FFFFFF' size={20}  />
                    </div>
                </div>
                <div className='flex gap-[12px] justify-center items-center'>
                    <TbUserCircle color='#FFFFFF' size={30} />
                </div>
                <div className='flex gap-[12px] justify-center items-center font-[200] list-none text-[14px] leading-[1] tracking-[1.4px] '>
                <li className='text-white'><a href='/'>Login/Register</a></li>
                </div>
        </div>
        </section>
    </div>
  )
}

export default Navbar