import React from "react";

import Header from "../parts/Header.jsx";
import ContactForm from "../parts/ContactForm.jsx";
import Footer from "../parts/Footer.jsx";
import Maps from "../parts/Maps.jsx";
import WhatsappButton from "../component/whatsappButton.jsx";

import PhoneImage from "../assets/icons/ic_phone.svg";
import EmailImage from "../assets/icons/ic_mail.svg";
import InstagramImage from "../assets/icons/ic_instagram-2.svg";

const Contact = ({isSmallNavOpen, setIsSmallNavOpen}) => {
  return (
    <>
      <Header title="Kontak" setIsSmallNavOpen={setIsSmallNavOpen} />

      <ContactForm />

      <div className="mx-5 md:mx-12 lg:mx-24 flex flex-col items-center my-9">
        <h1 className=" font-bold text-sm md:text-[28px]">
          Anda Juga Dapat Menghubungi Kami Melalui:
        </h1>

        <div className="flex flex-col gap-8 mt-6 lg:mt-10 md:flex-row md:gap-16 lg:gap-20">
          <div className="flex flex-col items-center">
            <a
              href="https://wa.me/6282115459797"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={PhoneImage}
                alt="phone icon"
                className="md:w-20 lg:w-24"
              />
            </a>
            <h1 className="text-xs md:text-base lg:text-xl mt-2">HP/SMS/WA</h1>
            <p className="font-light font-openSans text-xs md:text-base lg:text-xl">
              0821-1545-9797
            </p>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="mailto:lumatpublicrelations@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={EmailImage}
                alt="phone icon"
                className="md:w-20 lg:w-24"
              />
            </a>
            <h1 className="text-xs md:text-base lg:text-xl mt-2">EMAIL</h1>
            <p className="font-light font-openSans text-xs md:text-base lg:text-xl">
              lumatpublicrelations@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="https://www.instagram.com/lumatofficial/"
              className="hover:cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={InstagramImage}
                alt="phone icon"
                className="md:w-20 lg:w-24"
              />
            </a>
            <h1 className="text-xs md:text-base lg:text-xl mt-2">INSTAGRAM</h1>
            <p className="font-light font-openSans text-xs md:text-base lg:text-xl">
              @lumatofficial
            </p>
          </div>
        </div>
      </div>

      <Maps />

      <Footer />

      <WhatsappButton isSmallNavOpen={isSmallNavOpen} />
    </>
  );
};

export default Contact;
