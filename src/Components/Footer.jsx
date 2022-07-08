import React from 'react'
import { IoIosArrowDown  } from "react-icons/io";
import { FiGlobe } from "react-icons/fi";
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialTwitterCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div>
        <section id="main-ftr">
        <div id="ftr-links">
            <div className='ftr-btn'>
                <button className="lang-sl">
                        <FiGlobe size={18} color={"#FFFFFF"} />English<IoIosArrowDown size={18} color={"#FFFFFF"} />
                </button>
            </div>

            <div className='ftr-nvg'>
                <div className='nvg-head'>
                    <p>NAVIGATION</p>
                </div>
                <div className='nvg-links'>
                    <a href='#'>Home</a>
                    <a href='#'>FAQ</a>
                    <a href='#'>Invester Relation</a>
                    <a href='#'>Jobs</a>
                    <a href='#'>About Us</a>
                    <a href='#'>Help Center</a>
                </div>
            </div>
            <div className='ftr-nvg'>
                <div className='nvg-head'>
                        <p>LEAGL</p>
                </div>
                <div className='nvg-links'>
                        <a href='#'>Privacy Policy</a>
                        <a href='#'>Terms Of Service</a>
                        <a href='#'>Cookie Prefrences</a>
                        <a href='#'>Corporate Information</a>
                </div>
            </div>
            <div className='ftr-nvg'>
                <div className='nvg-head'>
                        <p>TALK TO US</p>
                </div>
                <div className='nvg-links'>
                        <a href='#'>Support@ercom.com</a>
                        <a href='#'>+66 2399 1145</a>
                </div>
            </div>
            <div className='ftr-nvg'>
                <div className='nvg-head'>
                        <p>FOLLOW US</p>
                </div>
                <div className='nvg-icons'>
                    <TiSocialFacebookCircular size={39} color={"#FFFFFF"} />
                    <TiSocialLinkedinCircular size={39} color={"#FFFFFF"} />
                    <TiSocialTwitterCircular size={39} color={"#FFFFFF"} />
                </div>
            </div>
        </div>  
        <div id="ftr-copyrigth">
            <p>@ 2022 Dramatic. All Rights Reserved</p>
        </div> 
        </section>
    </div>
  )
}

export default Footer