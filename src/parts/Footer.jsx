import React from "react";

import Logo from "../assets/icons/logo-lumat.svg";
import Instagram from "../assets/icons/ic_instagram.svg";
import Tiktok from "../assets/icons/ic_tiktok.svg";
import Shopee from "../assets/icons/ic_shopee.svg";
import Tokopedia from "../assets/icons/ic_tokopedia.svg";
import Up from "../assets/icons/ic_up.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" bg-grey w-full font-nunito text-white">
      <div className="flex flex-col items-center pt-4 text-xs md:text-base">
        <img
          src={Up}
          alt="up"
          className=" md:w-8 hover:cursor-pointer "
          target="_blank"
          rel="noopener noreferrer"
          onClick={scrollToTop}
        />
        <p
          className="hover:cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
          onClick={scrollToTop}
        >
          Back to Top
        </p>
      </div>
      <div className="mx-5 md:mx-12 lg:mx-24 grid grid-rows-6 grid-cols-6 gap-1 md:gap-2 lg:gap-3 py-5 text-xs md:text-base">
        <div className=" col-span-6 row-span-2 md:row-span-3 lg:row-span-6 lg:col-span-2 mx-auto md:mb-8">
          <img src={Logo} alt="brand-logo" className="md:w-[350px]" />
          <h1 className="mt-1 text-base md:text-[26px]">
            Lumbung Makanan Nikmat
          </h1>
        </div>
        <div className=" col-span-6 row-span-2 md:col-span-3 md:row-span-3 lg:row-span-6 lg:col-span-2">
          <h1 className="text-orange border-b pb-1  font-bold">HUBUNGI KAMI</h1>
          <div className="pt-2 flex flex-col gap-2">
            <p>
              {" "}
              <span className="font-bold">Alamat:</span> Lumat{" "}
            </p>
            <p>
              Jl. Guntur Sari No. 15, Haurpanggung, Kecamatan Garut Kota,
              Kabupaten Garut
            </p>
            <p>
              <a
                href="https://wa.me/6282115459797"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-bold">No WA:</span> 0821-1545-9797
              </a>
            </p>
            <p>
              <span className="font-bold">Email:</span>{" "}
              <a
                href="mailto:lumatpublicrelations@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                lumatpublicrelations@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="col-span-6 row-span-2 md:col-span-3 md:row-span-3 lg:row-span-6 lg:col-span-2  grid grid-rows-2 ">
          <div className="">
            <h1 className="text-orange border-b pb-1 font-bold">
              MEDIA SOSIAL
            </h1>
            <div className="flex gap-2 pt-2 ">
              <a
                href="https://www.instagram.com/lumatofficial/"
                className="hover:cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="instagram" />
              </a>
              <a
                href="https://www.tiktok.com/@lumatofficial"
                className=" hover:cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Tiktok} alt="tiktok" />
              </a>
            </div>
          </div>
          <div className="mt-1">
            <h1 className="text-orange border-b pb-1 font-bold">ONLINE SHOP</h1>
            <div className="flex gap-2 pt-2">
              <a
                href="http://shopee.co.id/lumatofficial"
                className=" hover:cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Shopee} alt="shopee" />
              </a>
              <a
                href="https://tokopedia.link/lumatofficial"
                className=" hover:cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Tokopedia} alt="tokopedia" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center font-barlow text-xs md:text-base py-8 border-t">
        <h1>Copyright © Lumat. 2024. All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
