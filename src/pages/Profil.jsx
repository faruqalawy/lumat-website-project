import React from "react";

import Header from "../parts/Header.jsx";
import Footer from "../parts/Footer.jsx";
import Button from "../component/button.jsx";
import WhatsappButton from "../component/whatsappButton.jsx";

import jsonProfil from "../json/profil.json";

import mainImageProfil from "../assets/images/main-image-profil.webp";
import img1 from "../assets/images/1.webp";

const Profil = ({isSmallNavOpen, setIsSmallNavOpen}) => {
    const content =  (
        <div className="md:mt-8 lg:mt-0">
            <div>
              <h1 className="text-xl md:text-4xl text-orange-light font-bold mt-3">
                Visi Kami
              </h1>
              <p className="md:text-xl font-openSans font-light md:mt-1">
                {jsonProfil.visi}
              </p>
            </div>
            <div className="md:mt-6 mb-20">
              <h1 className="text-xl md:text-4xl text-orange-light font-bold mt-3">
                Misi Kami
              </h1>
              <ol type="1" className="ml-5">
                {jsonProfil.misi.map((item, index) => (
                  <li
                    className=" md:text-xl font-openSans font-light list-disc"
                    key={index}
                  >
                    {item.desc}
                  </li>
                ))}
              </ol>
            </div>
          </div>
    )
  return (
    <>
      <Header title="Profil" setIsSmallNavOpen={setIsSmallNavOpen} />

      <div className="mx-5 md:mx-12 lg:mx-24 my-8 md:mt-12 lg:mt-16">

        <div className=" flex flex-col lg:grid lg:grid-cols-2 gap-6">
          <img src={mainImageProfil} alt="profil-main-image" />
          <div className="flex flex-col mt-1 md:mt-8 lg:mt-0">
            <h1 className=" md:mb-3 text-xl md:text-4xl text-orange-light font-bold">
              TENTANG KAMI
            </h1>
            <p className=" md:text-xl font-openSans font-light">
              {jsonProfil.description}
            </p>
            <Button isArrow text="LIHAT PRODUK KAMI" path="/product" className="mt-2.5 md:mt-5" />
          </div>
        </div>

        <div className="mt-12 md:mt-20 lg:hidden">
          <img src={img1} alt="lumat-team" />
          {content}
        </div>

        <div className="hidden mt-8 lg:block">
          {content}
        </div>

      </div>

      <Footer />

      <WhatsappButton isSmallNavOpen={isSmallNavOpen} />
    </>
  );
};

export default Profil;
