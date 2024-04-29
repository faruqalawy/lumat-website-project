import React from "react";

import Header from "../parts/Header";
import Footer from "../parts/Footer";
import WhatsappButton from "../component/whatsappButton.jsx";

const Portfolio = ({isSmallNavOpen, setIsSmallNavOpen}) => {
  return (
    <>
      <Header title="Portfolio" setIsSmallNavOpen={setIsSmallNavOpen} />

      <Footer />

      <WhatsappButton isSmallNavOpen={isSmallNavOpen} />
    </>
  );
};

export default Portfolio;
