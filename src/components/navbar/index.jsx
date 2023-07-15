import React from "react";
import "./navbar.css";
import logo from "../../assets/Logo.PNG";
import vector from "../../assets/Vector.PNG";
import arrow from "../../assets/flash.PNG";
import search from"../../assets/search.PNG"
import shopping from"../../assets/shop.PNG"
import person from"../../assets/user.PNG"
export default () => {
  return (
    <div className="navbarWrapper">
      <div className="navbarRight">
        <img src={logo} alt="" />
        <img src={vector} alt="" />
      </div>
      <div className="navbarMidle">
        <div>
         
          <a className="navbarMidleTag">
            <strong className="navbarMidleTag">صفحه اصلی</strong>
          </a>
        </div>
        <div className="navbarMidleImg">
          <a>شعبه</a>
          <img src={arrow} alt="" />
        </div>
        <div className="navbarMidleImg">
          <a>منو</a>
          <img src={arrow} alt="" />
        </div>
        <div>
          <a>اعطای نمایندگی</a>
        </div>
        <div>
          <a>درباره ما </a>
        </div>
        <div>
          <a>تماس با ما</a>
        </div>
      </div>
      <div className="navbarLeft">
          <div>
            <img src={search} alt="" />
          </div>
          <div>
        <img src={shopping} alt="" />
          </div>
          <div>
          <img src={person} alt="" />
          </div>





      </div>
    </div>
  );
};
