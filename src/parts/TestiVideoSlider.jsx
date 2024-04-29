import React from 'react';

import jsonTestimonial from "../json/testimonial.json";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TestiVideoSlider = () => {
    const responsive = {
        allDisplay: {
          breakpoint: { max: 10000, min: 0 },
          items: 1,
        }
      };
  return (
      
      <div className=" z-2 mx-5 md:mx-12 lg:mx-24">
        <Carousel
          responsive={responsive}
          infinite
        >
      {jsonTestimonial.videos.map((item) => (
        <video src={item.videoUrl} key={item.id} controls className="w-full lg:w-2/6 mx-auto mt-14 mb-12"></video>
      ))}
    </Carousel>
    </div>
  );
}

export default TestiVideoSlider;
