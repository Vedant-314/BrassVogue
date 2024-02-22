import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import body1 from "../../assets/body1.webp"
import body2 from "../../assets/body2.webp"
import body3 from "../../assets/body3.webp"
import body4 from "../../assets/body4.webp"

function MainBody() {
  return (
    <div className="body-container">
      <h2>Shop Our Popular Items</h2>
      <Row>
        <Col sm={6} xs={12}>
          <div className="body-content">
            <img src={body1} alt="" />
            <h3>DIVINE BRASS IDOLS</h3>
          </div>
        </Col>
        <Col sm={6} xs={12}><div className="body-content">
            <img src={body2} alt="" />
            <h3>DIVINE BRASS IDOLS</h3>
          </div></Col>
        <Col sm={6} xs={12}><div className="body-content">
            <img src={body3} alt="" />
            <h3>DIVINE BRASS IDOLS</h3>
          </div></Col>
        <Col sm={6} xs={12}><div className="body-content">
            <img src={body4} alt="" />
            <h3>DIVINE BRASS IDOLS</h3>
          </div></Col>
        <Col sm={24} xs={24}>
        <div className="body-content">
          <Link>Show More</Link>
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default MainBody