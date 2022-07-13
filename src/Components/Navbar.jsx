import React from 'react'
import {Link } from 'react-router-dom'
import user from "./user.png"
import './Comp.css';
import { FiGift,FiBell } from 'react-icons/fi';


const Navbar = () => {
  return (
    <div>
    <nav id="main-nav">
        <div id="nav-left">
                <div className='nav-logo'>
                    <Link to="/">DRAMATIC</Link>
                </div>
                <div className='nav-list'>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/">TV SHOW</Link></li>
                    <li><Link to="/">MOVIE</Link></li>
                    <li><Link to="/">NEW</Link></li>
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