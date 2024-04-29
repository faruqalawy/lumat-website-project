import React from "react";

import { Link } from "react-router-dom";

import Arrow from "../assets/icons/arrow.svg";
import ArrowOrange from "../assets/icons/arrow-orange.svg";

import { twMerge } from "tailwind-merge";

function Button(props) {
  const { isWhite, isArrow, isSubmit } = props;

  return (
    <Link to={props.path}>
      <button
        className={twMerge(
          "flex bg-orange hover:bg-dark-orange text-white rounded-full h-5 md:h-10 lg:h-14 sm:mt-2 lg:mt-4 items-center w-fit px-3 py-4 md:py-6 lg:py-8",
          props.className
        )}
      >
        <h2
          className={`font-barlow  font-medium text-xs md:text-lg lg:text-2xl ${
            isArrow ? "pl-1.5 md:pl-3 lg:pl-5" : ""
          }`}
        >
          {props.text}
        </h2>
        <img
          src={isWhite ? ArrowOrange : Arrow}
          className={`h-3 md:h-4 lg:h-6 pr-1.5 sm:pr-2.5 lg:pr-6 pl-0.5 md:pl-1 lg:pl-2.5 ${
            isArrow ? "" : "hidden"
          }`}
          alt="arrow"
        />
      </button>
    </Link>
  );
}

export default Button;
