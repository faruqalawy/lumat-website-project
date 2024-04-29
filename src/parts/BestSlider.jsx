import React from "react";

import jsonHome from "../json/home.json";

import BestProduct from "../component/bestProduct";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BestSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 1023, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      rewind={true}
      rewindWithAnimation={true}
      autoPlay={true}
      autoPlaySpeed={2500}
      removeArrowOnDeviceType={["desktop"]}
      containerClass="relative mx-5 md:mx-12 lg:mx-24 flex"
      itemClass="px-2"
    >
      {jsonHome.bestProduct.map((item, index) => (
        <BestProduct key={index} name={item.name} imageUrl={item.imageUrl} />
      ))}
    </Carousel>
  );
};

export default BestSlider;
