import React from "react";
import "./cardInfo.css";
import image from "../../assets/image.svg";
import arow from "../../assets/arrow-left.png";
import { Row, Col } from "antd";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
export default () => {
  return (
    <div className="cardInfo">
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <div className="cardInfo1">
            <img src={image1} alt="" /> <h3>شعبه اکباتان</h3>
            <p>شهرک اکباتان فاز3،مجتمع تجاری کوروش،طبقه سوم</p>
          </div>
        </Col>

        <Col span={6}>
          <div className="cardInfo2">
            <img src={image1} alt="" />
            <h3>شعبه چالوس</h3>
            <p>
              خیابان چالوس، خیابان17شهریور، بعد از کوچه کوروش، جنب داروخانه دکتر
              میلانی
            </p>
          </div>
        </Col>

        <Col span={6}>
          <div className="cardInfo3">
            <img src={image} alt="" />
            <h3>شعبه اقدسیه</h3>
            <p>خیابان اقدسیه نرسیده به میدان خیام</p>
          </div>
        </Col>

        <Col span={6}>
          <div className="cardInfo4">
            <img className="cardInfo4Img" src={image2} alt="" />
            <h3>شعبه ونک</h3>
            <p>میدان ونک خیابان فردوسی</p>
            <button className="cardInfoBtn">
              <p>صفحه شعبه</p> <img src={arow} alt="" />
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
