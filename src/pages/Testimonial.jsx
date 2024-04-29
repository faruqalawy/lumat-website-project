import {React, useState} from "react";

import Header from "../parts/Header";
import TestiPageSlider from "../parts/TestiPageSlider";
import TestiVideoSlider from "../parts/TestiVideoSlider.jsx";
import Footer from "../parts/Footer";
import WhatsappButton from "../component/whatsappButton.jsx";

const Testimonial = ({isSmallNavOpen, setIsSmallNavOpen}) => {

  return (
    <div className=""> 
      <Header title="Testimoni" setIsSmallNavOpen={setIsSmallNavOpen} />

      <div
        className={`shadow-md mx-5 md:mx-12 lg:mx-24 rounded-md bg-white p-7 ${isSmallNavOpen ? "" : "relative"}`}
        style={{ marginTop: -15 }}
      >
        <h1 className="text-center font-bold text-sm mb-2 sm:text-xl md:text-2xl lg:text-3xl my-6">
          APA KATA MEREKA TENTANG LUMAT?
        </h1>

        <TestiPageSlider isSmallNavOpen={isSmallNavOpen} />
      </div>

      <div className="bg-orange-light" style={{ marginTop: -20 }}>
        <TestiVideoSlider />
      </div>

      <Footer />

      <WhatsappButton isSmallNavOpen={isSmallNavOpen} />
    </div>
  );
};

export default Testimonial;
