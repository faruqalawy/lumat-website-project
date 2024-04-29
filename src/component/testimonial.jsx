import React from "react";

import backgroundImage from "../assets/images/bg-testimonial.png";
import star from "../assets/icons/star.svg";

import Button from "./button";

const Testimonial = (props) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <img key={i} src={star} alt="star" className="w-8 sm:w-10 xl:w-12" />
    );
  }

  const content = (
    <div className=" mx-5 md:mx-12 lg:mx-24 flex flex-col justify-center items-center lg:grid lg:grid-cols-2 py-8 md:py-14  ">
      <div className="text-center flex flex-col items-center">
        <img
          src={props.imageUrl}
          alt="testimonial"
          className="rounded-full max-w-[70vw] md:max-w-[60vw]  border-[10px] border-white lg:max-w-[35vw]"
        />
        <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold pt-1">
          {props.name}
        </h1>
        <p className="text-xs sm:text-sm lg:text-lg font-bold">
          {props.status}
        </p>
      </div>

      <div>
        <img
          src="/quote-left.svg"
          alt="quote-left"
          className="opacity-20 w-10 pb-1 md:w-12 lg:w-16"
        />
        <h1 className="font-openSans text-xs sm:text-sm lg:text-lg font-light sm:max-w-[70vw]">
          {props.testimonial}
        </h1>
        <img
          src="/quote-right.svg"
          alt="quote-right"
          className="opacity-20 w-10 ml-auto pb-1 md:w-12 lg:w-16"
        />
        <div className="flex justify-center">{stars}</div>
      </div>

      <div></div>

      <div className="ml-auto pt-5 lg:pt-0">
        <Button isArrow text="Selengkapnya" path="/testimonial" className="bg-white hover:bg-grey-light text-orange" isWhite />
      </div>
    </div>
  );

  return (
    <>
      <div className=" bg-orange-light text-white mt-14 font-nunito text relative lg:hidden">
        {content}
      </div>
      <div
        className="hidden lg:block text-white mt-14 font-nunito text relative xl:bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {content}
      </div>
    </>
  );
};

export default Testimonial;
