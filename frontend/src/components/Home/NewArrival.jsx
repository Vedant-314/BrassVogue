import { Card, Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import NA1 from "../../assets/NA1.webp"
import NA2 from "../../assets/NA2.webp"
import NA3 from "../../assets/NA3.webp"
import NA4 from "../../assets/NA4.webp"
import NA5 from "../../assets/NA5.webp"


function NewArrival() {
    const { Meta } = Card;
  return (
    <div className="arrival-container">
        <h2>NEW ARRIVALS</h2>
        <div className="arrival">

        <Row gutter={8}>
    <Col span={4} sm={6} xs={12} md={4}>
    <Card
    hoverable
    style={{marginTop: 16,}}

    cover={<img alt="example" src={NA1} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </Col>
    <Col span={4} sm={6} xs={12} md={4}>
    <Card
    hoverable
    style={{marginTop: 16,}}

    cover={<img alt="example" src={NA2} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </Col>
    <Col span={4} sm={6} xs={12} md={4}>
    <Card
    hoverable
    style={{marginTop: 16,}}

    cover={<img alt="example" src={NA3} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </Col>
    <Col span={4} sm={6} xs={12} md={4}>
    <Card
    hoverable
    style={{marginTop: 16,}}

    cover={<img alt="example" src={NA4} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </Col>
    <Col span={4} sm={6} xs={12} md={4}>
    <Card
    hoverable
    style={{marginTop: 16,}}

    cover={<img alt="example" src={NA5} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </Col>
    <Col span={4} sm={6} xs={12} md={4}>
    <Card
    hoverable
    style={{marginTop: 16,}}

    cover={<img alt="example" src={NA5} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </Col>
    <Col span={4} sm={6} xs={12} md={4}>
    <Card
    hoverable
    style={{marginTop: 16,}}

    cover={<img alt="example" src={NA1} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </Col>
    <Col span={4} sm={6} xs={12} md={4}>
    <Card
    hoverable
    style={{marginTop: 16,}}

    cover={<img alt="example" src={NA2} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </Col>
    <Col span={4} sm={6} xs={12} md={4}>
    <Card
    hoverable
    style={{marginTop: 16,}}

    cover={<img alt="example" src={NA3} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </Col>
    <Col span={4} sm={6} xs={12} md={4}>
    <Card
    hoverable
    style={{marginTop: 16,}}

    cover={<img alt="example" src={NA4} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </Col>
    <Col span={4} sm={6} xs={12} md={4}>
    <Card
    hoverable
    style={{marginTop: 16,}}

    cover={<img alt="example" src={NA5} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </Col>
    <Col span={4} sm={6} xs={12} md={4}>
    <Card
    hoverable
    style={{marginTop: 16,}}
    cover={<img alt="example" src={NA5} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </Col>
    <Col sm={24} xs={24}>
        <div className="body-content">
          <Link>Show More</Link>
        </div>
        </Col>
  </Row>
        </div>
    </div>
  )
}

export default NewArrival