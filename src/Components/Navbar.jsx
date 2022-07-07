import React from 'react'
import user from "./user.png"
import './Comp.css';
import { FiGift,FiBell } from 'react-icons/fi';


const Navbar = () => {
  return (
    <div>
    <nav id="main-nav">
        <div id="nav-left">
                <div className='nav-logo'>
                    DRAMATIC
                </div>
                <div className='nav-list'>
                    <li><a href='#'>HOME</a></li>
                    <li><a href='#'>TV SHOW</a></li>
                    <li><a href='#'>MOVIE</a></li>
                    <li><a href='#'>NEW</a></li>
                </div>
        </div>
        <div id="nav-right">
                <div className='nav-search'>
                    <input type="search" placeholder='SEARCH'></input>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className='nav-icon'>
                    <FiGift />
                    <FiBell />   
                </div>
                <div className='nav-pro'>
                    <img src={user}></img>
                    <span className='onDoff'>●</span>
                </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar