import Image from "next/image"
import Link from "next/link"
import autodigg from "../Images/autodigg.svg"
import { FaCar } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
        <navbar className="flex justify-between items-center px-[64px] py-[14px] border-b-[1px] border-solid border-[#E4E4EB] ">
            <section className="flex gap-[36px] uppercase font-[600] text-[12px] leading-[20px] text-[#28293D]  ">
                <div><Link href="/"><a className="hover:text-[#FF6B00]">How It Works</a></Link></div>
                <div><Link href="/"><a className="hover:text-[#FF6B00]">Why Us</a></Link></div>
                <div><Link href="/"><a className="hover:text-[#FF6B00]">Contact Us</a></Link></div>
            </section>
            <section>
                <div className="flex items-center h-[36px] w-[132px] ">
                    <Link href="/">
                        <a><Image src={autodigg} alt="nav logo" /></a>
                    </Link>
                </div>
            </section>
            <section className="flex gap-[36px] items-center">
                <div className="flex gap-[8px] py-[5px] border-b-[3px] border-solid  border-[#ff6b00]  ">
                    <FaCar size={18} fill="#FF6B00"/>
                    <div className="uppercase text-[#ff6b00] font-[600] text-[12px] leading-[20px] ">
                        <Link href="/"><a className="">used cars for sale</a></Link>
                    </div>
                </div>
                <div className="flex ">
                    <div className="uppercase bg-[#28293D] px-[20px] py-[8px] rounded-[13px] text-[#fff] font-[600] text-[12px] leading-[20px] ">
                    <Link href="/"><a className="hover:text-[#FF6B00]">Sign in/ Register</a></Link>
                    </div>
                </div>
            </section>
        </navbar>
    </div>
  )
}

export default Navbar