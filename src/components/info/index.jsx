import React from "react";
import "./info.css";
import { Button, Space } from "antd";
import shop from "../../assets/shop.png";
import arrowLeft from "../../assets/arrow-left.png";
import person from "../../assets/person.png"
import diagram from "../../assets/diagram.png"
import menu from "../../assets/menu-board.png"
import wifi from "../../assets/home-wifi.png"
export default () => {
  return (
    <div className="info">
      <div className="infoRight">
        <div>
          <h3>رستوران زنجیره ای ترخینه</h3>
          <br />
          <p>
            مهمان نوازی یکی از مهمترین مشخصه های ایرانیان است و باعث افتخار ماست
            که بیش از 20 سال است خدمت گذار مردم شریف ایران هستیم. ما در رستوران
            های زنجیره ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه
            معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و در خور شان
            شما عزیزان ارایه دهیم.{" "}
          </p>
        </div>

        <div className="infoBtn">
          <button className="infos">
            <img className="infoImgR" src={shop} alt="" />
            <p>اطلاعات بیشتر</p>
            <img className="infoImgL" src={arrowLeft} alt="" />
          </button>
        </div>
      </div>

      <div className="infoLeft">
        <div className="infoLeftUp">
          <div className="infoImgUp">
            <img src={person} alt="" />
            <p>پرسنلی مجرب و حرفه ای</p>
          </div>
          <div>
            <img src={ diagram} alt="" />
            <p>کیفیت بالای غذاها</p>
          </div>
        </div>

        <div className="infoLeftDown">
          <div>
            <img src={wifi} alt="" />
            <p>محیطی دلنشین و آرام</p>
          </div>
          <div>
            <img src={menu} alt="" />
            <p>منوی متنوع</p>
          </div>

        </div>
      </div>
    </div>
  );
};
