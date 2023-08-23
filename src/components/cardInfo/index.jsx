import React from "react";
import "./cardInfo.css";
import image from "../../assets/Image.png";
import arow from "../../assets/arrow-left.png"
export default () => {
  return (
    <div className="cardInfo">
      <div className="cardInfo1">
        <img src={image} alt="" />
        <h2> شعبه اکباتان</h2>
        <p>شهرک اکباتان فاز3،بلوک 8</p>
      </div>
      <div className="cardInfo1">
        <img src={image} alt="" />
        <h2> شعبه چالوس</h2>
        <p>چالوس خیابان 17 فروردین،بعد از کوچه کوروش، جنب داروخونه میلانی</p>
      </div>
      <div className="cardInfo1">
        <img src={image} alt="" />
        <h2> شعبه اقدسیه</h2>
        <p>خیابان اقدسیه نرسیده به خیابان خیام</p>
      </div>
      <div className="cardInfo2">
        <img src={image} alt="" />
        <h2> شعبه ونک</h2>
        <br />
        <p>میدون ونک خیابان فردوسی نبش کوچه نیلوفر</p>
        {/* <button className="cardInfoBtn"><p>صفحه شعبه</p> <img src={arow} alt="" /></button> */}
      </div>
    </div>
  );
};
