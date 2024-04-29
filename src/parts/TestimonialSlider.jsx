import React from 'react'

import jsonHome from "../json/home.json";

import Testimonial from '../component/testimonial';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TestimonialSlider = () => {
        const responsive = {
          allDisplay: {
            breakpoint: { max: 10000, min: 0 },
            items: 1,
          }
        };
      

  return (
    <Carousel
    responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={2500}
      infinite={true}
    >
      {jsonHome.testimonials.map((item, index) => (
        <Testimonial key={index} name={item.name} imageUrl={item.imageUrl} status={item.status} testimonial={item.testimonial} />
      ))}
    </Carousel>
  )
}

export default TestimonialSlider