import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import lumat from "../assets/icons/logo-lumat.svg";

import { Fade } from "react-awesome-reveal";

import "../index.css";

const isPageActive = (currentPage, targetPage) => {
  return currentPage === targetPage ? 'text-yellow' : '';
};

const Nav = ({ setIsSmallNavOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { 
      if (isOpen) {
        document.body.style.overflowY = "hidden";
        setIsSmallNavOpen(true);
      } else {
        document.body.style.overflowY = "auto";
        setIsSmallNavOpen(false);
      }
  }, [isOpen, setIsSmallNavOpen]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const smallNav = (
    <Fade duration={350}> 
      <nav className="w-full bg-black/80 sm:hidden absolute left-0 top-0 h-screen flex justify-center items-center border-b border-black">
        <ul className="text-3xl gap-12 font-semibold text-center text-white flex flex-col">
          <li>
            <Link to="/" className={`hover:text-yellow ${isPageActive(pathname, '/')}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className={`hover:text-yellow ${isPageActive(pathname, '/product')}`}>
              Produk
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className={`hover:text-yellow ${isPageActive(pathname, '/portfolio')}`}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/testimonial" className={`hover:text-yellow ${isPageActive(pathname, '/testimonial')}`}>
              Testimoni
            </Link>
          </li>
          <li>
            <Link to="/profil" className={`hover:text-yellow ${isPageActive(pathname, '/profil')}`}>
              Profil
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`hover:text-yellow ${isPageActive(pathname, '/contact')}`}>
              Kontak
            </Link>
          </li>
        </ul>
      </nav>
    </Fade>
  );

  return (
    <>
      <div className="flex justify-between pt-4 md:pt-8 lg:pt-14 pb-9 lg:pb-20">
        <img src={lumat} alt="brand-logo" className="w-32 md:w-48" />

        <div>{isOpen && smallNav}</div>

        <div className="sm:hidden flex justify-center">
          <button onClick={toggleNavbar} name="toggle-navbar">
            <div className={isOpen ? "toggle active" : "toggle"}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <nav className="hidden sm:flex justify-between">
          <ul className="font-semibold flex gap-5 items-center text-white text-base lg:text-2xl ">
            <li>
              <Link to="/" className={`hover:text-yellow ${isPageActive(pathname, '/')}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" className={`hover:text-yellow ${isPageActive(pathname, '/product')}`}>
                Produk
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className={`hover:text-yellow ${isPageActive(pathname, '/portfolio')}`}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/testimonial" className={`hover:text-yellow ${isPageActive(pathname, '/testimonial')}`}>
                Testimoni
              </Link>
            </li>
            <li>
              <Link to="/profil" className={`hover:text-yellow ${isPageActive(pathname, '/profil')}`}>
                Profil
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`hover:text-yellow ${isPageActive(pathname, '/contact')}`}>
                Kontak
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
