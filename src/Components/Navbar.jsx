import React from 'react'
import user from "./user.png"
import './Comp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <div>
        <div clasName="main-nav">
            <nav>
                <div className='nav-logo'>
                    DRAMATIC
                </div>
                <div className='nav-list'>
                    <li>HOME</li>
                    <li>TV SHOW</li>
                    <li>MOVIE</li>
                    <li>NEW</li>
                </div>
                <div className='nav-search'>
                    <input type="search" placeholder='Search'></input>
                </div>
                <div className='nav-icon'>
                    <FontAwesomeIcon icon="fa-solid fa-gift" />
                    <FontAwesomeIcon icon="fa-solid fa-bell" />
                </div>
                <div className='nav-pro'>
                    <img src={user}></img>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar