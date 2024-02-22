import React from 'react'
import { Carousel } from 'antd';
import back1 from "../../assets/back1.webp"
import { Link } from 'react-router-dom';


function Banner() {
  return (
    <div className="banner-container">
      <Carousel autoplay>
      <div className='slider-content1'>
        <div className="slider-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quisquam?</p>
          <Link><h2>SHOP NOW</h2></Link>
        </div>
      </div>
      <div className='slider-content1'>
        <div className="slider-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quisquam?</p>
          <Link><h2>SHOP NOW</h2></Link>
        </div>
      </div>
      <div className='slider-content1'>
        <div className="slider-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quisquam?</p>
          <Link><h2>SHOP NOW</h2></Link>
        </div>
      </div>
      <div className='slider-content1'>
        <div className="slider-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quisquam?</p>
          <Link><h2>SHOP NOW</h2></Link>
        </div>
      </div>
      </Carousel>

    </div>
  )
}

export default Banner