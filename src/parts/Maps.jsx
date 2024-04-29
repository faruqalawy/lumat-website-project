import React from "react";

function Maps() {
  return (
    <div className="mx-5 md:mx-12 lg:mx-24 my-20">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1Nl9K4N4H4taKA18ro1wuPOT2aOnx0xc&ehbc=2E312F"
        height="480"
        className=" w-full"
        title="lumat-office-map"
      ></iframe>
    </div>
  );
}

export default Maps;
