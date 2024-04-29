import React from 'react';

import jsonHome from "../json/home.json";

const Pros = () => {
  return (
    <div
        className="shadow-md flex-col mx-5 md:mx-12 lg:mx-24 rounded-md z-2 bg-white"
        style={{ marginTop: -15 }}
      >
        <h1 className="font-nunito font-bold text-2xl md:text-3xl lg:text-[40px] text-center py-5 md:py-8">
          KENAPA LUMAT?
        </h1>
        <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-8 md:gap-0 pb-5 md:pb-7">
          {jsonHome.pros.map((item, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="lg:w-28 lg:h-28"
                />
                <h1 className="font-nunito font-semibold text-2xl lg:text-3xl mt-2.5 ">
                  {item.name}
                </h1>
                <p className="font-openSans text-center mx-4 text-xs lg:text-base xl:text-lg">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
  )
}

export default Pros