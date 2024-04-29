import React from "react";
import jsonProduct from "../json/product.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../index.css";

const ProductDetails = ({isSmallNavOpen}) => {
  const responsive = {
    allDisplay: {
      breakpoint: { max: 5000, min: 0 },
      items: 2,
    },
  };

  const carousel = (item) => (
    <>
    {isSmallNavOpen ? (
      <>
      {Object.values(item.images).map((image, index) => (
        <img key={index} src={image} alt={image} className="z-1" />
      ))}
      </>
    ) : (

    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      itemClass="static-carousel"
    >
      {Object.values(item.images).map((image, index) => (
        <img key={index} src={image} alt={image} className="z-1" />
      ))}
    </Carousel>
    )}
    </>
  );

  const description = (item) => (
    <div className="mt-3 md:mt-6 l:m-0">
      <h1 className="text-center l:text-left font-bold md:text-2xl">
        {item.name}
      </h1>
      <p className="text-center l:text-left font-openSans font-light text-[10px] md:text-[14px] xl:text-base mb-4 md:mb-6">
        {item.description}
      </p>

      <div className="p-4 bg-light-yellow border-2 border-salted-yellow font-openSans text-[10px] md:text-[14px] xl:text-base grid grid-rows-5 gap-2.5 divide-y-[1.5px] divide-grey-light">
        <div className="row-span-1 grid grid-cols-3">
          {item.pricing.map((price, index) => (
            <div key={index}>
              <h2 className="font-semibold">{price.name}</h2>
              <p className="font-light">{price.desc}</p>
            </div>
          ))}
        </div>
        <div className="pt-2 row-span-2">
          <h2 className="font-semibold">Informasi Produk</h2>
          {Object.values(item.information).map((information, index) => (
            <p className="font-light" key={index}>
              - {information}
            </p>
          ))}
        </div>
        <div className="pt-2 row-span-2">
          <h2 className="font-semibold">Pilihan Cara Penyajian</h2>
          {Object.values(item.servings).map((serving, index) => (
            <p className="font-light" key={index}>
              - {serving}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-5 md:mx-12 lg:mx-24">
      <h1 className="font-bold text-center text-sm mt-6 mb-3 md:mt-12 md:mb-6 lg:mt-20 lg:mb-10 sm:text-2xl md:text-3xl xl:text-5xl">
        {jsonProduct.tagline}
      </h1>
      {jsonProduct.products.map((item, index) => (
        <div
          key={item.id}
          className={`pb-12 lg:pb-24 ${
            index < 5 ? "border-b-[1px] border-light-black" : ""
          } ${index > 0 ? "pt-12 lg:pt-24" : ""}`}
        >
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Render carousel */}
            <div className={`${
              index % 2 == 0 ? "lg:order-0" : "lg:order-1"
            }`}>
              {carousel(item)}
            </div>
            {/* Render description */}
            <div >
              {description(item)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
