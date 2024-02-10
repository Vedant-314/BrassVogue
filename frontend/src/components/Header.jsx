import React from 'react'
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="header-container">
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
  )
}

export default Header