import React from "react";
import "./WelcomMenu.css";
import { Carousel } from "antd";

import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css/navigation';




import { Navigation } from 'swiper/modules';

export default () => {
  return (
    <div className="welcome">
      <div className="welcomeH">
              <h1>تجربه غذای سالم  و گیاهی به سبک ترخینه</h1>
          </div>
          <div className="welcomeButton">
            <button className="welcomeButton1">سفارش غذای آنلاین</button>
          </div>
      {/* <Swiper className="mySwiper">
        <SwiperSlide className="mySwiper1">
          <div className="mySwiper1Box">
            <h1>تجربه غذای سالم و گیاهی به سبک ترخینه</h1>
            <button>سفارش غذای آنلاین</button>
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper> */}
       {/* <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="mySwiper1">
          
        <h1>تجربه غذای سالم  و گیاهی به سبک ترخینه</h1>
        <button><p>سفارش غذای آنلاین</p></button>
        </SwiperSlide>
        <SwiperSlide className="mySwiper2">
        <h1>تجربه غذای سالم  و گیاهی به سبک ترخینه</h1>
        <button><p>سفارش غذای آنلاین</p></button>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      
      </Swiper>
    </> */}
    </div>
  );
};
