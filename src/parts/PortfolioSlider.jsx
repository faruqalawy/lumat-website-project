import React from 'react';

import jsonHome from "../json/home.json";

const PortfolioSlider = () => {
  return (
    <div className="mx-5 md:mx-12 lg:mx-24 my-6 lg:my-16">
        <h1 className="font-nunito font-bold text-2xl md:text-3xl lg:text-[40px] text-center mb-4  md:mb-6  lg:mb-8">PORTFOLIO KAMI</h1>
        <video src={jsonHome.portfolio.videos[0].videoUrl} autoPlay loop muted className=" w-full lg:w-4/6 mx-auto" ></video>
    </div>
  )
}

export default PortfolioSlider