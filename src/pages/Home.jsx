import React from "react";
import HomeHeader from "../parts/HomeHeader.jsx";
import Pros from "../parts/Pros.jsx";
import BestSlider from "../parts/BestSlider.jsx";
import Button from "../component/button.jsx";
import Testimonial from "../parts/TestimonialSlider.jsx";
import Portfolio from "../parts/PortfolioSlider.jsx";
import Footer from "../parts/Footer.jsx";
import WhatsappButton from "../component/whatsappButton.jsx";

const Home = ({isSmallNavOpen, setIsSmallNavOpen}) => {
  return (
    <div>
      <HomeHeader setIsSmallNavOpen={setIsSmallNavOpen} />

      <Pros />

      <div className="md:mb-8">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-[40px] text-center mt-12 mb-4 md:mt-16 md:mb-6 lg:mt-24 lg:mb-12">
          PRODUK TERLARIS
        </h1>
        <BestSlider />
        <div className="flex flex-col items-center mt-4 md:mt-7">
          <Button isArrow text="LIHAT PRODUK LAINNYA" path="/product" className="mx-auto" />
        </div>
      </div>

      <Testimonial />

      <Portfolio />

      <Footer />
      
      <WhatsappButton isSmallNavOpen={isSmallNavOpen} />
    </div>
  );
};

export default Home;
