import React from "react";
import { Link } from "react-router-dom";

const BestProduct = (props) => {
  return (
    <Link to="/product">
      <div
        className="group overflow-hidden cursor-pointer"
        style={{ position: "relative" }}
      >
        <img src={props.imageUrl} className="relative" alt={props.name} />
        <div className="cursor-pointer absolute inset-x-0 inset-y-0 flex justify-center items-center  bg-black opacity-60 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
          <p className="text-white">Details</p>
        </div>
      </div>
      <h1 className="font-nunito text-center mt-2.5 md:mt-5 lg:mt-7 font-medium text-xs sm:text-2xl lg:text-3xl xl:text-4xl hover:text-orange cursor-pointer duration-200">
        {props.name}
      </h1>
    </Link>
  );
};

export default BestProduct;
