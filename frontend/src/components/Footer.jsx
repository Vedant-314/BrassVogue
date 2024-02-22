import React from 'react'
import element1 from "../assets/element.avif"
import element2 from "../assets/1.avif"
import element3 from "../assets/3.avif"
import element4 from "../assets/4.webp"
import { CiFacebook, CiInstagram, CiMail, CiPhone } from "react-icons/ci";
import { RxEnter } from "react-icons/rx";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Col, Row } from 'antd'
import { IoIosHeart } from "react-icons/io";
import payment from "../assets/payments.avif"

function Footer() {
  return (
    <>
      <div className="shipping-container">
        <div className="shipping">
          <div className="shipping-card">
            <img src={element1} alt="" />
            <div className="shipping-content">
              <h2>Easy Returns</h2>
              <p>Easy retruns & refunds within 7 days.</p>
            </div>
          </div>
          <div className="shipping-card">
            <img src={element2} alt="" />
            <div className="shipping-content">
              <h2>Free Shipping</h2>
              <p>Free Shipping all over India</p>
            </div>
          </div>
          <div className="shipping-card">
            <img src={element3} alt="" />
            <div className="shipping-content">
              <h2>Online Support</h2>
              <p>24/6 Whatsapp, Email & Call Support.</p>
            </div>
          </div>
          <div className="shipping-card">
            <img src={element4} alt="" />
            <div className="shipping-content">
              <h2>Made In India</h2>
              <p>All our products are 100% made in India.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer">
        <Row gutter={5}>
          <Col span={6} sm={12} xs={24} md={6}>
            <div className="footer-content">
              <h2>Get In Touch</h2>
              <p>Sign up for our NewLetter</p>
              <div className="footer-mail">
                <CiMail size={25} style={{backgroundColor: "white", padding: "7px", borderTopLeftRadius: "5px", borderBottomLeftRadius:"5px"}} />
                <input type="email" name="" id="" placeholder='EMAIL' />
                <RxEnter size={25} style={{backgroundColor: "white", padding: "7px", borderTopRightRadius: "5px", borderBottomRightRadius:"5px", cursor: "pointer"}}/>
              </div>
            </div>
          </Col>
          <Col span={6} sm={12} xs={24} md={6}>
            <div className="footer-content">
              <h2>About</h2>
              <ul>
                <li>About BrassVogue</li>
                <li>Shipping</li>
                <li>Returns and Refunds</li>
                <li>Privacy Policy</li>
                <li>Connect on Whatsapp</li>
              </ul>
            </div>
          </Col>
          <Col span={6} sm={12} xs={24} md={6}>
          <div className="footer-content">
              <h2>Contact US</h2>
              <p>For any suggestions, queries or complaints please contact us at:</p>
              <ul>
                <li><CiPhone size={18}/> +91 86992 25921</li>
                <li><CiMail size={18}/>  vedanttaak7@gmail.com</li>
              </ul>
              <div className="icons">
                <div>
                  <FaInstagram size={30} className="icon"/>
                </div>
                <div>
                  <FaFacebook size={30} className="icon"/>
                </div>
              </div>
            </div></Col>
          <Col span={6} sm={12} xs={24} md={6}>
            <h2>Location</h2>
            <div className="footer-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6621069083026!2d75.53326897511438!3d31.395879153283115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51d30c180edf%3A0x5b7633718d17ef33!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar!5e0!3m2!1sen!2sin!4v1708624951254!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12} sm={24} md={12} xs={24}>
            <div className="bottom">
            <p>Made with love in India</p>
            <IoIosHeart color='red' size={20} />
            </div>
          </Col>
          <Col span={12} sm={24} md={12} xs={24}>
            <div className="bottom">
              <img src={payment} alt="payment" />
            </div>
          </Col>
        </Row>
        </div>
      </div>
    </>
  )
}

export default Footer