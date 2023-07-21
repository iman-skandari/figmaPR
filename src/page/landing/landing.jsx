import React from "react";
import Navbar from "../../components/navbar";
import Card from "../../components/Card";
import WelcomMenu from "../../components/welcomMenu"

export default () => {
  return (
    <div>
      <Navbar />

      <div>
        <Card />
      </div>



      <div>
<WelcomMenu/>

      </div>
    </div>
  );
};
