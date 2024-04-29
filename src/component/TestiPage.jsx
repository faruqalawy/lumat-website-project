import React from 'react';

import testiImage1 from "../assets/images/testi-1.webp";
import testiImage2 from "../assets/images/testi-2.webp";
import testiImage3 from "../assets/images/testi-woman.webp";

import star from "../assets/icons/star-yellow.svg";

const TestiPage = ({ id, imageUrl, testimonial, name }) => {
  const testiImage = [testiImage1, testiImage2, testiImage3];

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <img key={i} src={star} alt="star" className="w-8 sm:w-10 xl:w-12" />
    );
  };
  return (
    <div key={id} className='lg:flex'>
      
      {/*code below is for img in small an medium display*/}
      <div className="text-center flex flex-col items-center lg:hidden">
        <img
          src={imageUrl}
          alt="testimonial"
          className="rounded-full max-w-[70vw] md:max-w-[60vw]  border-[10px] border-white"
          fetchPriority='high'
        />
        <h1 className="text-lg sm:text-2xl font-medium pt-1 lg:hidden">
          Happy Customer
        </h1>
        <div className="flex justify-center my-3 lg:hidden">{stars}</div>
      </div>

      {/*code below is for img in large display*/}
      <div className=" hidden lg:flex">
        <div className="col-auto" style={{ marginRight: 30 }}>
          <div className="" style={{ margin: `30px 0 0 30px` }}>
            <img
              src={testiImage[id]}
              alt={`Testimonial ${id}`}
              className=""
              style={{ zIndex: 1 }}
              fetchPriority='high'
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center lg:items-start lg:gap-3">
        <h1 className="hidden lg:block text-lg sm:text-2xl lg:text-4xl font-medium pt-1">
          Happy Customer
        </h1>
        <div className="hidden lg:flex">{stars}</div>
        <h1 className="font-openSans text-center lg:text-left text-xs sm:text-base lg:text-lg font-light sm:max-w-[70vw]">
          {testimonial}
        </h1>
        <p className="text-center lg:text-left lg:hidden font-light sm:text-xl md:text-2xl">{name}</p>
      </div>
    </div>
  );
};

export default TestiPage;