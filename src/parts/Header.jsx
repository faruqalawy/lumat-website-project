// Header.jsx
import React from 'react';
import backgroundImage from "../assets/images/header-background.webp";
import Nav from '../component/Nav';

const Header = (props) => {
  const { setIsSmallNavOpen } = props;

  return (
    <div 
      className="max-w-full"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"}}>
      <header className="mx-5 md:mx-12 lg:mx-24 pb-9 md:pb-20 lg:pb-28">
        <Nav setIsSmallNavOpen={setIsSmallNavOpen} /> {/* Gunakan nama prop yang sesuai di sini */}
        <h1 className="text-center text-white font-extrabold text-3xl sm:text-5xl md:text-6xl xl:text-7xl">
          {props.title}
        </h1>
      </header>
    </div>
  )
}

export default Header;
