import React from 'react'
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';



function Header() {

  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);
  
  return (
    <>
    <div className="header-container">
      <div className="hamburger">
        {clicked? <RxCross2 onClick={handleClick} /> : <FaBars onClick={handleClick}/>}
      </div>
      <div className="left">
        <h2>Brass Vogue</h2>
      </div>
      <div className="middle">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/idols'>Idols</Link></li>
          <li><Link to='/giftItems'>Gifting Items</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><a href='#contactUs'>Contact Us</a></li>
        </ul>
      </div>
      <div className="right">
          <BsCart2 />
      </div>
    </div>
    {clicked && (
        <div className='responsive-nav'>
          <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/idols'>Idols</Link></li>
          <li><Link to='/giftItems'>Gifting Items</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><a href='#contactUs'>Contact Us</a></li>
        </ul>
        </div>
      ) }
    </>
  )
}

export default Header