import React from 'react'
import Navlogo from '../Images/Navlogo.svg'
import { FaTwitter, FaInstagram ,FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        <section className=' flex flex-col justify-center items-center bg-[#001240]'>
            <div className='flex justify-center items-center w-full py-[32px] border-b-[1px] border-solid border-[#282828] '>
                <img className='w-[144px]' src={Navlogo} alt="logo" />
            </div>
            <div className='flex flex-col justify-center items-center w-full gap-[23px] py-[24px]  border-b-[1px] border-solid border-[#282828] '>
                <div className='text-[18px] tracking-[0.15px] leading-[1.22] text-[#c8c8c8] text-center'>
                    <p>Connect With Us</p>
                </div>
                <div className='flex items-center justify-center gap-[24px] '>
                    <div className='rounded-full p-[15px] border-solid border-[1px] border-[#ff5000] '>
                        <FaTwitter color='#ff5000' size={18} />
                    </div>
                    <div className='rounded-full p-[15px] border-solid border-[1px] border-[#ff5000] '>
                        <FaInstagram color='#ff5000' size={18} />
                    </div>
                    <div className='rounded-full p-[15px] border-solid border-[1px] border-[#ff5000] '>
                        <FaFacebookF color='#ff5000' size={18} />  
                    </div>
                </div>
            </div>
            <div className='flex justify-between gap-[30px] ml-[32px] '>
                <div className='text-[14px] p-[15px] tracking-[0.25px] leading-[1.29] text-white text-center '>
                     Corporate Office: 
                        ONE BKC, Tower A, 12th & 14th Floor, Unit 1201 & 1202 and 1401 & 1402, Plot C-66, G Block, Bandra Kurla Complex, Bandra (East), Mumbai,
                        Maharashtra-400051
                </div>
                <div className='flex flex-wrap gap-[5px] p-[10px] list-none font-[500] text-[14px] leading-[1.25] text-white text-center whitespace-nowrap  '>
                    <li><a href='/'>Careers |</a></li>
                    <li><a href='/'>Help Desk |</a></li>
                    <li><a href='/'>T&Cs |</a></li>
                    <li><a href='/'>Privacy Policy |</a></li>
                    <li><a href='/'>About Us |</a></li>
                    <li><a href='/'>IND vs WI </a></li>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer