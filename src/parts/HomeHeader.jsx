import React from "react";

import backgroundImage from "../assets/images/home-header-background.webp";

import Nav from "../component/Nav"
import Button from "../component/button";

const HomeHeader = ({setIsSmallNavOpen}) => {
  return (
    <div
  className="max-w-full"
  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 80%), linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 90%), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>

      <header className="mx-5 md:mx-12 lg:mx-24 pb-9 ">
        <Nav setIsSmallNavOpen={setIsSmallNavOpen} />

        <div className="font-nunito">
          <h2 className="font-semibold text-white text-xl lg:text-4xl lg:pb-2">
            NIKMATI MAKANAN LEZAT YANG INSTAN DAN HIGIENIS
          </h2>
          <h1 className="font-extrabold text-yellow text-4xl lg:text-6xl lg:pb-2" style={{marginBottom: -3}}>
            BERSAMA LUMAT
          </h1>
          <h1 className="font-extrabold text-white text-4xl lg:text-6xl">MAKAN NIKMAT</h1>
        </div>
        <Button text="LIHAT PRODUK" path="/product" className="my-3 md:my-5 lg:my-6 " isArrow/>
      </header>
    </div>
  );
};

export default HomeHeader;
