import React from 'react';
import TestiPage from '../component/TestiPage';
import jsonTestimonial from "../json/testimonial.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TestiPageSlider = ({isSmallNavOpen}) => {
  const responsive = {
    allDisplay: {
      breakpoint: { max: 10000, min: 0 },
      items: 1,
    }
  };
  return (
    <>
    {
      isSmallNavOpen ? (
        <>
        {jsonTestimonial.testimonials.map((testimonial, index) => (
          <TestiPage
            key={index}
            id={index}
            name={testimonial.name}
            imageUrl={testimonial.imageUrl}
            testimonial={testimonial.testimonial}
          />
        ))}
        </>
      ) : (
        <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={2500}
      infinite={true}
    >
      {jsonTestimonial.testimonials.map((testimonial, index) => (
        <TestiPage
          key={index}
          id={index}
          name={testimonial.name}
          imageUrl={testimonial.imageUrl}
          testimonial={testimonial.testimonial}
        />
      ))}
    </Carousel>
      )
    }
    </>
  );
};

export default TestiPageSlider;